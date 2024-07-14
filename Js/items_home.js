fetch('js/items.json')
            .then(response => response.json())
            .then(data=>{
                const swiper_items_sale = document.getElementById("swiper_items_sale")
                data.forEach(product => {
                    if(product.old_price){
                        const salePercent = Math.floor((product.old_price - product.price) / product.old_price * 100) //remove decimals
                        swiper_items_sale.innerHTML +=`
                          <div class="product swiper-slide">
              <div class="icons">
                <span> <i class="fa-solid fa-cart-plus"></i></span>
                <span> <i class="fa-solid fa-heart"></i> </span>
                <span> <i class="fa-solid fa-share"></i> </span>
              </div>
              <span class="saleIcon"> ${salePercent}% </span>
              <div class="img_product">
                <img src="${product.img}" alt="ProductImg" />
                <img
                  class="img_hover"
                  src="${product.img_hover}"
                  alt="hoverImg"
                />
              </div>

              <h3 class="product_Name">
                <a href="#">${product.name}</a>
              </h3>

              <!-- Rating stars  / price  -->
              <div class="stars">
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
              </div>
              <div class="price">
                <p><span>$${product.price}</span></p>
                <p class="old_price">$${product.old_price}</p>
              </div>
            </div>
                        `
                    }
                    
                });
            })