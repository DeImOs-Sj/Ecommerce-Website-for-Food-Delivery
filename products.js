let productsel=document.querySelector(".row");
let cartitemsel=document.querySelector(".modal-body");
let subtotalel=document.querySelector(".subtotal");
let itemsincartel=document.querySelector(".btn-light span");

const products=[
    {
        tag:1,
        name:'Pizza Vegano Delux with Mushrooms',
        desc:'Broccoli,Mushrooms,Bell pepper,Corn,<br>Onion,Mozzarella,Parmesan',
        price:112.99,
        stock:10,
        qty:0
    },
    {
        
        tag:2,
        name:'Pizza peporoni with Tomatoes',
        desc:'Peperoni,Tomatoes,Paprika,Chili,<br>Mozzarella,Parmesan',
        price:114.99,
        stock:8,
        qty:0
    },
    {
        
        tag:3,
        name:'Pizza with Salami and Olives',
        desc:'Salami,Olives,Bell Pepper,Mushrooms,<br>Mozzarella,Parmesan',
        price:115.99,
        stock:5,
        qty:0
    },
    {
        // id:4,
        tag:4,
        name:'Pizza with Quattro Formaggi',
        desc:'Mozzarella,Parmesan,Monterey Jack,<br>Pocarino Romano,Asiago',
        price:115.99,
        stock:10,
        qty:0
    },
    {
        // id:5,
        tag:5,
        name:'Pizza Margherita',
        desc:'Mozzarella,Parmesan,Basil,Fresh<br>Tomatoes,Tomato Sauce',
        price:110.99,
        stock:9,
        qty:0
    },
    {
        // id:6,
        tag:6,
        name:'Pizza with Minced Meat',
        desc:'Minced meat,Bacon,Jalapeno,<br>Mozzarella,Parmesan,Olives,Tomatoes',
        price:115.99,
        stock:7,
        qty:0
    },
    {
        // id:7,
        tag:7,
        name:'Pizza Hot Salami',
        desc:'Salami,Chili,Jalapeno,Mozzarella,<br>Parmesan, Tomato Sauce',
        price:114.99,
        stock:5,
        qty:0
    },
    {
        // id:8,
        tag:8,
        name:'Pizza with Grilled Meat',
        desc:'Grilled Meat,Tomatoes,Bell Pepper,<br>Onion,Mozzarella,Parmesan',
        price:116.99,
        stock:8,
        qty:0
    }
];

function displayproducts()
{
    products.forEach((product)=>{
        productsel.innerHTML+=`
        <div class="card card-sm shadow">
        <img src="images/${product.tag}.jpg" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${product.name} </h5><br>
          <p class="card-text text-muted">${product.desc} </p>
          <div class="btn-group btn-rounded gap-2 mb-3" role="group" aria-label="Basic radio toggle button group">
            <input type="radio" class="btn-check" name="btnradioa1" id="btnradio1" autocomplete="off">
            <label class="btn btn-outline-danger text-muted" for="btnradio1">Small</label>
          
            <input type="radio" class="btn-check" name="btnradioa1" id="btnradio2" autocomplete="off">
            <label class="btn btn-outline-danger text-muted" for="btnradio2">Medium</label>
          
            <input type="radio" class="btn-check" name="btnradioa1" id="btnradio3" autocomplete="off">
            <label class="btn btn-outline-danger text-muted" for="btnradio3">Large</label><br>
            
          </div>
          <div class="btn-group gap-2 mb-3" role="group" aria-label="Basic radio toggle button group">
            <input type="radio" class="btn-check" name="btnradioa" id="btnradio4" autocomplete="off">
            <label class="btn btn-outline-danger text-muted" for="btnradio4">Standard</label>
          
            <input type="radio" class="btn-check" name="btnradioa" id="btnradio5" autocomplete="off">
            <label class="btn btn-outline-danger text-muted" for="btnradio5">Thin</label>
          </div><br>
          <h5 class="text-primary d-inline">₹ ${product.price} </h5>
          <button type="button" class="btn btn-danger float-end" onclick="addtocart(${product.tag})">+ <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-cart3" viewBox="0 0 16 16">
            <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
          </svg></button>
         </div>
        </div>
        </div></div>
        `;
    });
}
displayproducts();
let cart=JSON.parse(localStorage.getItem("CART")) || [];
updatecart();
function addtocart(tag)
{
    // check if product already exist
    if(cart.some((item)=>item.tag===tag))
    {
        changeqty("plus",tag);
    }
    else
    {
        const item=products.find((product)=>product.tag===tag);
    cart.push({
        ...item,
        qty:1
    });
    
    }
   updatecart(); 
}
function updatecart()
{
    rendercartitems();
    rendersubtotal();
    localStorage.setItem("CART",JSON.stringify(cart));
}
function rendercartitems()
{
    cartitemsel.innerHTML="";
    cart.forEach((item)=>{
cartitemsel.innerHTML+=`
                  <table class="table">
                  <tbody>
                    <tr><td><img src="images/${item.tag}.jpg" height=50 width=50></td>
                    <td><p style="font-size:13px;">${item.name}</p></td>
                    <td>${item.price}</td>
                    <td><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-dash-circle" viewBox="0 0 16 16" onclick="changeqty('minus',${item.tag})">
                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                    <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z"/>
                  </svg> ${item.qty} <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-circle" viewBox="0 0 16 16" onclick="changeqty('plus',${item.tag})">
                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                    <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
                  </svg></td>
                    <td><button class="btn btn-sm btn-primary" onclick="removeitem(${item.tag})">Remove</button></td>
                  </tr></tbody></table>`

    })
}
function changeqty(action,tag)
{
    cart=cart.map((item)=>{
        let qty=item.qty;
        if(item.tag===tag)
        {
            if(action==="minus" && qty>1)
            {
                qty--;
            }
            else if(action==="plus" && qty<item.stock)
            {
                qty++;
            }
        }
        return {
            ...item,
            qty,
        };
    })
    updatecart();
}
function rendersubtotal()
{
    let totalprice=0,totalitems=0;
    cart.forEach((item)=>{
        totalprice+=item.price*item.qty;
        totalitems+=item.qty;
    });
    subtotalel.innerHTML=`Subtotal(${totalitems} items):₹${totalprice.toFixed(2)}`
    itemsincartel.innerHTML= totalitems;            
}
function removeitem(tag)
{
    cart=cart.filter((item)=>item.tag!==tag);
    updatecart();
}

