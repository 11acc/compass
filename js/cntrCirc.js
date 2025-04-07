'use strict';

// Import our data and utilities
const { circleData, circleUtils } = window;

// DOM Elements
const t_al_c = $(".compass circle");
const t_al_i = $(".compass image");
const t_18 = $(".t_18");
const t_20 = $(".t_20");
const t_21 = $(".t_21");
const t_22 = $(".t_22");
const t_23 = $(".t_23");
const t_24 = $(".t_24");
const t_25 = $(".t_25");
const tbtn_18 = $(".tbtn_18");
const tbtn_20 = $(".tbtn_20");
const tbtn_21 = $(".tbtn_21");
const tbtn_22 = $(".tbtn_22");
const tbtn_23 = $(".tbtn_23");
const tbtn_24 = $(".tbtn_24");
const tbtn_25 = $(".tbtn_25");
const tbtn_al = $(".tbtn_al");

// Person buttons and circles
const personElements = {};
Object.keys(circleData.people).forEach(id => {
    personElements[id] = {
        btn: $(`.${id}_btn`),
        circles: $(`.${id}_circles`)
    };
});

// Other elements
const avg_btn = $(".avg_btn");
const c_avg = $(".c_avg");
const code_ctime = "0";
const comp_state = $("#comp_state");

// State variables
let time_active_list = [];
let time_time = 0;
let data_clicks = "first";
let active_clicks = "first";
let active_clicks_2 = "first";
let spec_active = false;
let time_active = false;
let avg_active = false;
let time_fuck = false;
let progress_active = false;

// Person click handlers
Object.entries(personElements).forEach(([id, elements]) => {
    elements.btn.click(function() {
        basicClick(id);
        putActive("basic", id, $(this));
    });
});

function basicClick(host) {
    if (avg_active) {
        activateAvg();
    }
    
    if (time_active) {
        time_active_list = getTimeActive(time_active_list);
        if (!time_active_list.includes(host)) {
            console.log("exit early,", host, "not in time_active_list ", time_active_list);
            return;
        }
    }

    if (data_clicks == host) {
        flipAll(host);
        if (!spec_active) {
            changeCompState(host);
            prctgChangePerson(host);
            spec_active = true;
            console.log("spec_active", spec_active, "(clicked same)");
        } else {
            changeCompState("all");
            prctgChangePerson("all");
            spec_active = false;
            console.log("spec_active", spec_active, "(clicked same)");
        }
    } else if (data_clicks == "first") {
        flipAll(host);
        changeCompState(host);
        prctgChangePerson(host);
        spec_active = true;
        console.log("spec_active", spec_active, "(first)");
    } else if (data_clicks != host) {
        console.log("clicking on someone else while spec_active", spec_active);
        changeCompState(host);
        prctgChangePerson(host);
        if (!spec_active) {
            flipAll(host);
            spec_active = true;
            console.log("spec_active", spec_active, "(first)");
        } else {
            flipOrigin(host);
            flipOrigin(data_clicks);
            spec_active = true;
        }
    }
    data_clicks = host;
}

function flipAll(origin) {
    Object.entries(personElements).forEach(([id, elements]) => {
        if (id !== origin) {
            elements.circles.toggleClass("filter_out");
        }
    });
}

function flipOrigin(id) {
    personElements[id].circles.toggleClass("filter_out");
}

function changeCompState(host) {
    if (host == "all") {
        comp_state.html("Global");
        comp_state.css("text-decoration", "underline 2px solid var(--t_color)");
    } else {
        const person = circleData.people[host];
        comp_state.html(person.name);
        comp_state.css("text-decoration", `underline 2px solid var(--${host}_cls)`);
    }
}

function putActive(type, host, tthis) {
    if (type == "time") {
        if (active_clicks == "first") {
            tthis.addClass("user_btn_active");
            active_clicks = host;
        } else if (active_clicks != host) {
            tthis.addClass("user_btn_active");
            $(`.tbtn_${active_clicks}`).removeClass("user_btn_active");
            active_clicks = host;
        }
    } else if (type == "basic") {
        if (active_clicks_2 == "first") {
            tthis.toggleClass("user_btn_active");
            active_clicks_2 = host;
        } else if (active_clicks_2 == host) {
            tthis.toggleClass("user_btn_active");
        } else if (active_clicks_2 != host) {
            tthis.addClass("user_btn_active");
            personElements[active_clicks_2].btn.removeClass("user_btn_active");
            active_clicks_2 = host;
        }
    } else if (type == "avg") {
        tthis.toggleClass("user_btn_active");
    } else if (type == "reset_p") {
        Object.values(personElements).forEach(elements => {
            elements.btn.removeClass("user_btn_active");
        });
    } else if (type == "reset_t") {
        $(".tbtn_18, .tbtn_20, .tbtn_21, .tbtn_22, .tbtn_23, .tbtn_24, .tbtn_al")
            .removeClass("user_btn_active");
    }
}

