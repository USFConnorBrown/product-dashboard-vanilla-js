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



