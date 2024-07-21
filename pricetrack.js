document.getElementById('productForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const productUrl = document.getElementById('productUrl').value;

    // Simulated API call (Replace with actual API call logic)
    fetchProductDetails(productUrl);
});

function fetchProductDetails(url) {
    // Simulated data (Replace with actual API response)
    const simulatedResponse = {
        title: "Sample Product Title",
        price: "$99.99"

    };

    displayProductDetails(simulatedResponse);
}

function displayProductDetails(details) {
    document.getElementById('productTitle').textContent = `Title: ${details.title}`;
    document.getElementById('productPrice').textContent = `Price: ${details.price}`;

}
