var search_field = $(".container")

var url = 'https://api.bluecartapi.com/request?';
var api_key = 'EBEB04EC9E944C168B8AFB1BAB02E657';
var search = 'dyson+air+purifier+TP02';
var sort = 'best_match';
var brand = 'facets=brand=dyson';
var condition = 'new';
var customer_zipcode = '92152';
var output = 'json';
var jsonRaw;

// sample curl call from API provider
// "https://api.bluecartapi.com/request?api_key=EBEB04EC9E944C168B8AFB1BAB02E657&type=search&search_term=glass+cutter&sort_by=best_match&condition=new&output=json"

// TODO: Uncomment fetch call for production use
// // fecth call to retrieve product items
// fetch(`${url}api_key=${api_key}&type=search&search_term=${search}&sort_by=${sort}&condition=${condition}&output=${output}`)
// .then(response =>{
//     return response.json();
// }).then((data) => {
//     console.log(data);
//     jsonRaw = data;
    
//     // check for remmaining credits
//     var credits = jsonRaw.request_info.credits_remaining
//     if (credits == 0){
//         console.error(`Trial account ended. Credits count [${credits}]`)
//     }
// });

// TODO: TEST ONLY use to not run credits
jsonRaw = readData('testdata');
results = jsonRaw.search_results;
// console.log(results);

brand = brand.split('=').pop();
search_field.val(search.replaceAll('+', ' ')) // sample search value
$(".btn-secondary").text('Walmart') // sample dropdown value

// loop thru search results
var match_list = [];
var item;
for (let i = 0; i < results.length; i++) {
    // console.log(results[i]);

    // TODO: Find common variable to retrieve specific item from search
    // TODO: Option show title and have user pick from list
    let title = results[i].product.title;
    match_list.push(title);

    // Item found from search results
    item = results[3]; // TODO: filter results to one
    
}

// Show item found in search result
console.log(item);
var price = item.offers.primary.price;
var list_price = item.offers.primary.list_price;
var seller = item.offers.primary.seller.name;
var store_pickup = item.fulfillment.pickup;
var shipping_days = item.fulfillment.shipping_days;
var description = item.product.description;
var image = item.product.main_image
var rating = item.product.rating


// console.log(`${seller} | ${store_pickup} | ${shipping_days}`);

// Add values to page
var walmart_image = $("div.box");                               // TODO: Attach image only to second div.box 
walmart_image.css("background-image", `url("${image}")`);


var template = `<div class="pad2">
                <div>Price: ${price}</div>
                <div>Rating: ${rating}</div>
                <div>Shipping: ${shipping_days}</div>
                <div>Manufactuer: ${brand}</div>
                </div>`


$( "div.pad2" ).replaceWith(template);





