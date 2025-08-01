const url="https://catfact.ninja/fact";
btn=document.getElementById("newfact");
factpara=document.getElementById("fact");
err=document.getElementById("error");

async function getfact() {
    factpara.textContent="Loading...";
    err.classList.add("hidden");
    try {
        const res=await fetch(url);
        const data=await res.json();
        console.log(data.fact);
        factpara.textContent=data.fact;
    } catch (error) {
        console.log("Something went wrong",error);
        factpara.textContent='';
        err.classList.remove("hidden");
    }
}
window.addEventListener("DOMContentLoaded",getfact);
btn.addEventListener("click",getfact);