let category="https://api.escuelajs.co/api/v1/categories";
let products="https://fakestoreapi.in/api/products";
let users="https://api.escuelajs.co/api/v1/users";
let cartCount=document.querySelector(".cart-icon");
let closeBtn=document.querySelector("#CloseBtn");
let cart=document.querySelector(".fa-shopping-cart")

window.addEventListener("scroll",()=>{
    let nav=document.querySelector(".nav");
    if(window.scrollY>200){
        nav.classList.add("navsticky");
    }else{
        nav.classList.remove("navsticky");
    }
})

cart.addEventListener("click",()=>{
    window.location.href=`cart.html`;
})

async function FetchProducts(){
    let response=await fetch(products);
    let data=await response.json();
    let items=Array.isArray(data) ? data : data.products; 

    console.log(items);

   let ProductContainer=document.querySelector(".AllProducts")
   items.forEach(product => {
       let productDiv=document.createElement("div");
       productDiv.innerHTML=`
       
       <div class="product">
<img src="${product.image}" alt="${product.title}" width="200" />

<div class="details">

    <h4>Name :</h4>
    <h5 style="font-weight: 600; color: rgba(216, 72, 19, 0.788);">${product.title.substring(0, 50)}...</h5>
    <h4>Description :</h4>

    <p>${product.description.substring(0, 50)}...</p> 
    <h4>Price : $${product.price}</h4>
    <h4>Category : ${product.category}</h4>
    <div class="btnsec">
        <button class="add-to-cart">Add to Cart</button>
     <button class="view-details" data-id="${product.id}">View Details</button>
     
    </div>
</div>
       
       
       `
       let addtocart=productDiv.querySelector(".add-to-cart");
addtocart.addEventListener("click",()=>{
    cartCount.innerText=parseInt(cartCount.innerText)+1;
})
let DetailsButton=productDiv.querySelector(".view-details");

DetailsButton.addEventListener("click",(e)=>{
    let id=e.target.getAttribute("data-id");
    console.log("the click id",id);
   
    window.location.href = `product.html?id=${id}` ;

})

       ProductContainer.appendChild(productDiv);
   });
}
FetchProducts()

