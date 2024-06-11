
let s123_x = s123_y
    = laya_x = laya_y
    = asap_x = asap_y
    = deep_x = deep_y
    = kumo_x = kumo_y
    = simp_x = simp_y
    = qiii_x = qiii_y
    = reoo_x = reoo_y
    = over_x = over_y
    = 0;

let x_long = 430/2;
let y_long = 475/2;

let comp_keyword_x = $("#comp_keyword_x");
let comp_keyword_y = $("#comp_keyword_y");

let svgContainer = $("#SvgjsSvg1001");
let clamp = $(".clamp");

let c_18 = getComputedStyle(document.documentElement).getPropertyValue('--c_18');
let c_20 = getComputedStyle(document.documentElement).getPropertyValue('--c_20');
let c_21 = getComputedStyle(document.documentElement).getPropertyValue('--c_21');
let c_22 = getComputedStyle(document.documentElement).getPropertyValue('--c_22');
let c_23 = getComputedStyle(document.documentElement).getPropertyValue('--c_23');
let c_24 = getComputedStyle(document.documentElement).getPropertyValue('--c_24');

let s123_img = "https://files.catbox.moe/6wex5e.png";
let laya_img = "https://files.catbox.moe/p1x3bk.png";
let asap_img = "https://files.catbox.moe/uj0hv4.png";
let deep_img = "https://files.catbox.moe/kkeszb.png";
let kumo_img = "https://files.catbox.moe/b8a8dz.png";
let simp_img = "https://files.catbox.moe/2gud1u.png";
let qiii_img = "https://files.catbox.moe/lwm5dj.png";
let reoo_img = "https://files.catbox.moe/l7ce91.png"

s123_vals = [
    [18, -3.83, -2.21]
    , [20, -2.71, -3.69]
    , [22, -3.85, -5.11]
    , [23, 0.55, -3.35]
];
laya_vals = [
    [20, -2.08, -2.81]
    , [23, -4.63, -3.18]
];
asap_vals = [
    [20, -3.21, 1.03]
    , [23, 1.73, -0.67]
];
deep_vals = [
    [20, -1.66, -1.16]
    , [23, -2.38, 0.56]
];
kumo_vals = [
    [20, 2.22, 3.65]
];
simp_vals = [
    [20, 4.12, 4.76]
];
qiii_vals = [
    [20, -1.68, -3.03]
];
reoo_vals = [
    [20, -0.91, -4.21]
    , [21, -0.71, -1.52]
    , [22, -0.08, -6.11]
    , [23, -1.52, -5.55]
    // , [11, 3.33, 6.11]
];

let s123_nr = s123_vals.length;
let laya_nr = laya_vals.length;
let asap_nr = asap_vals.length;
let deep_nr = deep_vals.length;
let kumo_nr = kumo_vals.length;
let simp_nr = simp_vals.length;
let qiii_nr = qiii_vals.length;
let reoo_nr = reoo_vals.length;

s123_vals.forEach(function(val) {
    s123_x += val[1];
    s123_y += val[2];
});
s123_x /= s123_nr;
s123_y /= s123_nr;

laya_vals.forEach(function(val) {
    laya_x += val[1];
    laya_y += val[2];
});
laya_x /= laya_nr;
laya_y /= laya_nr;

asap_vals.forEach(function(val) {
    asap_x += val[1];
    asap_y += val[2];
});
asap_x /= asap_nr;
asap_y /= asap_nr;

deep_vals.forEach(function(val) {
    deep_x += val[1];
    deep_y += val[2];
});
deep_x /= deep_nr;
deep_y /= deep_nr;

kumo_vals.forEach(function(val) {
    kumo_x += val[1];
    kumo_y += val[2];
});
kumo_x /= kumo_nr;
kumo_y /= kumo_nr;

simp_vals.forEach(function(val) {
    simp_x += val[1];
    simp_y += val[2];
});
simp_x /= simp_nr;
simp_y /= simp_nr;

qiii_vals.forEach(function(val) {
    qiii_x += val[1];
    qiii_y += val[2];
});
qiii_x /= qiii_nr;
qiii_y /= qiii_nr;

reoo_vals.forEach(function(val) {
    reoo_x += val[1];
    reoo_y += val[2];
});
reoo_x /= reoo_nr;
reoo_y /= reoo_nr;

