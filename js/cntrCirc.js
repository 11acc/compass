
let t_al_c = $(".compass circle");
let t_al_i = $(".compass image");
let t_18 = $(".t_18");
let t_20 = $(".t_20");
let t_21 = $(".t_21");
let t_22 = $(".t_22");
let t_23 = $(".t_23");
let t_24 = $(".t_24");
let tbtn_18 = $(".tbtn_18");
let tbtn_20 = $(".tbtn_20");
let tbtn_21 = $(".tbtn_21");
let tbtn_22 = $(".tbtn_22");
let tbtn_23 = $(".tbtn_23");
let tbtn_24 = $(".tbtn_24");
let tbtn_al = $(".tbtn_al");

let s123_btn = $('.s123_btn');
let laya_btn = $('.laya_btn');
let asap_btn = $('.asap_btn');
let deep_btn = $('.deep_btn');
let kumo_btn = $('.kumo_btn');
let simp_btn = $('.simp_btn');
let qiii_btn = $('.qiii_btn');
let reoo_btn = $('.reoo_btn');
let s123_circles = $(".s123_circles");
let laya_circles = $(".laya_circles");
let asap_circles = $(".asap_circles");
let deep_circles = $(".deep_circles");
let kumo_circles = $(".kumo_circles");
let simp_circles = $(".simp_circles");
let qiii_circles = $(".qiii_circles");
let reoo_circles = $(".reoo_circles");

let avg_btn = $(".avg_btn");
let c_avg = $(".c_avg");
let code_ctime = "0";
let comp_state = $("#comp_state");

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

// CHANGE PERSON ----------------
s123_btn.click(function() {
    basicClick("s123");
    putActive("basic", "s123", $(this));
});
laya_btn.click(function() {
    basicClick("laya");
    putActive("basic", "laya", $(this));
});
asap_btn.click(function() {
    basicClick("asap");
    putActive("basic", "asap", $(this));
});
deep_btn.click(function() {
    basicClick("deep");
    putActive("basic", "deep", $(this));
});
kumo_btn.click(function() {
    basicClick("kumo");
    putActive("basic", "kumo", $(this));
});
simp_btn.click(function() {
    basicClick("simp");
    putActive("basic", "simp", $(this));
});
qiii_btn.click(function() {
    basicClick("qiii");
    putActive("basic", "qiii", $(this));
});
reoo_btn.click(function() {
    basicClick("reoo");
    putActive("basic", "reoo", $(this));
});

