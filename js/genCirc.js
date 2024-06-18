'use strict';

let s123_x, s123_y,
    laya_x, laya_y,
    asap_x, asap_y,
    deep_x, deep_y,
    kumo_x, kumo_y,
    simp_x, simp_y,
    qiii_x, qiii_y,
    reoo_x, reoo_y,
    over_x, over_y;
s123_x = s123_y = laya_x = laya_y = asap_x = asap_y = deep_x = deep_y = kumo_x = kumo_y = simp_x = simp_y = qiii_x = qiii_y = reoo_x = reoo_y = over_x = over_y = 0;

let x_long = 430/2;
let y_long = 475/2;

let comp_keyword_x = $("#comp_keyword_x");
let comp_keyword_y = $("#comp_keyword_y");

let svgContainer = $("#SvgjsSvg1001");
let clamp = $(".clamp.bot1");
let sponge = $(".clamp.bot2");

let c_18 = getComputedStyle(document.documentElement).getPropertyValue('--c_18');
let c_20 = getComputedStyle(document.documentElement).getPropertyValue('--c_20');
let c_21 = getComputedStyle(document.documentElement).getPropertyValue('--c_21');
let c_22 = getComputedStyle(document.documentElement).getPropertyValue('--c_22');
let c_23 = getComputedStyle(document.documentElement).getPropertyValue('--c_23');
let c_24 = getComputedStyle(document.documentElement).getPropertyValue('--c_24');

let s123_img = "https://files.catbox.moe/6wex5e.png";
let laya_img = "https://files.catbox.moe/p1x3bk.png";
// let asap_img = "https://files.catbox.moe/uj0hv4.png";
let asap_img = "https://files.catbox.moe/j1zhaq.png";
// let deep_img = "https://files.catbox.moe/kkeszb.png";
let deep_img = "https://files.catbox.moe/m8hxc6.png";
let kumo_img = "https://files.catbox.moe/b8a8dz.png";
let simp_img = "https://files.catbox.moe/2gud1u.png";
let qiii_img = "https://files.catbox.moe/lwm5dj.png";
// let reoo_img = "https://files.catbox.moe/l7ce91.png";
let reoo_img = "https://files.catbox.moe/ur22dg.jpg";
let alll_img = "https://files.catbox.moe/5b7es1.png";

let s123_cls = getComputedStyle(document.documentElement).getPropertyValue('--s123_cls');
let laya_cls = getComputedStyle(document.documentElement).getPropertyValue('--laya_cls');
let asap_cls = getComputedStyle(document.documentElement).getPropertyValue('--asap_cls');
let deep_cls = getComputedStyle(document.documentElement).getPropertyValue('--deep_cls');
let kumo_cls = getComputedStyle(document.documentElement).getPropertyValue('--kumo_cls');
let simp_cls = getComputedStyle(document.documentElement).getPropertyValue('--simp_cls');
let qiii_cls = getComputedStyle(document.documentElement).getPropertyValue('--qiii_cls');
let reoo_cls = getComputedStyle(document.documentElement).getPropertyValue('--reoo_cls');

let s123_vals = {
    18: [-3.83, -2.21]
    , 20: [-2.71, -3.69]
    , 22: [-3.85, -5.11]
    , 23: [0.55, -3.35]
    , 24: [-2.5, -1.28]
};
let laya_vals = {
    20: [-2.08, -2.81]
    , 23: [-4.63, -3.18]
};
let asap_vals = {
    20: [-3.21, 1.03]
    , 23: [1.73, -0.67]
};
let deep_vals = {
    20: [-1.66, -1.16]
    , 23: [-2.38, 0.56]
    , 24: [-2.00, 0.62]
};
let kumo_vals = {
    20: [2.22, 3.65]
};
let simp_vals = {
    20: [4.12, 4.76]
};
let qiii_vals = {
    20: [-1.68, -3.03]
};
let reoo_vals = {
    20: [-0.91, -4.21]
    , 21: [-0.71, -1.52]
    , 22: [-0.08, -6.11]
    , 23: [-1.52, -5.55]
    , 24: [-1.13, -5.49]
};

let s123_nr = Object.keys(s123_vals).length;
let laya_nr = Object.keys(laya_vals).length;
let asap_nr = Object.keys(asap_vals).length;
let deep_nr = Object.keys(deep_vals).length;
let kumo_nr = Object.keys(kumo_vals).length;
let simp_nr = Object.keys(simp_vals).length;
let qiii_nr = Object.keys(qiii_vals).length;
let reoo_nr = Object.keys(reoo_vals).length;

for (const [_, val] of Object.entries(s123_vals)) {
    s123_x += val[0];
    s123_y += val[1];
}
s123_x /= s123_nr;
s123_y /= s123_nr;

for (const [_, val] of Object.entries(laya_vals)) {
    laya_x += val[0];
    laya_y += val[1];
}
laya_x /= laya_nr;
laya_y /= laya_nr;

