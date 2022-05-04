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

var price = document.querySelector('.price')
// var searchField = document.querySelector('.inputBar').value

// Import and export amazon and bluecart to frontend.js
// To start, both the loader and massContain contain .hide. 
// WHEN we press the search button
// We run the api
// WHILE price == ""
// Hide stays
// WHEN price != ""
// Remove hide class from massContain



// HIDE AND SEEK. Write this function as a single function and on click event.

// Do while?
while (price == "") {
    massContain.classList.contains('hide')
    loader.classList.remove('.hide')
}

function hideLoader() {


    if (loader.classList.contains('hide')) {
        loader.classList.remove('hide')

    }

    else {
        loader.classList.add('hide')
    }

}


// Currently backwards (hideContain logic)
function hideContain() {


    if (massContain.classList.contains('hide') && price == "") {
        massContain.classList.remove('hide')

    }

    else {
        massContain.classList.add('hide')
    }


}

searchFunction.addEventListener('click', hideLoader)
searchFunction.addEventListener('click', hideContain)

// searchFunction.addEventListener('click', blueCartSearch(searchField))
// searchFunction.addEventListener('click', rainforestSearch(searchField))