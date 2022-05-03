var buttonEl1 = document.querySelector('.btn1');
var buttonEl2 = document.querySelector('.btn2');
var loader = document.querySelector('.loader');


buttonEl1.addEventListener("click",function load(){
//if we click add hide class
//if we already in the hide class ,then remove hide class

if(loader.classList.contains("hide"))
 { 
     loader.classList.remove("hide");
 }
 else {
    loader.classList.add("hide");
 }
})



dropAmazon1.addEventListener('click', function changeNameAma(){
    dropBtn.textContent = "Amazon"
    colorChange();
    
})

dropWalmart1.addEventListener('click', function changeNameWal(){
    dropBtn.textContent ="Walmart"
    colorChange();
})

dropAmazon2.addEventListener('click', function changeNameAma1(){
    dropBtn1.textContent = "Amazon"
    
})

dropWalmart2.addEventListener('click', function changeNameWal1(){
    dropBtn1.textContent ="Walmart"
})



function colorChange(){
    if (dropBtn.textContent == "Amazon"){
        pad1.style.backgroundColor = "orange";
    }
    else if (dropBtn.textContent == "Walmart"){
        pad1.style.backgroundColor = "blue"
    }
}

// searchFunction.addEventListener('click', getData)



// if var price == "", add class .hide to the display,
// Also, we are going to remove the class .hide from the loader
// else if price !=="", than we remove .hide from the display
// Add .hide to the loader


// Display= all the information about the products
// 
