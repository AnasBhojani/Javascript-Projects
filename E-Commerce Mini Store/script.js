let slides = document.querySelectorAll(".slide");
let index = 0;

setInterval(() => {
  slides[index]?.classList.remove("active");
  index = (index + 1) % slides.length;
  slides[index]?.classList.add("active");
}, 1000);





let ProductsApi = "https://dummyjson.com/products";




let allProducts = [];

 async function FetchProducts() {
  let response = await fetch(ProductsApi);
  let data = await response.json();

  allProducts = data.products;
  console.log(allProducts);
    RenderProducts(allProducts);
}
FetchProducts();
 function RenderProducts(product) {
  /*   console.log(products); */
  let cartmsg = document.querySelector(".added");
  let ProductsContainer = document.getElementById("Product-Container");
  ProductsContainer.innerHTML = "";

  product.forEach((products) => {
    let { category, description, title, price, images, rating,id} = products;
    


    if (images.length > 0) {
      images = images[0];
    }

    

    let productDiv = document.createElement("div");
    
       productDiv.className = "product1";
    productDiv.dataset.id = products.id;
  
 
   
    productDiv.innerHTML = `
      
      <img src="${images}" alt="">
            <div class="productdetails">
                <div class="fav">
                    <h3>Category : ${category}</h3>
                   <i class="fa-solid fa-heart" style="background-color:white; color:black"></i>
                </div>

                <h2>${title}</h2>
                <p>${description}</p>
                <h5>Rating : ${rating}</h5>
                 <button class="view-details">View Details</button>

                <div class="price">
<h4>Price : $ ${price}</h4>
<i class="fa-solid fa-cart-shopping" id="add-to-cart"></i>

                </div>
               
            </div>
        
        
      
      
      `;

    ProductsContainer.appendChild(productDiv);

    let favourites= productDiv.querySelector(".fa-heart");
    favourites.addEventListener("click",()=>{
        favourites.classList.toggle("favcolor");
    })

    let cartCount = document.getElementById("cart-count");
    let shoppingCartBtn=productDiv.querySelector(".fa-cart-shopping");
    shoppingCartBtn.addEventListener("click" ,() => {
      let count = parseInt(cartCount.innerText) + 1;
      cartCount.innerText = count;
      console.log("clicked");
      cartmsg.classList.add("show");

      setTimeout(() => {
        cartmsg.classList.remove("show");
      },2000);

    })




    /* Show My Clicking Details Button */
    let detailsBtn = productDiv.querySelector(".view-details");
    detailsBtn.addEventListener("click" , () => {

      let ID=productDiv.dataset.id;
      window.location.href=`details.html?id=${ID}`

    })
    
})

 }


 function FilterProductsByCategory(category) {
 
 let filterproducts=allProducts.filter((product)=>{

    return product.category.toLowerCase().includes(category.toLowerCase()) ||
           product.title.toLowerCase().includes(category.toLowerCase());
   
 })
    RenderProducts(filterproducts);

}

let inputSearch = document.getElementById("search");

if (inputSearch) {
  inputSearch.addEventListener("input", () => {
    let search = inputSearch.value.trim();
    if (search !== "") {
      FilterProductsByCategory(search);
    } 
    else{
        RenderProducts(allProducts);
    }
  });
}

 