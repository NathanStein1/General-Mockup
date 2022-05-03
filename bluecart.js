

var searchParams = {
    url: "https://api.bluecartapi.com/request?",
    api_key: "EBEB04EC9E944C168B8AFB1BAB02E657",
    search: "dyson+air+purifier+TP02",
    sort: "best_match",
    brand: "facets=brand=dyson",
    condition: "new",
    customer_zipcode: "92152",
    output: "json"
}

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
var manufactuer;
var match_list = [];


function blueCartSearch(searchField) {
    var search_field = $(".container");
    jsonRaw = readData("testdata");
    results = jsonRaw.search_results;

    manufactuer = searchParams.brand.split("=").pop();
    search_field.val(search_field.replaceAll("+", " ")); // sample search value
    // $(".btn-secondary").text("Walmart"); // sample dropdown value

    for (let i = 0; i < results.length; i++) {
        if (i == 10) {
            break;
        }

        // TODO: Find common variable to retrieve specific item from search
        // TODO: Option show title and have user pick from list
        let title = results[i].product.title;
        let price = results[i].offers.primary.price;
        let list_price = results[i].offers.primary.list_price;
        let seller = results[i].offers.primary.seller.name;
        let store_pickup = results[i].fulfillment.pickup;
        let shipping_days = results[i].fulfillment.shipping_days;
        let description = results[i].product.description;
        let image = results[i].product.main_image;
        let rating = results[i].product.rating;
        let match = {
            title: title,
            price: price,
            list_price: list_price,
            seller: seller,
            store_pickup: store_pickup,
            shipping_days: shipping_days,
            description: description,
            image: image,
            rating: rating
        }
        match_list.push(match);

        // Item found from search results
        return results[3]; // TODO: filter results to one - TEST ONLY
    }
}

var item = blueCartSearch(searchParams.search);
console.log(item);

// Add pull-down selector for match results
var companyTitle = $($("div.companyTitle")[1]);
var bluecartmatch = $("#bluecartmatch");
// $("#bluecartmatch").remove("<option>Select closest match</option>");

for (let m = 0; m < match_list.length; m++) {
    const match = match_list[m];
    // console.log(match[m]);
    optionText = match.title;
    optionValue = `match[${m}]`;

    // bluecartmatch.append(
    //     `<option value="${optionValue}">${optionText}</option>`
    // );
    // companyTitle.append(
    // $('<option></option>').val(match.title).html(match)
    // );
    // if (selectobject.options[i].value == 'Select closest match') {
    //     selectobject.remove(i);
    // }

}


// var companyTitleTemplate = `
//         <div class="companyTitle">
//         Walmart
//         <select name="matchlist" id="matchlist">
//         <option>${}</option>
//         </select>
//         <br><br>
//         </div>
// `

// companyTitle.append('<br/>').append(
//     $(document.createElement('label')).prop({
//         for: 'pets'
//     }).html('Select closest match: ')
// ).append(
//     $(document.createElement('select')).prop({
//         id: 'pets',
//         name: 'pets'
//     })
// )




// Show item found in search result
// console.log(item);
var price = item.offers.primary.price;
var list_price = item.offers.primary.list_price;
var seller = item.offers.primary.seller.name;
var store_pickup = item.fulfillment.pickup;
var shipping_days = item.fulfillment.shipping_days;
var description = item.product.description;
var image = item.product.main_image;
var rating = item.product.rating;

// console.log(`${seller} | ${store_pickup} | ${shipping_days}`);

// Add values to page
var walmart_image = $($("div.box")[1]); // Attach image only to second div.box
walmart_image.css("background-image", `url("${image}")`);

var template = `<div class="pad2">
                <div>Price: ${price}</div>
                <div>Rating: ${rating}</div>
                <div>Shipping: ${shipping_days}</div>
                <div>Manufactuer: ${manufactuer}</div>
                </div>`;

$("div.pad2").replaceWith(template);

