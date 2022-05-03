var loader = document.querySelector('.loader')
var hide = document.querySelector('.loaderBtn')
var searchFunction = document.querySelector('.searchFunction')


var dropBtn = document.querySelector('.firstBtn')
var dropBtn1 = document.querySelector('.secondBtn')

var dropAmazon1 = document.querySelector('.labelAmazon1')
var dropAmazon2 = document.querySelector('.labelAmazon2')


var dropWalmart1 = document.querySelector('.labelWalmart1')
var dropWalmart2 = document.querySelector('.labelWalmart2')

var pad1 = document.querySelector('.pad1')
var pad2 = document.querySelector('.pad2')

var massContain = document.querySelector('.massContain')

hide.addEventListener('click', function hide() {


    if (loader.classList.contains('hide')) {
        loader.classList.remove('hide')

    }

    else {
        loader.classList.add('hide')
    }

})

hide.addEventListener('click', function hide() {


    if (massContain.classList.contains('hide')) {
        massContain.classList.remove('hide')

    }

    else {
        massContain.classList.add('hide')
    }

})



dropAmazon1.addEventListener('click', function changeNameAma() {
    dropBtn.textContent = "Amazon"
    colorChange1();

})

dropWalmart1.addEventListener('click', function changeNameWal() {
    dropBtn.textContent = "Walmart"
    colorChange1();
})

dropAmazon2.addEventListener('click', function changeNameAma1() {
    dropBtn1.textContent = "Amazon"
    colorChange2();

})

dropWalmart2.addEventListener('click', function changeNameWal1() {
    dropBtn1.textContent = "Walmart"
    colorChange2();
})



function colorChange1() {
    if (dropBtn.textContent == "Amazon") {
        pad1.style.backgroundImage = "url(amazon.jpg)";
        pad1.style.backgroundSize = "contain"
        pad1.style.backgroundRepeat = "no-repeat"
        pad1.style.color = "white"
    }
    else if (dropBtn.textContent == "Walmart") {

        pad1.style.backgroundImage = "url(walmart.jpg)";
        pad1.style.backgroundSize = "contain"
        pad1.style.backgroundRepeat = "no-repeat"
        pad1.style.color = "white"
    }
}

function colorChange2() {
    if (dropBtn1.textContent == "Amazon") {
        pad2.style.backgroundImage = "url(amazon.jpg)";
        pad2.style.backgroundSize = "contain"
        pad2.style.backgroundRepeat = "no-repeat"
        pad2.style.color = "white"
    }
    else if (dropBtn1.textContent == "Walmart") {
        pad2.style.backgroundImage = "url(walmart.jpg)";
        pad2.style.backgroundSize = "contain"
        pad2.style.backgroundRepeat = "no-repeat"
        pad2.style.color = "white"
    }
}

window.
    onload
    = function () {
        Particles.
            init
            ({
                selector:
                    '.background',
                color: '#E9E9FF',
                connectParticles:
                    true,
                maxParticles: 150,
                



            });
    };



// searchFunction.addEventListener('click', getData)



// if var price == "", add class .hide to the display,
// Also, we are going to remove the class .hide from the loader
// else if price !=="", than we remove .hide from the display
// Add .hide to the loader


// Display= all the information about the products
// 