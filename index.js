"use strict"


let btn = document.getElementsByClassName("btn");

btn[0].addEventListener("click",function(){
    productImg.src = "img/image1.png";
    btn[0].classList.add("active");
    btn[1].classList.remove("active");
    btn[2].classList.remove("active");


    
})


btn[1].addEventListener("click",function(){
    productImg.src = "img/image2.png";
    btn[1].classList.add("active");
    btn[0].classList.remove("active");
    btn[2].classList.remove("active");

   
})


btn[2].addEventListener("click",function(){
    productImg.src = "img/image3.png";
    btn[2].classList.add("active");
    btn[0].classList.remove("active");
    btn[1].classList.remove("active");
})

