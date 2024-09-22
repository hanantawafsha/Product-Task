var registerForm  = document.querySelector(".registerForm");
var nameInput = document.querySelector("#productName");
var descriptionInput = document.querySelector("#productDescription");
var priceInput = document.querySelector("#productPrice");

var products = [];
//console.log(typeof(products));

registerForm.onsubmit = function(e) {
    e.preventDefault();

    var product = {
        name: nameInput.value,
        description: descriptionInput.value,
        price: priceInput.value
    };

    products.push(product);
  //  console.log(products);
    updateProductList();
};

// Update the UI with the product list
function updateProductList(){
    var tableRow =``;
    for (var i = 0; i < products.length; i++) {
        tableRow += `<tr>
        <td> ${products[i].name} </td>
        <td> ${products[i].description} </td>
        <td> ${products[i].price} </td>
        </tr>`;
    }

    document.querySelector("tbody").innerHTML = tableRow;
}
//console.log(updateProductList);