// Time click handlers
const timeElements = {
    18: { btn: tbtn_18, elements: t_18 },
    20: { btn: tbtn_20, elements: t_20 },
    21: { btn: tbtn_21, elements: t_21 },
    22: { btn: tbtn_22, elements: t_22 },
    23: { btn: tbtn_23, elements: t_23 },
    24: { btn: tbtn_24, elements: t_24 },
    25: { btn: tbtn_25, elements: t_25 }
};

Object.entries(timeElements).forEach(([year, elements]) => {
    elements.btn.click(function() {
        time_time = year;
        timeClick(parseInt(year));
        putActive("time", year, $(this));
        changeBB(`20${year}`);
    });
});

tbtn_al.click(function() {
    time_time = "0";
    timeClick("all");
    putActive("time", "all", $(this));
    changeBB("/all");
});

function timeClick(yr) {
    spec_active = false;
    console.log("spec_active", spec_active, "(time clicked)");

    if (avg_active) {
        activateAvg();
    }

    prctgChangeTime(yr);
    changeCompState("all");
    removeFilterAll();
    putActive("reset_p");

    if (yr != "all") {
        changeTime(yr);
        time_active = true;
        console.log("time_active", time_active, "(reg time)");
    } else {
        changeTime("all");
        time_active = false;
        console.log("time_active", time_active, "(time all)");
    }
}

function removeFilterAll() {
    Object.values(personElements).forEach(elements => {
        elements.circles.removeClass("filter_out");
    });
}

function changeTime(time) {
    console.log("changing time to", time);
    if (time == "all") {
        console.log("removed all hide_them classes");
        t_al_c.removeClass("hide_them");
        t_al_i.removeClass("hide_them");
    } else {
        Object.entries(timeElements).forEach(([year, elements]) => {
            if (parseInt(year) != time) {
                elements.elements.addClass("hide_them");
            } else {
                elements.elements.removeClass("hide_them");
            }
        });
    }
}

function getTimeActive(time_active_list) {
    console.log("getting time active...");
    const temp_t = `t_${time_time}`;

    Object.keys(circleData.people).forEach(id => {
        const test_class = compoundCauseImLazy(`${id}_circles`, temp_t);
        if (test_class.length > 0) {
            time_active_list.push(id);
        }
    });

    return time_active_list;
}

function compoundCauseImLazy(host_time, temp_t) {
    const t_comp = `.${host_time}.${temp_t}`;
    return $(t_comp);
}

function changeBB(eel) {
    callScrambleGlitch(eel);
}

// Average button handler
avg_btn.click(function() {
    activateAvg();
});

function activateAvg() {
    putActive("avg", 0, avg_btn);
    prctgChangePerson("all");
    
    if (time_active) {
        putActive("reset_t");
        changeTime("all");
    }
    if (spec_active) {
        removeFilterAll();
        putActive("reset_p");
    }
    spec_active = false;
    time_active = false;
    
    if (avg_active) {
        avg_active = false;
        console.log("avg_active", avg_active, "(avg again)");
        changeBB("/all");
        hideAll();
        c_avg.addClass("hidden_def");
    } else {
        avg_active = true;
        console.log("avg_active", avg_active, "(def)");
        changeBB("avrg");
        hideAll();
        c_avg.removeClass("hidden_def");
    }
}

function hideAll() {
    Object.values(personElements).forEach(elements => {
        elements.circles.toggleClass("hide_them");
    });
}

// Animation functions
function clampReveal() {
    clamp.css("bottom", "0");
    setTimeout(function() {
        clamp.css("bottom", "-11%");
    }, 2000);
}

function clampRevealTheSecondComing() {
    sponge.css("bottom", "0");
    setTimeout(function() {
        sponge.css("bottom", "-11%");
    }, 2000);
}