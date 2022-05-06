// LOCAL STORAGE FUNCTIONS
var massContain = document.querySelector('.massContain')
var loader = document.querySelector('.loader')



function storeData(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
}

function readData(key) {
    return JSON.parse(localStorage.getItem(key));
}

const getData = async (url) => {
    loader.classList.remove('hide')
    massContain.classList.add('hide')
    const response = await fetch(url);
    console.log(response)
    if (!response.ok) {
        const message = `An error has occured: ${response.status}`;
        throw new Error(message);
    }
   loader.classList.add('hide')
   massContain.classList.remove('hide')
    const json = await response.json();
    return json;
}