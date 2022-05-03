// LOCAL STORAGE FUNCTIONS
function storeData(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
}

function readData(key) {
    return JSON.parse(localStorage.getItem(key));
}

const getData = async (url) => {
    const response = await fetch(url);
    if (!response.ok) {
        const message = `An error has occured: ${response.status}`;
        throw new Error(message);
    }
    const json = await response.json();
    return json;
}