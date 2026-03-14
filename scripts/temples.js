const currentYear = new Date().getFullYear();

document.getElementById("current-year").textContent = currentYear;

document.getElementById("lastModified").textContent = "Last Modified: " + document.lastModified;


const mainnav = document.querySelector('.navigation');
const hambutton = document.querySelector('#menu');

hambutton.addEventListener('click', () => {
    mainnav.classList.toggle('show');
    hambutton.classList.toggle('show');

    if (hambutton.textContent === "☰") {
        hambutton.textContent = "✖";
    } else {
        hambutton.textContent = "☰";
    }
});
