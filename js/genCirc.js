'use strict';

// Constants
const x_long = 430/2;
const y_long = 475/2;

// DOM Elements
const comp_keyword_x = $("#comp_keyword_x");
const comp_keyword_y = $("#comp_keyword_y");
const svgContainer = $("#SvgjsSvg1001");
const clamp = $(".clamp.bot1");
const sponge = $(".clamp.bot2");

// Calculate averages
const overallAverage = circleUtils.calculateOverallAverage();

// Generate all circles
const allCircles = circleUtils.generateAllCircles();

// Utility functions
function realVal(orientation, sqr) {
    if (orientation) {
        // cx, left right, horizontal
        return sqr * 21 + 214;
    } else {
        // cy, auth lib, vertical
        return (-1 * sqr) * 23 + 236;
    }
}

function prctgStat(orientation, axy) {
    let ahhh = 0;
    if (orientation) {
        // IF more than x_long RIGHT
        if (axy > x_long) {
            ahhh = ((axy-x_long)/x_long)*100;
            comp_keyword_x.html((Math.round(ahhh) + "% Right"));
        // IF less than x_long LEFT
        } else if (axy < x_long) {
            ahhh = ((x_long-axy)/x_long)*100;
            comp_keyword_x.html((Math.round(ahhh) + "% Left"));
        } else {
            comp_keyword_y.html("Perfectly even, huh");
        }
    } else {
        // IF more than y_long LIBERTARIAN
        if (axy > y_long) {
            ahhh = ((axy-y_long)/y_long)*100;
            comp_keyword_y.html((Math.round(ahhh) + "% Liberal"));
        // IF more than y_long AUTHORITARIAN
        } else if (axy < y_long) {
            ahhh = ((y_long-axy)/y_long)*100;
            comp_keyword_y.html((Math.round(ahhh) + "% Conservative"));
        } else {
            comp_keyword_y.html("Perfectly even, huh");
        }
    }
}

function prctgChangePerson(host) {
    if (host === "all") {
        prctgStat(true, realVal(true, overallAverage.x));
        prctgStat(false, realVal(false, overallAverage.y));
    } else {
        const avg = circleUtils.calculateAverage(host);
        prctgStat(true, realVal(true, avg.x));
        prctgStat(false, realVal(false, avg.y));
    }
}

function prctgChangeTime(yr) {
    if (yr === "all") {
        prctgStat(true, realVal(true, overallAverage.x));
        prctgStat(false, realVal(false, overallAverage.y));
    } else {
        let time_x = 0, time_y = 0;
        let count = 0;
        
        // Calculate average for the specific year
        Object.entries(circleData.people).forEach(([id, person]) => {
            if (person.values[yr]) {
                const [x, y] = person.values[yr];
                time_x += x;
                time_y += y;
                count++;
            }
        });

        if (count > 0) {
            time_x /= count;
            time_y /= count;
            prctgStat(true, realVal(true, time_x));
            prctgStat(false, realVal(false, time_y));
        }
    }
}

// Circle creation functions
function createCirc(cx, cy, r, fill, stroke, sw, cls, yr) {
    let circ = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    circ.setAttribute("cx", cx);
    circ.setAttribute("cy", cy);
    circ.setAttribute("r", r);
    circ.setAttribute("fill", fill);
    circ.setAttribute("stroke", stroke);
    circ.setAttribute("stroke-width", sw);
    circ.classList.add(cls);
    circ.classList.add("t_"+yr);
    
    return circ;
}

function createImg(cx, cy, r, img_src, cls, yr) {
    let group = document.createElementNS("http://www.w3.org/2000/svg", "g");

    let clippath = document.createElementNS("http://www.w3.org/2000/svg", "clipPath");
    clippath.setAttribute("id", "clipCircle" + cx + "_" + cy);

    let clipCirc = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    clipCirc.setAttribute("cx", cx);
    clipCirc.setAttribute("cy", cy);
    clipCirc.setAttribute("r", r);

    clippath.appendChild(clipCirc);

    let img_eel = document.createElementNS("http://www.w3.org/2000/svg", "image");
    img_eel.setAttribute("x", cx - r);
    img_eel.setAttribute("y", cy - r);
    img_eel.setAttribute("width", r * 2);
    img_eel.setAttribute("height", r * 2);
    img_eel.setAttribute("clip-path", "url(#clipCircle" + cx + "_" + cy + ")");
    img_eel.setAttributeNS("http://www.w3.org/1999/xlink", "href", img_src);
    img_eel.classList.add(cls);
    img_eel.classList.add("t_"+yr);

    group.appendChild(img_eel);
    group.appendChild(clippath);

    return group;
}