over_x = (s123_x+laya_x+asap_x+deep_x+kumo_x+simp_x+qiii_x+reoo_x)/8
over_y = (s123_y+laya_y+asap_y+deep_y+kumo_y+simp_y+qiii_y+reoo_y)/8

function realVal(orientation, sqr) {
    if (orientation) {
        // cx, left right, horizontal
        return sqr*21+214
    } else {
        // cy, auth lib, vertical
        return (-1*sqr)*23+236
    }
}
function prctgStat(orientation, axy) {
    let ahhh = 0;
    if (orientation) {
        // IF more than x_long RIGHT
        if (axy > x_long) {
            ahhh = ((axy-x_long)/x_long)*100
            comp_keyword_x.html((Math.round(ahhh) + "%" + " Right"))
        // IF less than x_long LEFT
        } else if (axy < x_long) {
            ahhh = ((x_long-axy)/x_long)*100
            comp_keyword_x.html((Math.round(ahhh) + "%" + " Left"))
        } else {
            comp_keyword_y.html(("Perfectly even, huh"))
        }
    } else {
        // IF more than y_long LIBERTARIAN
        if (axy > y_long) {
            ahhh = ((axy-y_long)/y_long)*100
            comp_keyword_y.html((Math.round(ahhh) + "%" + " Libertarian")) 
        // IF more than y_long AUTHORITARIAN
        } else if (axy < y_long) {
            ahhh = ((y_long-axy)/y_long)*100
            comp_keyword_y.html((Math.round(ahhh) + "%" + " Authoritarian")) 
        } else {
            comp_keyword_y.html(("Perfectly even, huh"))
        }
    }
}
function prctgChangePerson(host) {
    if (host == "all") {
        prctgStat(true, realVal(true, over_x))
        prctgStat(false, realVal(false, over_y))
    } else if (host == "s123") {
        prctgStat(true, realVal(true, s123_x))
        prctgStat(false, realVal(false, s123_y))
    } else if (host == "laya") {
        prctgStat(true, realVal(true, laya_x))
        prctgStat(false, realVal(false, laya_y))
    } else if (host == "asap") {
        prctgStat(true, realVal(true, asap_x))
        prctgStat(false, realVal(false, asap_y))
    } else if (host == "deep") {
        prctgStat(true, realVal(true, deep_x))
        prctgStat(false, realVal(false, deep_y))
    } else if (host == "kumo") {
        prctgStat(true, realVal(true, kumo_x))
        prctgStat(false, realVal(false, kumo_y))
    } else if (host == "simp") {
        prctgStat(true, realVal(true, simp_x))
        prctgStat(false, realVal(false, simp_y))
    } else if (host == "qiii") {
        prctgStat(true, realVal(true, qiii_x))
        prctgStat(false, realVal(false, qiii_y))
    } else if (host == "reoo") {
        prctgStat(true, realVal(true, reoo_x))
        prctgStat(false, realVal(false, reoo_y))
    }
}
function prctgChangeTime(yr) {
    if (yr == "all") {
        prctgStat(true, realVal(true, over_x))
        prctgStat(false, realVal(false, over_y))
    } else {
        comp_keyword_x.html(("Pending year specific"))
        comp_keyword_y.html(("Pending year specific")) 
    }
}



