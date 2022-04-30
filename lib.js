// LOCAL STORAGE FUNCTIONS
function storeData(key, value){
    localStorage.setItem(key, JSON.stringify(value));
}

function readData(key){
    return JSON.parse(localStorage.getItem(key)); 
}

