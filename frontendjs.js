var loader = document.querySelector('.loader')
var hide = document.querySelector('.loaderBtn')
var searchFunction=document.querySelector('.searchFunction')


var dropBtn = document.querySelector('.firstBtn')
var dropBtn1 = document.querySelector('.secondBtn')

var dropAmazon1 = document.querySelector('.labelAmazon1')
var dropAmazon2 = document.querySelector('.labelAmazon2')


var dropWalmart1 = document.querySelector('.labelWalmart1')
var dropWalmart2 = document.querySelector('.labelWalmart2')

var pad1 = document.querySelector('.pad1')
var pad2 = document.querySelector('.pad2')


hide.addEventListener('click', function hide(){
    

    if (loader.classList.contains('hide')){
        loader.classList.remove('hide')

    }

    else {
        loader.classList.add('hide')
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