function loopCreate(groupData) {
    groupData.forEach(function (circle) {
        let group = document.createElementNS("http://www.w3.org/2000/svg", "g");

        let circ = createCirc(circle.cx, circle.cy, circle.r, circle.fill, circle.stroke, circle.strokeWidth, circle.class, circle.year);
        group.appendChild(circ);

        let img_eel = createImg(circle.cx, circle.cy, circle.r, circle.imageSrc, circle.class, circle.year);
        group.appendChild(img_eel);

        svgContainer.append(group);
    });
}

// Create all circles
allCircles.forEach(function (groupData) {
    loopCreate(groupData);
});

// Create averages
const avgCircles = Object.entries(circleData.people).map(([id, person]) => {
    const avg = circleUtils.calculateAverage(id);
    return {
        id,
        cx: circleData.coordinateConversion.x(avg.x),
        cy: circleData.coordinateConversion.y(avg.y),
        image: person.image
    };
});

// Add overall average
avgCircles.push({
    id: "all",
    cx: circleData.coordinateConversion.x(overallAverage.x),
    cy: circleData.coordinateConversion.y(overallAverage.y),
    image: "https://files.catbox.moe/5b7es1.png"
});

// Create average circles
avgCircles.forEach(person => {
    let group = document.createElementNS("http://www.w3.org/2000/svg", "g");

    let circ = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    circ.setAttribute("cx", person.cx);
    circ.setAttribute("cy", person.cy);
    circ.setAttribute("r", circleData.circleConfig.radius);
    circ.setAttribute("fill", "#ff0000");
    circ.setAttribute("stroke", "#000");
    circ.setAttribute("stroke-width", circleData.circleConfig.strokeWidth);
    circ.classList.add("c_avg");
    circ.classList.add("hidden_def");

    let clippath = document.createElementNS("http://www.w3.org/2000/svg", "clipPath");
    clippath.setAttribute("id", "clipCircle" + person.cx + "_" + person.cy);

    let clipCirc = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    clipCirc.setAttribute("cx", person.cx);
    clipCirc.setAttribute("cy", person.cy);
    clipCirc.setAttribute("r", circleData.circleConfig.radius);

    clippath.appendChild(clipCirc);

    let img_eel = document.createElementNS("http://www.w3.org/2000/svg", "image");
    img_eel.setAttribute("x", person.cx - circleData.circleConfig.radius);
    img_eel.setAttribute("y", person.cy - circleData.circleConfig.radius);
    img_eel.setAttribute("width", circleData.circleConfig.radius * 2);
    img_eel.setAttribute("height", circleData.circleConfig.radius * 2);
    img_eel.setAttribute("clip-path", "url(#clipCircle" + person.cx + "_" + person.cy + ")");
    img_eel.setAttributeNS("http://www.w3.org/1999/xlink", "href", person.image);
    img_eel.classList.add("c_avg");
    img_eel.classList.add("hidden_def");

    group.append(circ);
    group.appendChild(clippath);
    group.appendChild(img_eel);

    svgContainer.append(group);
});

// Animation functions
function animateCirc(circleData) {
    if (time_active) {
        clampRevealTheSecondComing();
        console.log("exit early, anim global is active");
        return;
    }
    if (!spec_active) {
        clampReveal();
        console.log("exit early, anim global is active");
        return;
    }

    let currIndx = 0;

    if (circleData.length <= 1) {
        console.log("anim: only one circle exists");
        return;
    }

    function animateStep() {
        let pos = circleData[currIndx];
        let trgtPos = circleData[currIndx + 1];

        let circ = createCirc(pos.cx, pos.cy, pos.r, pos.fill);
        svgContainer.append(circ);

        $(circ).animate({
            cx: trgtPos.cx,
            cy: trgtPos.cy
        }, {
            duration: 900,
            step: function(now, fx) {
                if (fx.prop === "cx") {
                    circ.setAttribute("cx", now);
                } else if (fx.prop === "cy") {
                    circ.setAttribute("cy", now);
                }
            },
            complete: function() {
                $(this).remove();
                currIndx++;
                if (currIndx < circleData.length - 1) {
                    animateStep();
                }
            }
        });
    }
    animateStep();
}

// Clamp functions
function getPplIdx() {
    const personIds = Object.keys(circleData.people);
    return personIds.indexOf(data_clicks);
}
function clampReveal() {
    clamp.css("bottom", "0");
    setTimeout(function() {
        clamp.css("bottom", "-11%");
    }, 2000);
}
function clampRevealTheSecondComing() { // i am the same person after all xD
    sponge.css("bottom", "0");
    setTimeout(function() {
        sponge.css("bottom", "-11%");
    }, 2000);
}

// Animation trigger
$(".pog_btn").click(function() {
    animateCirc(allCircles[getPplIdx()]);
});

// Set default state
prctgStat(true, circleData.coordinateConversion.x(overallAverage.x));
prctgStat(false, circleData.coordinateConversion.y(overallAverage.y));