function basicClick(host) {
    // IF avg is active, deactivate it
    if (avg_active) {
        activateAvg();
    }
    // IF time is active, then only allow the ones present through
    if (time_active) {
        time_active_list = []
        time_active_list = getTimeActive(time_active_list);
        if ($.inArray(host, time_active_list) !== -1) {
            // Exit early
            console.log("exit early,", host, "in time_active_list ", time_active_list)
            return;
        }
    }
    // IF clicked same host we flip all others to "reset"
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
    // IF its the first click
    } else if (data_clicks == "first") {
        flipAll(host);
        changeCompState(host);
        prctgChangePerson(host);
        spec_active = true;
        console.log("spec_active", spec_active, "(first)");
    // IF when spec is active we click on another person
    } else if (data_clicks != host) {
        console.log("clicking on someone else while spec_active", spec_active);
        // IF we clicked someone twice and global is active, act as if its first
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
    // console.log("flipped all, with origin:", origin);
    if (origin != "s123") {
        s123_circles.toggleClass("filter_out");
    }
    if (origin != "laya") {
        laya_circles.toggleClass("filter_out");
    }
    if (origin != "asap") {
        asap_circles.toggleClass("filter_out");
    }
    if (origin != "deep") {
        deep_circles.toggleClass("filter_out");
    }
    if (origin != "kumo") {
        kumo_circles.toggleClass("filter_out");
    }
    if (origin != "simp") {
        simp_circles.toggleClass("filter_out");
    }
    if (origin != "qiii") {
        qiii_circles.toggleClass("filter_out");
    }
    if (origin != "reoo") {
        reoo_circles.toggleClass("filter_out");
    }
}
function flipOrigin(data_clicks) {
    // console.log("flipped origin:", data_clicks);
    if (data_clicks == "s123") {
        s123_circles.toggleClass("filter_out");
    } else if (data_clicks == "laya") {
        laya_circles.toggleClass("filter_out");
    } else if (data_clicks == "asap") {
        asap_circles.toggleClass("filter_out");
    } else if (data_clicks == "deep") {
        deep_circles.toggleClass("filter_out");
    } else if (data_clicks == "kumo") {
        kumo_circles.toggleClass("filter_out");
    } else if (data_clicks == "simp") {
        simp_circles.toggleClass("filter_out");
    } else if (data_clicks == "qiii") {
        qiii_circles.toggleClass("filter_out");
    } else if (data_clicks == "reoo") {
        reoo_circles.toggleClass("filter_out");
    }
}
function changeCompState(host) {
    // console.log("changing comp_state to", host);
    if (host == "all") {
        comp_state.html("Global");
        comp_state.css("text-decoration", "underline 2px solid var(--t_color)")
    } else {
        if (host == "s123") {
            comp_state.html("S123");
            comp_state.css("text-decoration", "underline 2px solid var(--s123_cls)");
        } else if (host == "laya") {
            comp_state.html("Layam");
            comp_state.css("text-decoration", "underline 2px solid var(--laya_cls)");
        } else if (host == "asap") {
            comp_state.html("A$AP");
            comp_state.css("text-decoration", "underline 2px solid var(--asap_cls)");
        } else if (host == "deep") {
            comp_state.html("Deep");
            comp_state.css("text-decoration", "underline 2px solid var(--deep_cls)");
        } else if (host == "kumo") {
            comp_state.html("Kumori");
            comp_state.css("text-decoration", "underline 2px solid var(--kumo_cls)");
        } else if (host == "simp") {
            comp_state.html("Simple");
            comp_state.css("text-decoration", "underline 2px solid var(--simp_cls)");
        } else if (host == "qiii") {
            comp_state.html("Aniqi");
            comp_state.css("text-decoration", "underline 2px solid var(--qiii_cls)");
        } else if (host == "reoo") {
            comp_state.html("Reoken");
            comp_state.css("text-decoration", "underline 2px solid var(--reoo_cls)");
        }
    }
}
function putActive(type, host, tthis) { // why the fuck did i name it 'tthis'
    if (type == "time") {
        // IF default
        if (active_clicks == "first") {
            tthis.addClass("user_btn_active");
            active_clicks = host;
        // IF click on other
        } else if (active_clicks != host) {
            tthis.addClass("user_btn_active");
            if (active_clicks == "18") {
                tbtn_18.removeClass("user_btn_active");
            } else if (active_clicks == "20") {
                tbtn_20.removeClass("user_btn_active");
            } else if (active_clicks == "21") {
                tbtn_21.removeClass("user_btn_active");
            } else if (active_clicks == "22") {
                tbtn_22.removeClass("user_btn_active");
            } else if (active_clicks == "23") {
                tbtn_23.removeClass("user_btn_active");
            } else if (active_clicks == "24") {
                tbtn_24.removeClass("user_btn_active");
            } else if (active_clicks == "all") {
                tbtn_al.removeClass("user_btn_active");
            }
            active_clicks = host;
        }
    } else if (type == "basic") {
        // IF default
        if (active_clicks_2 == "first") {
            tthis.toggleClass("user_btn_active");
            active_clicks_2 = host;
        // IF click again on the same
        } else if (active_clicks_2 == host) {
            tthis.toggleClass("user_btn_active");
        // IF click on other
        } else if (active_clicks_2 != host) {
            tthis.addClass("user_btn_active");
            if (active_clicks_2 == "s123") {
                s123_btn.removeClass("user_btn_active");
            } else if (active_clicks_2 == "laya") {
                laya_btn.removeClass("user_btn_active");
            } else if (active_clicks_2 == "asap") {
                asap_btn.removeClass("user_btn_active");
            } else if (active_clicks_2 == "deep") {
                deep_btn.removeClass("user_btn_active");
            } else if (active_clicks_2 == "kumo") {
                kumo_btn.removeClass("user_btn_active");
            } else if (active_clicks_2 == "simp") {
                simp_btn.removeClass("user_btn_active");
            } else if (active_clicks_2 == "qiii") {
                qiii_btn.removeClass("user_btn_active");
            } else if (active_clicks_2 == "reoo") {
                reoo_btn.removeClass("user_btn_active");
            }
            active_clicks_2 = host;
        }
    } else if (type == "avg") {
        tthis.toggleClass("user_btn_active");
    } else if (type == "reset_p") {
        s123_btn.removeClass("user_btn_active");
        laya_btn.removeClass("user_btn_active");
        asap_btn.removeClass("user_btn_active");
        deep_btn.removeClass("user_btn_active");
        kumo_btn.removeClass("user_btn_active");
        simp_btn.removeClass("user_btn_active");
        qiii_btn.removeClass("user_btn_active");
        reoo_btn.removeClass("user_btn_active");
    } else if (type == "reset_t") {
        tbtn_18.removeClass("user_btn_active");
        tbtn_20.removeClass("user_btn_active");
        tbtn_21.removeClass("user_btn_active");
        tbtn_22.removeClass("user_btn_active");
        tbtn_23.removeClass("user_btn_active");
        tbtn_24.removeClass("user_btn_active");
        tbtn_al.removeClass("user_btn_active");
    }
}



