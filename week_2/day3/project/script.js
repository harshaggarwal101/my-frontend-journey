const url='https://official-joke-api.appspot.com/random_joke';
const jokepara=document.getElementById("joke");
const errpara=document.getElementById("error");
const jokebtn=document.getElementById("newjoke");
const savebtn=document.getElementById("savejoke");
const clearbtn = document.getElementById("clearAll");
let currentjoke="";

async function getjoke() {
    jokepara.textContent="Loading...";
    errpara.classList.add("hidden");
    
    try {
        const res=await fetch(url);
        const data=await res.json();
        currentjoke = `${data.setup} ${data.punchline}`;
        jokepara.textContent = currentjoke;
    } catch (error) {
        jokepara.textContent="";
        errpara.classList.remove("hidden");
    }
}

function savejoke() {
    if (!currentjoke) return;

    let savedjokes = JSON.parse(localStorage.getItem("jokes")) || [];
    if (!Array.isArray(savedjokes)) savedjokes = []; // ✅ type-check

    if (savedjokes.includes(currentjoke)) return;

    savedjokes.push(currentjoke);
    localStorage.setItem("jokes", JSON.stringify(savedjokes));
    displayjoke();
}




function displayjoke() {
    const container = document.getElementById("display");
    let jokes = JSON.parse(localStorage.getItem("jokes")) || [];
    if (!Array.isArray(jokes)) jokes = []; // ✅ type-check

    container.innerHTML = '';

    jokes.forEach((j, i) => {
        const div = document.createElement("div");
        div.className = "bg-white text-slate-700 border border-slate-200 p-2 rounded mb-2 flex justify-between items-center";

        const p = document.createElement("p");
        p.textContent = j;

        const b = document.createElement("button");
        b.textContent = "Delete";
        b.className = "text-red-500 ml-4";
        b.onclick = () => deletejoke(i);

        div.appendChild(p);
        div.appendChild(b);
        container.appendChild(div);
    });
}



function deletejoke(i) {
    const jokes = JSON.parse(localStorage.getItem("jokes"));
    jokes.splice(i, 1);
    localStorage.setItem("jokes", JSON.stringify(jokes)); // ✅ fix here
    displayjoke();
}

clearbtn.addEventListener("click", () => {
    localStorage.removeItem("jokes");
    displayjoke();
});


window.addEventListener("DOMContentLoaded", () => {
    getjoke();
    displayjoke();
});

jokebtn.addEventListener("click",getjoke);
savebtn.addEventListener("click",savejoke);
