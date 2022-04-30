var buttonEl1 = document.querySelector('.btn1');
var buttonEl2 = document.querySelector('.btn2');
var loader = document.querySelector('.loader');


buttonEl1.addEventListener("click",function load(){
//if we click add hide class
//ialready hide class ,then remove hide class

if(loader.classList.contains("hide"))
 { 
     loader.classList.remove("hide");
 }
 else {
    loader.classList.add("hide");
 }
})