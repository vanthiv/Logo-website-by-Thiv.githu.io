const url = "https://fakestoreapi.com/products";

async function getAllProducts() {

    const response = await fetch(url);
    const data = await response.json();

    console.log(data);

    let output = '';
    data.map((Product)=> {
        output+=
         `<div class="card">
        <img src=${Product.image} >
            <h4>${Product.title}</h4>
    </div>`;
        
    });
    document.getElementById("product").innerHTML = output;
}
getAllProducts();