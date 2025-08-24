// Centralized data structure for all circle data
const circleData = {
    // Person configurations
    people: {
        s123: {
            name: "S123"
            , color: getComputedStyle(document.documentElement).getPropertyValue('--s123_cls')
            , image: "https://files.catbox.moe/6wex5e.png"
            , values: {
                18: [-3.83, -2.21]
                , 20: [-2.71, -3.69]
                , 22: [-3.85, -5.11]
                , 23: [0.55, -3.35]
                , 24: [-2.5, -1.28]
                , 25: [-1.75,-2.36]
            }
        }
        , laya: {
            name: "Layam"
            , color: getComputedStyle(document.documentElement).getPropertyValue('--laya_cls')
            , image: "https://files.catbox.moe/p1x3bk.png"
            , values: {
                20: [-2.08, -2.81]
                , 23: [-4.63, -3.18]
                , 25: [-5.25, -3.85]
            }
        }
        , asap: {
            name: "A$AP"
            , color: getComputedStyle(document.documentElement).getPropertyValue('--asap_cls')
            , image: "https://files.catbox.moe/j1zhaq.png"
            , values: {
                20: [-3.21, 1.03]
                , 23: [1.73, -0.67]
                , 25: [1.00, -0.05]
            }
        }
        , deep: {
            name: "Deep"
            , color: getComputedStyle(document.documentElement).getPropertyValue('--deep_cls')
            , image: "https://files.catbox.moe/kkeszb.png"
            , values: {
                20: [-1.66, -1.16]
                , 23: [-2.38, 0.56]
                , 24: [-2.00, 0.62]
                , 25: [-1.13, 1.85]
            }
        }
        , kumo: {
            name: "Kumori"
            , color: getComputedStyle(document.documentElement).getPropertyValue('--kumo_cls')
            , image: "https://files.catbox.moe/b8a8dz.png"
            , values: {
                20: [2.22, 3.65]
            }
        }
        , simp: {
            name: "Simple"
            , color: getComputedStyle(document.documentElement).getPropertyValue('--simp_cls')
            , image: "https://files.catbox.moe/2gud1u.png"
            , values: {
                20: [4.12, 4.76]
            }
        }
        , qiii: {
            name: "Aniqi"
            , color: getComputedStyle(document.documentElement).getPropertyValue('--qiii_cls')
            , image: "https://files.catbox.moe/lwm5dj.png"
            , values: {
                20: [-1.68, -3.03]
                , 25: [0.0, -2.51]
            }
        }
        , reoo: {
            name: "Reoken"
            , color: getComputedStyle(document.documentElement).getPropertyValue('--reoo_cls')
            , image: "https://files.catbox.moe/ur22dg.jpg"
            , values: {
                20: [-0.91, -4.21]
                , 21: [-0.71, -1.52]
                , 22: [-0.08, -6.11]
                , 23: [-1.52, -5.55]
                , 24: [-1.13, -5.49]
                , 25: [-2.25, -4.41]
            }
        }
    },

    // Year configurations
    years: [18, 20, 21, 22, 23, 24, 25],

    // Color configurations for years
    yearColors: {
        18: getComputedStyle(document.documentElement).getPropertyValue('--c_18')
        , 20: getComputedStyle(document.documentElement).getPropertyValue('--c_20')
        , 21: getComputedStyle(document.documentElement).getPropertyValue('--c_21')
        , 22: getComputedStyle(document.documentElement).getPropertyValue('--c_22')
        , 23: getComputedStyle(document.documentElement).getPropertyValue('--c_23')
        , 24: getComputedStyle(document.documentElement).getPropertyValue('--c_24')
        , 25: getComputedStyle(document.documentElement).getPropertyValue('--c_25')
    },

    // Circle configuration
    circleConfig: {
        radius: 12
        , strokeWidth: "3px"
    },

    // Coordinate conversion functions
    coordinateConversion: {
        x: (value) => value * 21 + 214
        , y: (value) => (-1 * value) * 23 + 236
    }
};

// Utility functions
const circleUtils = {   
    // Calculate average coordinates for a person
    calculateAverage: (personId) => {
        const person = circleData.people[personId];
        let sumX = 0, sumY = 0;
        const count = Object.keys(person.values).length;
        
        Object.values(person.values).forEach(([x, y]) => {
            sumX += x;
            sumY += y;
        });
        
        return {
            x: sumX / count
            , y: sumY / count
        };
    },

    // Calculate overall average
    calculateOverallAverage: () => {
        let sumX = 0, sumY = 0;
        const people = Object.keys(circleData.people);
        
        people.forEach(personId => {
            const avg = circleUtils.calculateAverage(personId);
            sumX += avg.x;
            sumY += avg.y;
        });
        
        return {
            x: sumX / people.length
            , y: sumY / people.length
        };
    },

    // Generate circle data for a person
    generatePersonCircles: (personId) => {
        const person = circleData.people[personId];
        return Object.entries(person.values).map(([year, [x, y]]) => ({
            cx: circleData.coordinateConversion.x(x)
            , cy: circleData.coordinateConversion.y(y)
            , r: circleData.circleConfig.radius
            , class: `${personId}_circles`
            , year: parseInt(year)
            , fill: person.color
            , stroke: circleData.yearColors[year]
            , strokeWidth: circleData.circleConfig.strokeWidth
            , imageSrc: person.image
        }));
    },

    // Generate all circle data
    generateAllCircles: () => {
        return Object.keys(circleData.people).map(personId => 
            circleUtils.generatePersonCircles(personId)
        );
    }
};

// Animation utilities
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
                return letters[Math.floor(Math.random() * 26)];
            }
            loop += 1;
            return letters[Math.floor(Math.random() * 26)];
        })
        .join("");
        
        if (iteration >= event.target.dataset.value.length) {
            clearInterval(interval);
        }
        
        iteration += 1 / 3;
    }, 110);
}

// Function to handle the click on #big_num
function handleClickOnBigNum(event) {
    const valueX = event.target.dataset.value;
    scrambleGlitch(event, valueX);
}

// Function to be called when you want to trigger the #big_num click event
function callScrambleGlitch(valueX) {
    // Get the #big_num element
    const bigNumElement = document.querySelector("#big_num");
    
    // Create a new click event
    const clickEvent = new MouseEvent('click', {
        view: window
        , bubbles: true
        , cancelable: true
    });
    
    // Set the custom attribute "data-value" on #big_num element
    bigNumElement.dataset.value = valueX;
    
    // Dispatch the click event on #big_num element
    bigNumElement.dispatchEvent(clickEvent);
}

// Attach the click event listener to #big_num
document.querySelector("#big_num").onclick = handleClickOnBigNum;

// Export the data and utilities
window.circleData = circleData;
window.circleUtils = circleUtils;
window.callScrambleGlitch = callScrambleGlitch; 