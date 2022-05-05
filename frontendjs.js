
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
        pad1.style.backgroundPosition = "0px 100px";
        pad1.style.backgroundColor = "#F56600";
    }
    else if (dropBtn.textContent == "Walmart") {

        pad1.style.backgroundImage = "url(walmart.jpg)";
        pad1.style.backgroundSize = "contain"
        pad1.style.backgroundRepeat = "no-repeat"
        pad1.style.color = "white"
        pad1.style.backgroundPosition = "0px 100px";
        pad1.style.backgroundColor = "#041E41";
    }
}

function colorChange2() {
    if (dropBtn1.textContent == "Amazon") {
        pad2.style.backgroundImage = "url(amazon.jpg)";
        pad2.style.backgroundSize = "contain"
        pad2.style.backgroundRepeat = "no-repeat"
        pad2.style.color = "white"
        pad2.style.backgroundPosition = "0px 100px";
        pad2.style.backgroundColor = "#F56600";
    }
    else if (dropBtn1.textContent == "Walmart") {
        pad2.style.backgroundImage = "url(walmart.jpg)";
        pad2.style.backgroundSize = "contain"
        pad2.style.backgroundRepeat = "no-repeat"
        pad2.style.color = "white"
        pad2.style.backgroundPosition = "0px 100px";
        pad2.style.backgroundColor = "#041E41";
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


var searchValue = document.querySelector('.inputBar')


// Import and export amazon and bluecart to frontend.js
// To start, both the loader and massContain contain .hide. 
// WHEN we press the search button
// We run the api
// WHILE price == ""
// Hide stays for massContain
// WHEN price != ""
// Remove hide class from massContain
// if massContain contains the class 'show', 
// THAN loader adds hide class



// HIDE AND SEEK. Write this function as a single function and on click event for searchFunction button

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

// searchFunction.addEventListener('click', hideLoader)
// searchFunction.addEventListener('click', hideContain)

// searchFunction.addEventListener('click', blueCartSearch)
// searchFunction.addEventListener('click', rainforestSearch(searchMonkey))
var price = document.querySelector('.price')
var rating = document.querySelector('.rating')
var shipping = document.querySelector('.shipping')
var manufactuer = document.querySelector('.manufactuer')
var url = document.querySelector('.url')

searchFunction.addEventListener('click', function () {
    console.log(searchValue.value)
    // blueCartSearch(searchValue.value).then((data) => {

    //     price.textContent = data[0].price
    //     rating.textContent = data[0].rating

    // });
    rainforestSearch(searchValue.value).then((data) => {
        price.textContent = data[0].price
    });

})
