var loader = document.querySelector('.loader')

var hide = document.querySelector('.loaderBtn')


hide.addEventListener('click', function hide(){
    

    if (loader.classList.contains('hide')){
        loader.classList.remove('hide')

    }

    else {
        loader.classList.add('hide')
    }

})

