const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
        templeName: "Abidjan Ivory Coast",
        location: "Abidjan, Ivory Coast",
        dedicated: "2024, March, 3",
        area: 30000,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/abidjan-ivory-coast/400x250/abidjan-ivory-coast-temple-exterior.jpg"
    },
    {
        templeName: "Accra Ghana",
        location: "Accra, Ghana",
        dedicated: "2024, January, 6",
        area: 30000,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/accra-ghana/400x250/accra-ghana-temple-exterior.jpg"
    },
    {
        templeName: "Congo Brazzaville",
        location: "Brazzaville, Congo",
        dedicated: "2023, August, 6",
        area: 25000,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/congo-brazzaville/400x250/congo-brazzaville-temple-exterior.jpg"
    },
];

// Function to create and display temple cards
function displayTemples(templeArray) {
    const templeGrid = document.querySelector('.temple-grid');

    // Clear existing temples
    templeGrid.innerHTML = '';

    templeArray.forEach((temple) => {
        // Create figure element
        const figure = document.createElement('figure');

        // Create image element with lazy loading
        const img = document.createElement('img');
        img.src = temple.imageUrl;
        img.alt = temple.templeName;
        img.loading = 'lazy';
        img.width = 400;
        img.height = 250;

        // Create figcaption with temple information
        const figcaption = document.createElement('figcaption');
        figcaption.innerHTML = `
            <h3>${temple.templeName}</h3>
            <p><strong>Location:</strong> ${temple.location}</p>
            <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
            <p><strong>Area:</strong> ${temple.area.toLocaleString()} sq ft</p>
        `;

        // Append image and caption to figure
        figure.appendChild(img);
        figure.appendChild(figcaption);

        // Append figure to grid
        templeGrid.appendChild(figure);
    });
}

// Filter functions
function filterOld() {
    const oldTemples = temples.filter((temple) => {
        const year = parseInt(temple.dedicated.split(',')[0]);
        return year < 1900;
    });
    displayTemples(oldTemples);
}

function filterNew() {
    const newTemples = temples.filter((temple) => {
        const year = parseInt(temple.dedicated.split(',')[0]);
        return year > 2000;
    });
    displayTemples(newTemples);
}

function filterLarge() {
    const largeTemples = temples.filter((temple) => temple.area > 90000);
    displayTemples(largeTemples);
}

function filterSmall() {
    const smallTemples = temples.filter((temple) => temple.area < 10000);
    displayTemples(smallTemples);
}

// Display all temples on page load
displayTemples(temples);

// Add event listeners to navigation links
document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.nav a');

    navLinks.forEach((link) => {
        link.addEventListener('click', (e) => {
            e.preventDefault();

            // Remove active class from all links
            navLinks.forEach((l) => l.classList.remove('active'));
            // Add active class to clicked link
            link.classList.add('active');

            const text = link.textContent.trim();

            switch (text) {
                case 'Home':
                    displayTemples(temples);
                    break;
                case 'Old':
                    filterOld();
                    break;
                case 'New':
                    filterNew();
                    break;
                case 'Large':
                    filterLarge();
                    break;
                case 'Small':
                    filterSmall();
                    break;
            }

            // Close mobile menu after selection
            const mainnav = document.querySelector('.nav');
            const hambutton = document.querySelector('#menu');
            mainnav.classList.remove('show');
            hambutton.classList.remove('show');
            hambutton.textContent = "☰";
        });
    });
});

const currentYear = new Date().getFullYear();

document.getElementById("current-year").textContent = currentYear;

document.getElementById("lastModified").textContent = "Last Modified: " + document.lastModified;


const mainnav = document.querySelector('.nav');
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