// CREATE CIRCLES -------------------------------------
let circleData = [
    [//S123
        { cx: realVal(true, s123_vals[0][1]), cy: realVal(false, s123_vals[0][2]), r: 12, class: "s123_circles", yr: 18, fill: "#ff0f43", stroke: c_18, sw: "3px", imageSrc: s123_img}
        ,{ cx: realVal(true, s123_vals[1][1]), cy: realVal(false, s123_vals[1][2]), r: 12, class: "s123_circles", yr: 20, fill: "#ff0f43", stroke: c_20, sw: "3px", imageSrc: s123_img}
        ,{ cx: realVal(true, s123_vals[2][1]), cy: realVal(false, s123_vals[2][2]), r: 12, class: "s123_circles", yr: 22, fill: "#ff0f43", stroke: c_22, sw: "3px", imageSrc: s123_img}
        ,{ cx: realVal(true, s123_vals[3][1]), cy: realVal(false, s123_vals[3][2]), r: 12, class: "s123_circles", yr: 23, fill: "#ff0f43", stroke: c_23, sw: "3px", imageSrc: s123_img}
    ]
    ,[//LAYA
        { cx: realVal(true, laya_vals[0][1]), cy: realVal(false, laya_vals[0][2]), r: 12, class: "laya_circles", yr: 20, fill: "#b71c1c", stroke: c_20, sw: "3px", imageSrc: laya_img}
        ,{ cx: realVal(true, laya_vals[1][1]), cy: realVal(false, laya_vals[1][2]), r: 12, class: "laya_circles", yr: 23, fill: "#b71c1c", stroke: c_23, sw: "3px", imageSrc: laya_img}
    ]
    ,[//ASAP
        { cx: realVal(true, asap_vals[0][1]), cy: realVal(false, asap_vals[0][2]), r: 12, class: "asap_circles", yr: 20, fill: "#575757", stroke: c_20, sw: "3px", imageSrc: asap_img}
        ,{ cx: realVal(true, asap_vals[1][1]), cy: realVal(false, asap_vals[1][2]), r: 12, class: "asap_circles", yr: 23, fill: "#575757", stroke: c_23, sw: "3px", imageSrc: asap_img}
    ]
    ,[//DEEP
        { cx: realVal(true, deep_vals[0][1]), cy: realVal(false, deep_vals[0][2]), r: 12, class: "deep_circles", yr: 20, fill: "#2d554c", stroke: c_20, sw: "3px", imageSrc: deep_img}
        ,{ cx: realVal(true, deep_vals[1][1]), cy: realVal(false, deep_vals[1][2]), r: 12, class: "deep_circles", yr: 23, fill: "#2d554c", stroke: c_23, sw: "3px", imageSrc: deep_img}
    ]
    ,[//KUMO
        { cx: realVal(true, kumo_vals[0][1]), cy: realVal(false, kumo_vals[0][2]), r: 12, class: "kumo_circles", yr: 20, fill: "#fafafa", stroke: c_20, sw: "3px", imageSrc: kumo_img}
    ]
    ,[//SIMP
        { cx: realVal(true, simp_vals[0][1]), cy: realVal(false, simp_vals[0][2]), r: 12, class: "simp_circles", yr: 20, fill: "#007aff", stroke: c_20, sw: "3px", imageSrc: simp_img}
    ]
    ,[//QIII
        { cx: realVal(true, qiii_vals[0][1]), cy: realVal(false, qiii_vals[0][2]), r: 12, class: "qiii_circles", yr: 20, fill: "#00569f", stroke: c_20, sw: "3px", imageSrc: qiii_img}
    ]
    ,[//REOO
        { cx: realVal(true, reoo_vals[0][1]), cy: realVal(false, reoo_vals[0][2]), r: 12, class: "reoo_circles", yr: 20, fill: "#e0e0e0", stroke: c_20, sw: "3px", imageSrc: reoo_img}
        ,{ cx: realVal(true, reoo_vals[1][1]), cy: realVal(false, reoo_vals[1][2]), r: 12, class: "reoo_circles", yr: 21, fill: "#e0e0e0", stroke: c_21, sw: "3px", imageSrc: reoo_img}
        ,{ cx: realVal(true, reoo_vals[2][1]), cy: realVal(false, reoo_vals[2][2]), r: 12, class: "reoo_circles", yr: 22, fill: "#e0e0e0", stroke: c_22, sw: "3px", imageSrc: reoo_img}
        ,{ cx: realVal(true, reoo_vals[3][1]), cy: realVal(false, reoo_vals[3][2]), r: 12, class: "reoo_circles", yr: 23, fill: "#e0e0e0", stroke: c_23, sw: "3px", imageSrc: reoo_img}
        // ,{ cx: realVal(true, reoo_vals[4][1]), cy: realVal(false, reoo_vals[4][2]), r: 12, class: "reoo_circles", yr: 24, fill: "#e0e0e0", stroke: c_24, sw: "3px", imageSrc: reoo_img}
    ]
];

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

        let circ = createCirc(circle.cx, circle.cy, circle.r, circle.fill, circle.stroke, circle.sw, circle.class, circle.yr);
        group.appendChild(circ);

        let img_eel = createImg(circle.cx, circle.cy, circle.r, circle.imageSrc, circle.class, circle.yr);
        group.appendChild(img_eel);

        svgContainer.append(group);
    });
}

circleData.forEach(function (groupData) {
    loopCreate(groupData);
});



