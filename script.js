const menuBtn =document.getElementById("menu-btn");
const navLinks =document.getElementById("nav-links");
const menuBtnIcon =menuBtn.querySelector("i");


menuBtn.addEventListener("click",(e) =>
{
    navLinks.classList.toggle("open");

    const isOpen = navLinks.classList.contains("open");
    menuBtnIcon.setAttribute("class", isOpen ? "bx bx-x" : "bx bx-menu")
});


navLinks.addEventListener("click",(e) =>{

    navLinks.classList.remove("open");
    menuBtnIcon.setAttribute("class",  "bx bx-menu");
});


const navSearch = document.getElementById("nav-search")
navSearch.addEventListener("click",(e) =>{
    navSearch.classList.toggle("open");
});


const scrollRevealOption = {
    distance: "50px",
    origin: "bottom",
    duration: "1000",
};

ScrollReveal().reveal(" .header__image img" ,{
    ...scrollRevealOption,
    origin: "right",
});

ScrollReveal().reveal(" .header__content div" ,{
    duration: 1000,
    delay:500,
});
ScrollReveal().reveal(" .header__content h1" ,{
    ...scrollRevealOption,
    delay: 1000,
});
ScrollReveal().reveal(" .header__content p" ,{
    ...scrollRevealOption,
    delay: 1500,
});
ScrollReveal().reveal(" .deals__card" ,{
    ...scrollRevealOption,
       interval: 500,
});



ScrollReveal().reveal(" .about__image img" ,{
    ...scrollRevealOption,
    origin: "right",
});

ScrollReveal().reveal(" .about__card " ,{
    duration: 1000,
    interval:500,
    delay:500,
});

const swiper = new Swiper(".swiper",{
    loop:true,
});




let addcart = document.querySelector('.add__cart');
let orders = document.querySelector('.orders');
let closecart = document.querySelector('.close');
let body = document.querySelector('body');
let listproducthtml = document.querySelector('.listproduct');

let listproducts =[];

addcart.addEventListener('click',()=>{
    body.classList.toggle("show__cart");
});
orders.addEventListener('click',()=>{
    body.classList.toggle("show__cart");
});
closecart.addEventListener('click',()=>{
    body.classList.toggle("show__cart");
});
    


const product = [
    {
        "id": 1,
        "name":"Stackable Chair",
        "price":7499 ,
        "image":"p1.png"
    },
    {
        "id": 2,
        "name":"Lamp tool",
        "price":2999 ,
        "image":"p2.png"
    },
    {
        "id": 3,
        "name":"Dining Table",
        "price": 25000 ,
        "image":"dining1.png"
    },
    {
        "id":4,
        "name":"Hand Base Lamp",
        "price":2999 ,
        "image":"lamp.png"
    },
    {
        "id":5,
        "name":"Wooden chair",
        "price":19999 ,
        "image":"chair2.png"
    },
    {
        "id":7,
        "name":"Stylish Chair",
        "price":3999 ,
        "image":"stylish.png"
    },
    {
        "id":6,
        "name":"Wooden Sofa",
        "price":1999,
        "image":"sofa.png"
    },
   
    {
        "id":8,
        "name":"Office Chair",
        "price":13499,
        "image":"office-img.png"
    },
   
    {
        "id":10,
        "name":"Wooden Zula",
        "price":11499 ,
        "image":"jhula.png"
    }
   
    
];

const categories = [...new Set(product.map((item)=>
    {return item}))]
    let i=0;
    document.getElementById('grid').innerHTML = categories.map((item)=>
    {
        var {image,price,name}=item;
        return(
            `<div class='product-card'>
                   <h4>${name}</h4>
                   <p>${price}.00</p>
                   <img src=${image}></img>`+
                   "<button class='btn' onclick='addtocart("+(i++)+")'>Add to cart</button>"+"</div>"
        )
    }).join('');


    var cart =[];

    function addtocart(e){
        cart.push({...categories[e]});
        displaycart();
    }

   function delElement(e){
    cart.splice(e,1);
    displaycart();
   }

    function displaycart(e){
        let j = 0 , total=0;
        document.getElementById('count').innerHTML = cart.length;
        if(cart.length==0){
            document.getElementById('list__cart').innerHTML="Your Cart Is Empty";
            document.getElementById('total').innerHTML="Rs"+0+".00";
        }else{
            document.getElementById('list__cart').innerHTML=cart.map((Item)=>
            {
               var{image,name,price} = Item;
               total=total+price;
               document.getElementById('total').innerHTML = "Rs "+total+".00";             
                 return(
                `<div class='item'>
                    <div class='image'>
                        <img class='images' src=${image}>
                    </div>
                    <div class="name">${name}</div>
                    <div class="total__price">${price}</div>`+
                    "<i class='bx bxs-trash' onclick='delElement("+ (j++) +")'></i></div>"
               )
            }).join(''); 
        }
}