// CHANGE TIME ----------------
tbtn_18.click(function() {
    timeClick(18);
    putActive("time", "18", $(this));
    changeBB("2018");
    time_time = "18";
});
tbtn_20.click(function() {
    timeClick(20);
    putActive("time", "20", $(this));
    changeBB("2020");
    time_time = "20";
});
tbtn_21.click(function() {
    timeClick(21);
    putActive("time", "21", $(this));
    changeBB("2021");
    time_time = "21";
});
tbtn_22.click(function() {
    timeClick(22);
    putActive("time", "22", $(this));
    changeBB("2022");
    time_time = "22";
});
tbtn_23.click(function() {
    timeClick(23);
    putActive("time", "23", $(this));
    changeBB("2023");
    time_time = "23";
});
tbtn_24.click(function() {
    timeClick(24);
    putActive("time", "24", $(this));
    changeBB("2024");
    time_time = "24";
});
tbtn_al.click(function() {
    timeClick("all");
    putActive("time", "all", $(this));
    changeBB("/all");
    time_time = "0";
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
    // IF basically reseting time
    } else {
        changeTime("all");
        time_active = false;
        console.log("time_active", time_active, "(time all)");
    }
}
function removeFilterAll() {
    // console.log("removed filter from all");
    s123_circles.removeClass("filter_out");
    laya_circles.removeClass("filter_out");
    asap_circles.removeClass("filter_out");
    deep_circles.removeClass("filter_out");
    kumo_circles.removeClass("filter_out");
    simp_circles.removeClass("filter_out");
    qiii_circles.removeClass("filter_out");
    reoo_circles.removeClass("filter_out");
}
function changeTime(time) {
    console.log("changing time to", time);
    // IF all then reset time and get default state
    if (time == "all") {
        console.log("removed all hide_them classes");
        t_al_c.removeClass("hide_them");
        t_al_i.removeClass("hide_them");
    } else {
        // IF its not a given time, hide it
        if (time != 18) {
            t_18.addClass("hide_them");
        } else if (time == 18) {
            t_18.removeClass("hide_them");
        }
        if (time != 20) {
            t_20.addClass("hide_them");
        } else if (time == 20) {
            t_20.removeClass("hide_them");
        }
        if (time != 21) {
            t_21.addClass("hide_them");
        } else if (time == 21) {
            t_21.removeClass("hide_them");
        }
        if (time != 22) {
            t_22.addClass("hide_them");
        } else if (time == 22) {
            t_22.removeClass("hide_them");
        }
        if (time != 23) {
            t_23.addClass("hide_them");
        } else if (time == 23) {
            t_23.removeClass("hide_them");
        }
        if (time != 24) {
            t_24.addClass("hide_them");
        } else if (time == 24) {
            t_24.removeClass("hide_them");
        }
    }
}
function getTimeActive(time_active_list) {
    console.log("getting time active...")

    let temp_t = "t_"
    temp_t += time_time;

    //s123
    test_class = compoundCauseImLazy("s123_circles", temp_t)
    if (!(test_class.length > 0)) {
        // console.log("dear lord please")
        time_active_list.push("s123");
    }
    // laya
    test_class = compoundCauseImLazy("laya_circles", temp_t)
    if (!(test_class.length > 0)) {
        time_active_list.push("laya");
    }
    // asap
    test_class = compoundCauseImLazy("asap_circles", temp_t)
    if (!(test_class.length > 0)) {
        time_active_list.push("asap");
    }
    // deep
    test_class = compoundCauseImLazy("deep_circles", temp_t)
    if (!(test_class.length > 0)) {
        time_active_list.push("deep");
    }
    // kumo
    test_class = compoundCauseImLazy("kumo_circles", temp_t)
    if (!(test_class.length > 0)) {
        time_active_list.push("kumo");
    }
    // simp
    test_class = compoundCauseImLazy("simp_circles", temp_t)
    if (!(test_class.length > 0)) {
        time_active_list.push("simp");
    }
    // qiii
    test_class = compoundCauseImLazy("qiii_circles", temp_t)
    if (!(test_class.length > 0)) {
        time_active_list.push("qiii");
    }
    // reoo
    test_class = compoundCauseImLazy("reoo_circles", temp_t)
    if (!(test_class.length > 0)) {
        time_active_list.push("reoo");
    }

    return time_active_list;
}
function compoundCauseImLazy(host_time, temp_t) {
    let t_comp = "." + host_time + "." + temp_t;
    //test_class = $(".s123_circles.t_xx")
    test_class = $(t_comp)
    return test_class
}
function changeBB(eel) { // not optimising any of this really made me come up with stupid shit huh
    callScrambleGlitch(eel);
}

