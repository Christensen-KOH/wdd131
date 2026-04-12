document.addEventListener("DOMContentLoaded", () => {
    /* Footer */
    const currentYear = new Date().getFullYear();
    const yearElement = document.getElementById("current-year");
    const modifiedElement = document.getElementById("lastModified");

    if (yearElement) {
        yearElement.textContent = currentYear;
    }

    if (modifiedElement) {
        modifiedElement.textContent = "Last Modified: " + document.lastModified;
    }

    /* Mentor Auto-Fill (For Booking Page) */
    const urlParams = new URLSearchParams(window.location.search);
    const selectedTutor = urlParams.get('tutor');
    const tutorInput = document.getElementById('tutor-display');

    if (selectedTutor && tutorInput) {
        tutorInput.value = selectedTutor;
    }

    /* --- Hamburger Menu Logic --- */
    const mainnav = document.querySelector('.nav');
    const hambutton = document.querySelector('#menu');

    // Added a check to ensure hambutton exists before adding the listener
    if (hambutton && mainnav) {
        hambutton.addEventListener('click', () => {
            mainnav.classList.toggle('show');
            hambutton.classList.toggle('show');

            if (hambutton.textContent === "☰") {
                hambutton.textContent = "✖";
            } else {
                hambutton.textContent = "☰";
            }
        });
    }
});