const btn = document.querySelector("button");
const icon = document.getElementById("theme-icon");
const heading=document.querySelector("h1");
btn.addEventListener('click', () => {
    document.body.classList.toggle("dark");
    // Icon switch inside the event handler
    if (document.body.classList.contains("dark")) {
        icon.classList.remove("fa-moon");
        icon.classList.add("fa-sun");
        heading.innerHTML="Light mode toggle example"
    } else {
        icon.classList.remove("fa-sun");
        icon.classList.add("fa-moon");
        heading.innerHTML="Dark mode toggle example"
    }
});
