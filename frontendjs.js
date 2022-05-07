
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



var box1 = document.querySelector('.box')
var price1 = document.querySelector('.price1')
var rating1 = document.querySelector('.rating1')
var shipping1 = document.querySelector('.shipping1')
var manufactuer1 = document.querySelector('.manufactuer1')
var url1 = document.querySelector('.url1')

var box2 = document.querySelector('.box1')
var price2 = document.querySelector('.price2')
var rating2 = document.querySelector('.rating2')
var shipping2 = document.querySelector('.shipping2')
var manufactuer2 = document.querySelector('.manufactuer2')
var url2 = document.querySelector('.url2')



searchFunction.addEventListener('click', function () {
    console.log("And We're Off!")
    blueCartSearch(searchValue.value).then((data) => {




        if (dropBtn.textContent == "Walmart") {
           
            
            box1.style.backgroundImage = `url('${JSON.parse(localStorage.getItem('url/img')).image}')`
            manufactuer1.textContent = "Name: " + data[0].title
            price1.textContent = "Price: $" + data[0].price
            rating1.textContent = "Rating: " + data[0].rating + "/5"
            shipping1.textContent = "Shipping Time: " + data[0].shipping_days + " days"
            url1.textContent = "Link to Site";
            url1.href = JSON.parse(localStorage.getItem('url/img')).link
        }



        if (dropBtn1.textContent == "Walmart") {
            box2.style.backgroundImage = `url('${JSON.parse(localStorage.getItem('url/img')).image}')`
            manufactuer2.textContent = "Name: " + data[0].title
            price2.textContent = "Price: $" + data[0].price
            rating2.textContent = "Rating: " + data[0].rating + "/5"
            shipping2.textContent = "Shipping Time: " + data[0].shipping_days + " days"
            url2.textContent = "Link to Site"
            url2.href = JSON.parse(localStorage.getItem('url/img')).link
        }

     


    });

    rainforestSearch(searchValue.value).then((data) => {


        if (dropBtn.textContent == "Amazon") {
            box1.style.backgroundImage = `url('${JSON.parse(localStorage.getItem('url/img2')).image}')`
            manufactuer1.textContent = "Name: " + data[0].title
            price1.textContent = "Price: " + data[0].price
            rating1.textContent = "Rating: " + data[0].rating + "/5"
            shipping1.textContent = "Shipping: " + data[0].shipping
            url1.textContent = "Link to Site"
            url1.href = JSON.parse(localStorage.getItem('url/img2')).link
        }



        if (dropBtn1.textContent == "Amazon") {
            box2.style.backgroundImage = `url('${JSON.parse(localStorage.getItem('url/img2')).image}')`
            manufactuer2.textContent = "Name: " + data[0].title
            price2.textContent = "Price: " + data[0].price
            rating2.textContent = "Rating: " + data[0].rating + "/5"
            shipping2.textContent = "Shipping: " + data[0].shipping
            url2.textContent = "Link to Site"
            url2.href =JSON.parse(localStorage.getItem('url/img2')).link
        }
    }
    );




})


// TASKS FOR TOMORROW
// 1. data.search_results (for url and image)
// 2. Loader function, response.status


