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

    const newsletterForm = document.querySelector(".newsletter form");

    if (newsletterForm) {
        newsletterForm.addEventListener("submit", (e) => {
            e.preventDefault(); // Prevents the page from reloading

            // 2. Get the user data
            const name = document.getElementById("news-name").value;
            const email = document.getElementById("news-email").value;

            const userData = {
                name: name,
                email: email,
                date: new Date().toLocaleDateString()
            };

            // 3. Handle LocalStorage and Arrays
            // Retrieve existing subscribers or start a new array if empty
            let subscribers = JSON.parse(localStorage.getItem("newsletterList")) || [];

            // Push the new user into the array
            subscribers.push(userData);

            // Save the updated array back to storage
            localStorage.setItem("newsletterList", JSON.stringify(subscribers));

            // 4. Give confirmation
            newsletterForm.innerHTML = `<p class="confirmation">Thanks for subscribing, ${name}! We've saved your info.</p>`;

            console.log("Current Subscribers:", subscribers);
        });
    }

    /* --- Contact Form Logic --- */
    const contactForm = document.getElementById('contact-form');
    const contactConfirmation = document.getElementById('contact-confirmation');

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault(); // Prevent page reload

            // Find which radio button is selected
            const selectedPurpose = document.querySelector('input[name="purpose"]:checked').value;
            // Check if the newsletter box is ticked
            const wantsNewsletter = document.getElementById('newsletter').checked;

            // 1. Create the message object
            const newMessage = {
                name: document.getElementById('name').value,
                email: document.getElementById('email').value,
                purpose: selectedPurpose,
                message: document.getElementById('message').value,
                subscribeToNewsletter: wantsNewsletter,
                timestamp: new Date().toLocaleString()
            };

            // 2. Manage the Array in LocalStorage
            // Get existing messages or start a new empty array
            let allMessages = JSON.parse(localStorage.getItem('contactMessages')) || [];

            // Add the new message to the array
            allMessages.push(newMessage);

            // Save the updated array back to storage
            localStorage.setItem('contactMessages', JSON.stringify(allMessages));

            // 3. Show confirmation message and hide the form
            contactForm.style.display = 'none';

            if (contactConfirmation) {
                // We format the "purpose" slightly to look better in the sentence
                let purposeText = newMessage.purpose;
                if (purposeText === 'general') purposeText = 'general inquiry';
                if (purposeText === 'reservation') purposeText = 'reservation question';
                if (purposeText === 'suggestion') purposeText = 'website suggestion';

                contactConfirmation.innerHTML = `
                    <h3 style="color: var(--primary-color); margin-bottom: 10px;">Message Sent!</h3>
                    <p>Thank you, <strong>${newMessage.name}</strong>. We have received your ${purposeText}.</p>
                    <br>
                    <p>A reply will be sent to <em>${newMessage.email}</em> shortly.</p>
                `;
            }
        });
    }
});