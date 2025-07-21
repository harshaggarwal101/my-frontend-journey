const forminput=document.getElementById("taskinput");
const form=document.querySelector("form");
const tasklist=document.getElementById("tasklist");

form.addEventListener("submit",(e)=>{
    e.preventDefault();
    const text=forminput.value.trim();
    if(text===""){
        alert("pls enter a task")
        return;
    }

    //creating a list item
    const li=document.createElement("li");
    li.className="opacity-0 transition-opacity duration-1000";
    li.innerHTML=`
    <span>${text}</span>
    <button class="text-white font-bold border border-black rounded bg-red-500 hover:bg-red-700 ml-10">Delete</button>
`;
    const dbtn=li.querySelector("button");
    dbtn.addEventListener("click",()=>{
        li.classList.remove("opacity-100");
        li.classList.add("opacity-0");
        setTimeout(() => {
            li.remove();
        }, 1000);
    })

    tasklist.appendChild(li)
    setTimeout(() => {
        li.classList.remove("opacity-0")
        li.classList.add("opacity-100")
    }, 10);
    forminput.value="";
})