for (const [_, val] of Object.entries(asap_vals)) {
    asap_x += val[0];
    asap_y += val[1];
}
asap_x /= asap_nr;
asap_y /= asap_nr;

for (const [_, val] of Object.entries(deep_vals)) {
    deep_x += val[0];
    deep_y += val[1];
}
deep_x /= deep_nr;
deep_y /= deep_nr;

for (const [_, val] of Object.entries(kumo_vals)) {
    kumo_x += val[0];
    kumo_y += val[1];
}
kumo_x /= kumo_nr;
kumo_y /= kumo_nr;

for (const [_, val] of Object.entries(simp_vals)) {
    simp_x += val[0];
    simp_y += val[1];
}
simp_x /= simp_nr;
simp_y /= simp_nr;

for (const [_, val] of Object.entries(qiii_vals)) {
    qiii_x += val[0];
    qiii_y += val[1];
}
qiii_x /= qiii_nr;
qiii_y /= qiii_nr;

for (const [_, val] of Object.entries(reoo_vals)) {
    reoo_x += val[0];
    reoo_y += val[1];
}
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
        console.log("sqr: ", sqr)
        console.log("val: ", (-1*sqr)*23+236)
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
        prctgStat(true, realVal(true, over_x));
        prctgStat(false, realVal(false, over_y));
    } else if (host == "s123") {
        prctgStat(true, realVal(true, s123_x));
        prctgStat(false, realVal(false, s123_y));
    } else if (host == "laya") {
        prctgStat(true, realVal(true, laya_x));
        prctgStat(false, realVal(false, laya_y));
    } else if (host == "asap") {
        prctgStat(true, realVal(true, asap_x));
        prctgStat(false, realVal(false, asap_y));
    } else if (host == "deep") {
        prctgStat(true, realVal(true, deep_x));
        prctgStat(false, realVal(false, deep_y));
    } else if (host == "kumo") {
        prctgStat(true, realVal(true, kumo_x));
        prctgStat(false, realVal(false, kumo_y));
    } else if (host == "simp") {
        prctgStat(true, realVal(true, simp_x));
        prctgStat(false, realVal(false, simp_y));
    } else if (host == "qiii") {
        prctgStat(true, realVal(true, qiii_x));
        prctgStat(false, realVal(false, qiii_y));
    } else if (host == "reoo") {
        prctgStat(true, realVal(true, reoo_x));
        prctgStat(false, realVal(false, reoo_y));
    }
}
function getActualTComp(t_comp) {
    if (t_comp == "s123_vals") {
        return s123_vals;
    } else if (t_comp == "laya_vals") {
        return laya_vals;
    } else if (t_comp == "asap_vals") {
        return asap_vals;
    } else if (t_comp == "deep_vals") {
        return deep_vals;
    } else if (t_comp == "kumo_vals") {
        return kumo_vals;
    } else if (t_comp == "simp_vals") {
        return simp_vals;
    } else if (t_comp == "qiii_vals") {
        return qiii_vals;
    } else if (t_comp == "reoo_vals") {
        return reoo_vals;
    }
}
function prctgChangeTime(yr) {
    let time_x, time_y, host, host_vals, t_comp;
    let time_active_list = [];
    time_x = time_y = 0;
    host_vals = {};

    if (yr == "all") {
        prctgStat(true, realVal(true, over_x));
        prctgStat(false, realVal(false, over_y));
    } else {
        time_active_list = getTimeActive(time_active_list);

        for (let i = 0; i < time_active_list.length; i++) {
            host = time_active_list[i];
            t_comp = host + "_vals";
            console.log("t_comp: ", t_comp);
            host_vals = getActualTComp(t_comp);
            time_x += host_vals[yr][0];
            time_y += host_vals[yr][1];
            console.log("time vals: ", time_x, time_y);
        }
        time_x /= time_active_list.length;
        time_y /= time_active_list.length;
        prctgStat(true, realVal(true, time_x));
        prctgStat(false, realVal(false, time_y));
    }
}