// CREATE AVERAGE -------------------------------------
let avg_li = [
    ["s123",realVal(true, s123_x),realVal(false, s123_y), "c_avg", "hidden_def", s123_img]
    ,["laya",realVal(true, laya_x),realVal(false, laya_y), "c_avg", "hidden_def", laya_img]
    ,["asap",realVal(true, asap_x),realVal(false, asap_y), "c_avg", "hidden_def", asap_img]
    ,["deep",realVal(true, deep_x),realVal(false, deep_y), "c_avg", "hidden_def", deep_img]
    ,["kumo",realVal(true, kumo_x),realVal(false, kumo_y), "c_avg", "hidden_def", kumo_img]
    ,["simp",realVal(true, simp_x),realVal(false, simp_y), "c_avg", "hidden_def", simp_img]
    ,["qiii",realVal(true, qiii_x),realVal(false, qiii_y), "c_avg", "hidden_def", qiii_img]
    ,["reoo",realVal(true, reoo_x),realVal(false, reoo_y), "c_avg", "hidden_def", reoo_img]
    ,["alll",realVal(true, over_x),realVal(false, over_y), "c_avg", "hidden_def", "https://files.catbox.moe/5b7es1.png"]
];

avg_li.forEach(function(person) {
    let group = document.createElementNS("http://www.w3.org/2000/svg", "g");

    let circ = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    circ.setAttribute("cx", person[1]);
    circ.setAttribute("cy", person[2]);
    circ.setAttribute("r", 12);
    circ.setAttribute("fill", "#ff0000");
    circ.setAttribute("stroke", "#000");
    circ.setAttribute("stroke-width", "3px");
    circ.classList.add(person[3]);
    circ.classList.add(person[4]);

    let clippath = document.createElementNS("http://www.w3.org/2000/svg", "clipPath");
    clippath.setAttribute("id", "clipCircle" + person[1] + "_" + person[2]);

    let clipCirc = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    clipCirc.setAttribute("cx", person[1]);
    clipCirc.setAttribute("cy", person[2]);
    clipCirc.setAttribute("r", 12);

    clippath.appendChild(clipCirc);

    let img_eel = document.createElementNS("http://www.w3.org/2000/svg", "image");
    img_eel.setAttribute("x", person[1] - 12);
    img_eel.setAttribute("y", person[2] - 12);
    img_eel.setAttribute("width", 12 * 2);
    img_eel.setAttribute("height", 12 * 2);
    img_eel.setAttribute("clip-path", "url(#clipCircle" + person[1] + "_" + person[2] + ")");
    img_eel.setAttributeNS("http://www.w3.org/1999/xlink", "href", person[5]);
    img_eel.classList.add(person[3]);
    img_eel.classList.add(person[4]);

    group.append(circ);
    group.appendChild(clippath);
    group.appendChild(img_eel);

    svgContainer.append(group);
});



// CREATE ANIMATION -------------------------------------
function animateCirc(circleData) {
    // IF global is active - give alert
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
        // circ.style.zIndex = "-1";
        svgContainer.append(circ);

        $(circ).animate({
            cx: trgtPos.cx,
            cy: trgtPos.cy
        }, {
            duration: 900,
            step: function(now, fx) {
                // update circle's position as it moves through path
                if (fx.prop === "cx") {
                    circ.setAttribute("cx", now);
                } else if (fx.prop === "cy") {
                    circ.setAttribute("cy", now);
                }
            },
            complete: function() {
                // remove circle when animation is complete
                $(this).remove();

                // Update current position index
                currIndx++;
                if (currIndx < circleData.length - 1) {
                    animateStep();
                }
            }
        });
    }
    animateStep();
}
function getPplIdx() {
    let giveBack = -1;
    if (data_clicks == "s123") {
        giveBack = 0;
    } else if (data_clicks == "laya") {
        giveBack = 1;
    } else if (data_clicks == "asap") {
        giveBack = 2;
    } else if (data_clicks == "deep") {
        giveBack = 3;
    } else if (data_clicks == "kumo") {
        giveBack = 4;
    } else if (data_clicks == "simp") {
        giveBack = 5;
    } else if (data_clicks == "qiii") {
        giveBack = 6;
    } else if (data_clicks == "reoo") {
        giveBack = 7;
    }

    console.log(data_clicks, "turning into", giveBack)
    return giveBack
}

function clampReveal() {
    clamp.css("bottom", "0");
    setTimeout(function() {
        clamp.css("bottom", "-11%");
    }, 2000);
}



// animation trigger
$(".pog_btn").click(function() {
    animateCirc(circleData[getPplIdx()]);
});


// set def
prctgStat(true, realVal(true, over_x))
prctgStat(false, realVal(false, over_y))