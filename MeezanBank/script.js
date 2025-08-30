 let date=document.getElementById("Date"); 
 

let now=new Date();


    let FormattedDate=now.toLocaleDateString("ur-Pk",{
    dateStyle:"full"
})
let Time=now.toLocaleTimeString("ur-Pk",
    {
        timeStyle:"medium"
    }
)
date.innerHTML=`${FormattedDate}  ${Time}`;


let para=document.querySelectorAll(".animatepara");

para.addEventListener("mouseover",()=>{
para.style.animationPlayState="paused"
})
para.addEventListener("mouseout",()=>{
    para.style.animationPlayState="running"
    
})
/* Image Slider Functionality */


/* let imageSlider = document.querySelector(".image-slider");
let imagesSlide = document.querySelectorAll(".slide");

let slideIndex = 0;

function showSlide(index) {
  
    imagesSlide.forEach((img, i) => {
        img.style.display = i === index ? "block" : "none";
    });
}
showSlide(slideIndex);
setInterval(nextSlide, 3000);

function nextSlide() {
    slideIndex = (slideIndex + 1) % imagesSlide.length;
    showSlide(slideIndex);
} */


/* let imageslider=document.querySelector(".image-slider");
let imagesSlide=document.querySelectorAll(".slide");

let slideindex=0;

function ShowSlide(index){
    if(imageslider.length===0)return
imagesSlide.forEach((img,i)=>{
img.style.display =i=== index ? "block" :"none";
})
}
ShowSlide(slideindex)

function NextSlide(){
    slideindex=(slideindex+1) % imagesSlide.length;
    ShowSlide(slideindex)
}

setInterval(NextSlide, 3000) */

/* SideBar Functionality */
 let sidebar=document.querySelector(".sidebar");
 let sidebarlist=document.querySelector(".Sidebarlist");
 
 window.addEventListener("scroll",()=>{
    if(scrollY>300){

       sidebar.style.display="none"
       
   
       
       
        
       
    }
    else{
        sidebar.style.display="block"
      
        
    }
}) 

sidebar.addEventListener("mouseover",()=>{
    sidebar.classList.add("show");
})
sidebar.addEventListener("mouseout",()=>{
   
sidebar.classList.remove("show")
    

})