// CREATE CIRCLES -------------------------------------
let circleData = [
    [//S123
        { cx: realVal(true, s123_vals[18][0]), cy: realVal(false, s123_vals[18][1]), r: 12, class: "s123_circles", yr: 18, fill: s123_cls, stroke: c_18, sw: "3px", imageSrc: s123_img}
        ,{ cx: realVal(true, s123_vals[20][0]), cy: realVal(false, s123_vals[20][1]), r: 12, class: "s123_circles", yr: 20, fill: s123_cls, stroke: c_20, sw: "3px", imageSrc: s123_img}
        ,{ cx: realVal(true, s123_vals[22][0]), cy: realVal(false, s123_vals[22][1]), r: 12, class: "s123_circles", yr: 22, fill: s123_cls, stroke: c_22, sw: "3px", imageSrc: s123_img}
        ,{ cx: realVal(true, s123_vals[23][0]), cy: realVal(false, s123_vals[23][1]), r: 12, class: "s123_circles", yr: 23, fill: s123_cls, stroke: c_23, sw: "3px", imageSrc: s123_img}
        ,{ cx: realVal(true, s123_vals[24][0]), cy: realVal(false, s123_vals[24][1]), r: 12, class: "s123_circles", yr: 24, fill: s123_cls, stroke: c_23, sw: "3px", imageSrc: s123_img}
    ]
    ,[//LAYA
        { cx: realVal(true, laya_vals[20][0]), cy: realVal(false, laya_vals[20][1]), r: 12, class: "laya_circles", yr: 20, fill: laya_cls, stroke: c_20, sw: "3px", imageSrc: laya_img}
        ,{ cx: realVal(true, laya_vals[23][0]), cy: realVal(false, laya_vals[23][1]), r: 12, class: "laya_circles", yr: 23, fill: laya_cls, stroke: c_23, sw: "3px", imageSrc: laya_img}
    ]
    ,[//ASAP
        { cx: realVal(true, asap_vals[20][0]), cy: realVal(false, asap_vals[20][1]), r: 12, class: "asap_circles", yr: 20, fill: asap_cls, stroke: c_20, sw: "3px", imageSrc: asap_img}
        ,{ cx: realVal(true, asap_vals[23][0]), cy: realVal(false, asap_vals[23][1]), r: 12, class: "asap_circles", yr: 23, fill: asap_cls, stroke: c_23, sw: "3px", imageSrc: asap_img}
    ]
    ,[//DEEP
        { cx: realVal(true, deep_vals[20][0]), cy: realVal(false, deep_vals[20][1]), r: 12, class: "deep_circles", yr: 20, fill: deep_cls, stroke: c_20, sw: "3px", imageSrc: deep_img}
        ,{ cx: realVal(true, deep_vals[23][0]), cy: realVal(false, deep_vals[23][1]), r: 12, class: "deep_circles", yr: 23, fill: deep_cls, stroke: c_23, sw: "3px", imageSrc: deep_img}
        ,{ cx: realVal(true, deep_vals[24][0]), cy: realVal(false, deep_vals[24][1]), r: 12, class: "deep_circles", yr: 24, fill: deep_cls, stroke: c_24, sw: "3px", imageSrc: deep_img}
    ]
    ,[//KUMO
        { cx: realVal(true, kumo_vals[20][0]), cy: realVal(false, kumo_vals[20][1]), r: 12, class: "kumo_circles", yr: 20, fill: kumo_cls, stroke: c_20, sw: "3px", imageSrc: kumo_img}
    ]
    ,[//SIMP
        { cx: realVal(true, simp_vals[20][0]), cy: realVal(false, simp_vals[20][1]), r: 12, class: "simp_circles", yr: 20, fill: simp_cls, stroke: c_20, sw: "3px", imageSrc: simp_img}
    ]
    ,[//QIII
        { cx: realVal(true, qiii_vals[20][0]), cy: realVal(false, qiii_vals[20][1]), r: 12, class: "qiii_circles", yr: 20, fill: qiii_cls, stroke: c_20, sw: "3px", imageSrc: qiii_img}
    ]
    ,[//REOO
        { cx: realVal(true, reoo_vals[20][0]), cy: realVal(false, reoo_vals[20][1]), r: 12, class: "reoo_circles", yr: 20, fill: reoo_cls, stroke: c_20, sw: "3px", imageSrc: reoo_img}
        ,{ cx: realVal(true, reoo_vals[21][0]), cy: realVal(false, reoo_vals[21][1]), r: 12, class: "reoo_circles", yr: 21, fill: reoo_cls, stroke: c_21, sw: "3px", imageSrc: reoo_img}
        ,{ cx: realVal(true, reoo_vals[22][0]), cy: realVal(false, reoo_vals[22][1]), r: 12, class: "reoo_circles", yr: 22, fill: reoo_cls, stroke: c_22, sw: "3px", imageSrc: reoo_img}
        ,{ cx: realVal(true, reoo_vals[23][0]), cy: realVal(false, reoo_vals[23][1]), r: 12, class: "reoo_circles", yr: 23, fill: reoo_cls, stroke: c_23, sw: "3px", imageSrc: reoo_img}
        ,{ cx: realVal(true, reoo_vals[24][0]), cy: realVal(false, reoo_vals[24][1]), r: 12, class: "reoo_circles", yr: 24, fill: reoo_cls, stroke: c_24, sw: "3px", imageSrc: reoo_img}
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
    ,["alll",realVal(true, over_x),realVal(false, over_y), "c_avg", "hidden_def", alll_img]
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
    // IF time active - give alert
    if (time_active) {
        clampRevealTheSecondComing();
        console.log("exit early, anim global is active");
        return;
    }
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

    console.log(data_clicks, "turning into", giveBack);
    return giveBack;
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


// animation trigger
$(".pog_btn").click(function() {
    animateCirc(circleData[getPplIdx()]);
});


// set def
prctgStat(true, realVal(true, over_x));
prctgStat(false, realVal(false, over_y));