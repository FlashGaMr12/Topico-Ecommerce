//open & close Cart

var cart = document.querySelector('.cart')  
var cartItems = document.querySelector('.items_in_cart')

function open_cart() {
    cart.classList.add("active")
}
function close_cart() {
    cart.classList.remove("active")
}

// function delete_item() {
//     cartItems.classList.remove("items_cart")
// }