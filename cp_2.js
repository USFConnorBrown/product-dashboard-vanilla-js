//Using the function of fetch with .then() and .catch() to fetch product data from an API and log product names to the console.
function fetchProductsThen() {
    fetch('https://www.course-api.com/javascript-store-products')
    .then(response => response.json())
    .then(data => {
console.log("Product names using .then():");
        data.forEach(product => console.log(product.name));{
    })
    .catch(error => {
        console.error("Error in fetchProductsThen:", error.message);
    });
    }

    //Function utilzing the async/await and the try/catch
    async function fetchProductsAsync() {
        try {
            const response = await fetch('https://www.course-api.com/javascript-store-products');
            const products = await response.json();
            displayProducts(products);
        } catch (error) {
            handleError(error);
        }
    }

    
           



