const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
[...tooltipTriggerList].map(i => i.setAttribute('data-bs-placement', 'right'));
[...tooltipTriggerList].map(i => i.setAttribute('data-bs-trigger', 'hover'));
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));

const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl));

window.addEventListener("load", ()=>{
    document.querySelector("body").style.transition = "background 0.5s";
});

document.getElementById("searchClient").addEventListener("keypress", () => {
    document.getElementById("clientSearch").classList.add("active");
    document.getElementById("overlay").classList.add("active");
});
document.getElementById("hidde").addEventListener("click", () => {
    document.getElementById("clientSearch").classList.remove("active");
    document.getElementById("overlay").classList.remove("active");
});


//Switch mode
document.getElementById("changeMode").addEventListener("click", () => {
    if (localStorage.getItem("darkMode") === "true") {
        localStorage.setItem("darkMode", false);
        document.getElementById('mode').href = ' ';
    } else {
        localStorage.setItem("darkMode", true);
        document.getElementById('mode').href = '../css/dark_mode.css';
    }
});
if (localStorage.getItem("darkMode") === "true") {
    localStorage.setItem("darkMode", true);
    document.getElementById('mode').href = '../css/dark_mode.css';
};