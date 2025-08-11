const sounds = {
    "Kick Drum": "sounds/kick-drum-118_F_minor.wav",
    "Snare Drum": "sounds/layered-snare_A_minor.wav",
    "Hi-Hat Closed": "sounds/808-closed-hi-hat.wav",
    "Hi-Hat Open": "sounds/open-hi-hat.wav",
    "Low Tom": "sounds/tom-2-85124.mp3",
    "Mid Tom": "sounds/floor-tom-107404.mp3",
    "High Tom": "sounds/high-tom-of-god-wet-004-94254.mp3",
    "Crash Cymbal": "sounds/tr707-crash-cymbal-241376.mp3",
    "Ride Cymbal": "sounds/long-ride-cymbal-2-36337.mp3",
    "Clap": "sounds/clap-375693.mp3",
    "Cobwell": "sounds/dirty-tony-cowbell-mx-013-107592.mp3",
    "Shaker": "sounds/wooden-rumba-shaker-315991.mp3"
};

let currentVolume = 0.5;

// Volume control
document.getElementById("volume").addEventListener("input", (e) => {
    currentVolume = parseFloat(e.target.value);
});

// Play sound by label
function playSound(label) {
    if (sounds[label]) {
        const audio = new Audio(sounds[label]);
        audio.volume = currentVolume;
        audio.currentTime = 0;
        audio.play();
    }
}

// Mouse click
document.querySelectorAll(".sound").forEach(button => {
    button.addEventListener("click", () => {
        playSound(button.textContent.trim());
    });
});

// Keyboard bindings
const keyBindings = {
    "a": "Kick Drum",
    "s": "Snare Drum",
    "d": "Hi-Hat Closed",
    "f": "Hi-Hat Open",
    "g": "Low Tom",
    "h": "Mid Tom",
    "j": "High Tom",
    "k": "Crash Cymbal",
    "l": "Ride Cymbal",
    ";": "Clap",
    "'": "Cobwell",
    "Enter": "Shaker"
};

document.addEventListener("keydown", (e) => {
    const soundLabel = keyBindings[e.key];
    if (soundLabel) {
        playSound(soundLabel);
    }
});
