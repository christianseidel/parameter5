rotatePentagon();

function rotatePentagon() {
    let angle = Math.random() * 360;
    let setDirection = (Math.random() > 0.5) ? .25 : -.25;
    document.getElementById('pentagon').style.transform = 'rotate(' + angle + 'deg)';
    setInterval(function () {
        angle = angle + setDirection;
        document.getElementById('pentagon').style.transform = 'rotate(' + angle + 'deg)';
        if (angle > 360) {
            angle = -.25;
        } else if (angle < -360) {
            angle = .25;
        }
    }, 50);
}

document.body.addEventListener('click', goToAbout);

function goToAbout() {
    location.href = 'about.html';
}

let timeUntilHandShown = random(800, 4000);
let extendTime = 0;
let whenToShowHand = new Date().getTime() + timeUntilHandShown;
let durationHandShown = random(600, 1000);
let extendDuration = 0;
let repeatHand = false;

setInterval(function () {
    let timeLeft = whenToShowHand - new Date().getTime();
    if (timeLeft <= 0) {
        if (!repeatHand) {  // initial showHand event
            showHand(durationHandShown);
            repeatHand = true;
            whenToShowHand = new Date().getTime() + durationHandShown + 100;
            durationHandShown = random(200, 1200) + extendDuration;
            if (extendDuration < 2000) {
                extendDuration += 200;
            }
        } else {             // repeated showHand Event
            showHand(50);
            repeatHand = false;
            whenToShowHand = new Date().getTime() + random(2000, 4000) + extendTime;
            if (extendTime < 16000) {
                extendTime += 2000;
            }
        }
    }
}, 50);


function showHand(duration) {
    document.body.style.cursor = "pointer";
    setTimeout(function () {
        document.body.style.cursor = "default";
    }, duration);
}

function random(min, max) {
    return Math.round(min + Math.random() * (max - min));
}