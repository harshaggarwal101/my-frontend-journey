const container = document.getElementById("maincontainer");

for (let i = 1; i <= 12; i++) {
    const angle = (30 * i) * (Math.PI / 180); // convert degrees to radians
    const radius = container.offsetWidth / 2.2; // distance from center to numbers

    const x = container.offsetWidth / 2 + radius * Math.sin(angle);
    const y = container.offsetHeight / 2 - radius * Math.cos(angle); // use offsetHeight & subtract

    const span = document.createElement("span");
    span.textContent = i;
    span.className = "number";
    span.style.position = "absolute";
    span.style.fontSize = "x-large";
    span.style.transform = "translate(-50%, -50%)"; // center each number
    span.style.left = `${x}px`;
    span.style.top = `${y}px`;

    container.appendChild(span);
}


function movement() {
    const hour_hand=document.querySelector(".hour-hand");
    const minute_hand=document.querySelector(".minute-hand");
    const seconds_hand=document.querySelector(".seconds-hand");

    const now=new Date();
    const hour=now.getHours();
    const minutes=now.getMinutes();
    const seconds=now.getSeconds();

    const seconds_deg=(seconds*6)-90;
    const minutes_deg=(minutes*6)+(seconds*0.1)-90;
    const hours_deg=(hour*30)+(minutes*0.5)-90;

    seconds_hand.style.transform = `rotate(${seconds_deg}deg)`;
    minute_hand.style.transform = `rotate(${minutes_deg}deg)`;
    hour_hand.style.transform = `rotate(${hours_deg}deg)`;
}   
setInterval(movement,1000);
movement();