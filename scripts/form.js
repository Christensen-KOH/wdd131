// Product Array
const products = [
    { id: "fc-1888", name: "flux capacitor", averagerating: 4.5 },
    { id: "fc-2050", name: "power laces", averagerating: 4.7 },
    { id: "fs-1987", name: "time circuits", averagerating: 3.5 },
    { id: "ac-2000", name: "low voltage reactor", averagerating: 3.9 },
    { id: "jj-1969", name: "warp equalizer", averagerating: 5.0 }
];

// Initialize on form page
function initializeForm() {
    const productSelect = document.getElementById("product-name");

    if (productSelect) {
        // Populate product select options
        products.forEach(product => {
            const option = document.createElement("option");
            option.value = product.id;
            option.textContent = product.name;
            productSelect.appendChild(option);
        });
    }
}

// Get form data from URL parameters
function getFormDataFromURL() {
    const params = new URLSearchParams(window.location.search);
    const formData = {
        product: params.get("product"),
        rating: params.get("rating"),
        installDate: params.get("installDate"),
        features: params.getAll("features"),
        review: params.get("review"),
        userName: params.get("userName")
    };
    return formData;
}

// Get product name by ID
function getProductNameById(productId) {
    const product = products.find(p => p.id === productId);
    return product ? product.name : "Unknown Product";
}

// Format features array for display
function formatFeatures(features) {
    if (!features || features.length === 0) {
        return "None selected";
    }

    const featureLabels = {
        "durable": "Durable",
        "affordable": "Affordable",
        "easyUse": "Easy to Use",
        "quality": "High Quality",
        "reliable": "Reliable",
        "design": "Great Design"
    };

    return features
        .map(feature => featureLabels[feature] || feature)
        .join(", ");
}

// Format date for display
function formatDate(dateString) {
    if (!dateString) return "-";
    const date = new Date(dateString + "T00:00:00");
    return date.toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric"
    });
}

// Format rating for display
function formatRating(ratingValue) {
    if (!ratingValue) return "-";
    const ratings = {
        "1": "1 - Poor",
        "2": "2 - Fair",
        "3": "3 - Good",
        "4": "4 - Very Good",
        "5": "5 - Excellent"
    };
    return ratings[ratingValue] || "-";
}

// Initialize review confirmation page
function initializeReviewPage() {
    const summaryProduct = document.getElementById("summary-product");
    const summaryRating = document.getElementById("summary-rating");
    const summaryDate = document.getElementById("summary-date");
    const summaryFeatures = document.getElementById("summary-features");
    const counterElement = document.getElementById("review-counter");

    if (summaryProduct) {
        const formData = getFormDataFromURL();

        // Populate summary
        summaryProduct.textContent = getProductNameById(formData.product);
        summaryRating.textContent = formatRating(formData.rating);
        summaryDate.textContent = formatDate(formData.installDate);
        summaryFeatures.textContent = formatFeatures(formData.features);

        // Update counter
        updateReviewCounter(counterElement);
    }
}

// Update review counter using localStorage
function updateReviewCounter(counterElement) {
    // Get current counter value
    let reviewCount = localStorage.getItem("reviewCount");
    reviewCount = reviewCount ? parseInt(reviewCount) : 0;

    // Increment counter
    reviewCount++;

    // Save updated counter
    localStorage.setItem("reviewCount", reviewCount);

    // Display counter
    if (counterElement) {
        counterElement.textContent = reviewCount;
    }
}

// Initialize page based on current location
document.addEventListener("DOMContentLoaded", function () {
    // Check if we're on the form page
    if (document.getElementById("product-name")) {
        initializeForm();
    }

    // Check if we're on the review/confirmation page
    if (document.getElementById("summary-product")) {
        initializeReviewPage();
    }
});
