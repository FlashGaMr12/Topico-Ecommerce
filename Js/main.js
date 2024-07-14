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

// add items in cart 

var all_products_json;

var items_in_cart = document.querySelector(".items_in_cart");
let product_cart = [];

function addToCart(id, btn) {
    product_cart.push(all_products_json[id])
    btn.classList.add("active")

    console.log(product_cart);
    getCartItems()
}

let count_item = document.querySelector('.count_item');
let count_item_cart = document.querySelector('.count_item_cart');
let price_cart_total = document.querySelector('.price_cart_total');

let price_cart_head = document.querySelector('.price_cart_head')

    function getCartItems() {
        let total_price = 0;

        let items_c = "";
        for (let i = 0; i < product_cart.length; i++) {
            items_c+= `
                <div class="items_cart">
          <img src="${product_cart[i].img}" alt="product1" />
          <div class="content">
            <h4>
            ${product_cart[i].name}
            </h4>

            <p class="price_cart">$${product_cart[i].price}</p>
          </div>
          <button onclick="remove_from_cart(${i})" class="clear_btn">
            <i class="fa-regular fa-trash-can"></i>
          </button>
        </div>


            `
            total_price += product_cart[i].price
            
        }
        items_in_cart.innerHTML = items_c
// header cart 
        price_cart_head.innerHTML = "$" + total_price
        count_item.innerHTML = product_cart.length
// product cart 
        count_item_cart.innerHTML = `(${product_cart.length} Items in cart)`
        price_cart_total.innerHTML = product_cart.length

    }

    function remove_from_cart(index) {
        product_cart.splice(index,1)
        getCartItems()

        let addToCartButtons = document.querySelectorAll(".fa-cart-plus");
        for (let i = 0; i < addToCartButtons.length; i++) {
            addToCartButtons[i].classList.remove("active");
            product_cart.forEach(product =>{
                if(product.id == i)
                addToCartButtons[i].classList.add("active")
            })
            
        }
        
    }