// Function to handle the click on #big_num
function handleClickOnBigNum(event) {
    const valueX = event.target.dataset.value;
    scrambleGlitch(event, valueX);
}

// Attach the click event listener to #big_num
document.querySelector("#big_num").onclick = handleClickOnBigNum;

// Function to be called when you want to trigger the #big_num click event
function callScrambleGlitch(valueX) {
    // Get the #big_num element
    const bigNumElement = document.querySelector("#big_num");

    // Create a new click event
    const clickEvent = new MouseEvent('click', {
        view: window,
        bubbles: true,
        cancelable: true
    });

    // Set the custom attribute "data-value" on #big_num element
    bigNumElement.dataset.value = valueX;

    // Dispatch the click event on #big_num element
    bigNumElement.dispatchEvent(clickEvent);
}

const letters = "!#$%&()*+-./0123456789:;<>?@[]\_~{}¿?¡ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
let interval = null;

function scrambleGlitch(event) {
    let iteration = 0;
    let loop = 0;
    let loop2 = 0;
    let got = [];
    
    clearInterval(interval);
    
    interval = setInterval(() => {
        event.target.innerText = event.target.innerText
        .split("")
        .map((letter, index) => {
          if (loop == 11) {
            if (got.includes(event.target.dataset.value[index])) {
              return event.target.dataset.value[index];
            }
            if (loop2 == 3) {
              got.push(event.target.dataset.value[index]);
              loop2 = 0;
            }
            loop2 += 1;
            return letters[Math.floor(Math.random() * 26)]
          }
          loop += 1;
          return letters[Math.floor(Math.random() * 26)]
        })
        .join("");
      
      if (iteration >= event.target.dataset.value.length){ 
        clearInterval(interval);
      }
      
      iteration += 1 / 3;
    }, 110);
}



// AVERAGE SHIT ----------------
avg_btn.click(function() {
    activateAvg();
});

function activateAvg() {
    // activating css    
    putActive("avg", 0, avg_btn);
    prctgChangePerson("all")
    
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
    // console.log("toggle hid all");
    s123_circles.toggleClass("hide_them");
    laya_circles.toggleClass("hide_them");
    asap_circles.toggleClass("hide_them");
    deep_circles.toggleClass("hide_them");
    kumo_circles.toggleClass("hide_them");
    simp_circles.toggleClass("hide_them");
    qiii_circles.toggleClass("hide_them");
    reoo_circles.toggleClass("hide_them");
}