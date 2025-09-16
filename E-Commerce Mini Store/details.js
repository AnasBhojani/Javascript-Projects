

 


let param=new URLSearchParams(window.location.search);
let id=param.get("id");
console.log(id);

if(id){
    fetch(`https://dummyjson.com/products/${id}`)
    .then(res=> res.json())
    .then(data =>{
        console.log(data);
        RenderDetails(data);
    })
    .catch(err=>console.log(err));
   
    
}

function RenderDetails(product){
    let detailsContainer=document.querySelector(".MainContainer");

     let { category, description, title, price, images, rating, warrantyInformation, shippingInformation, stock, returnPolicy} = product;
  

   let[reviews]=product.reviews;
   console.log(reviews);
   let { reviewerName, reviewerEmail, comment, date } = reviews;
   
 

    if (images.length > 0) {
        images=images[0];
    }
    if(reviews.length>0){
        reviews=reviews[0];
    }
    detailsContainer.innerHTML=`
    
    <div class="imageSection">
        <img src="${images}" alt="${title} Image" height="500">
    </div>

    <div class="detailSection">

        <h2>${title}</h2>
        <h3 style="font-family: 'Space Grotesk', sans-serif;">$ ${price}</h3>
        <p>${description}</p>
        <h4>Category: ${category}</h4>
        <div class="buttons">

            <button class="add-to-cart-btn">Add to Cart <i class="fa-solid fa-cart-shopping"></i></button>
        <button>Buy Now</button>
        </div>
        
        
         <h4>Remaining In Stock : ${stock} </h4>

         <p><h4>Warranty :</h4>  ${warrantyInformation} </p>
            <p><h4>Delivery :</h4>  ${shippingInformation} </p>
            <p><h4>Return Policy :</h4>  ${returnPolicy} </p>
        <h4>Here What Our Customers Say</h4>

       

            <div class="costumerinfo">
            <h3>${reviewerName}</h3>
            <p>Email: ${reviewerEmail}</p>
            <p>"${comment}"</p>
            <h6>Date:  ${date}</h6>
            <h6>Rating : ${rating} / 5  <i class="fa-solid fa-star"></i></h6>
        </div>
            
       

          <h4>Available Sizes</h4>
        <div class="sizes">
          
            <button>S</button>
            <button>M</button>
            <button>L</button>
            <button>XL</button>
            <button>XXL</button>
        </div>
    </div>
    
    `

    let cartbtn=detailsContainer.querySelector(".add-to-cart-btn");
    cartbtn.addEventListener("click" ,() => {
        console.log("clicked");
        
        
      let ShoppingCart;

      try{

        ShoppingCart=JSON.parse(localStorage.getItem("cartitems")) || [];

       if(!Array.isArray(ShoppingCart)){
        ShoppingCart=[];
       }      
    }
    catch(err){

        ShoppingCart=[];
        console.log("Error",err);

    }

    let existingProduct=ShoppingCart.find(item => item.id===product.id);

    if(existingProduct){

        existingProduct.quantity= (existingProduct.quantity || 1) +1;
      
    }
    else{
        ShoppingCart.push({...product,quantity:1})
    }

localStorage.setItem("cartitems",JSON.stringify(ShoppingCart));
  console.log(existingProduct.quantity);

console.log("Item added to cart",product);

    })
}
let backIcon=document.querySelector(".fa-arrow-left");
backIcon.addEventListener("click", () => {
    window.location.href = "index.html"; // Redirect to home page
})