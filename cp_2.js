//Using the function of fetch with .then() and .catch() to fetch product data from an API and log product names to the console.
function fetchProductsThen() {
    fetch('https://www.course-api.com/javascript-store-products')
    .then(response => response.json())
    .then(data => {
console.log("Product names using .then():");
        data.forEach(product => console.log(product.name));
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

    //This function will help render the products on the page
    function displayProducts(products) {
        const container = document.getElementById('product-container');
        container.innerHTML = ''; // Clear the existing content

        const firstFive = products.slice(0, 5);
        firstFive.forEach(product => {
            const card = document.createElement('div');
            card.classList.add('product-card');

            const img = document.createElement('img');
            img.src = product.image;
            img.alt = product.name;
            const name = document.createElement('h3');
            name.textContent = product.name;

            const price = document.createElement('p');
            price.textContent = `$${(product.price / 100).toFixed(2)}`;

            card.appendChild(img);
            card.appendChild(name);
            card.appendChild(price);
            container.appendChild(card);
        });
    }
     //This function will help handle errors
    function handleError(error) {
        console.error('An error occurred: ${error.message}');
    }

    //This will call both of the fetch functions
    fetchProductsThen();
    fetchProductsAsync();
           