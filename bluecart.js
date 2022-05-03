// parameter values for the API

var sp = {
    url: "https://api.bluecartapi.com/request?",
    api_key: "EBEB04EC9E944C168B8AFB1BAB02E657",
    search: "dyson+air+purifier+TP02",
    sort: "best_match",
    condition: "new",
    customer_zipcode: "92152",
    output: "json"
}

// sample curl call from API provider
// "https://api.bluecartapi.com/request?api_key=EBEB04EC9E944C168B8AFB1BAB02E657&type=search&search_term=glass+cutter&sort_by=best_match&condition=new&output=json"
// fetch call to retrieve product items
async function blueCartSearch(searchField) {
    var match_list = [];
    var queryURL = `${sp.url}api_key=${sp.api_key}&type=search&search_term=${searchField}&sort_by=${sp.sort}&condition=${sp.condition}&output=${sp.output}`
    if (searchField == null) {
        searchField = sp.search;
    }
    await getData(queryURL).then(data => {
        // console.log(data);
        // check for remmaining credits
        var credits = data.request_info.credits_remaining
        if (credits == 0) {
            console.error(`Trial account ended. Credits count [${credits}]`)
        } else {
            console.log(`Current credits count [${credits}]`)
        }
        // console.log(data.search_results);
        for (let i = 0; i < data.search_results.length; i++) {
            if (i == 10) {
                break;
            }
            let result = data.search_results[i];

            // Find common variable to retrieve specific item from search
            // Option show title and have user pick from list
            // Item found from search results
            match = {
                title: result.product.title,
                price: result.offers.primary.price,
                list_price: result.offers.primary.list_price,
                seller: result.offers.primary.seller.name,
                store_pickup: result.fulfillment.pickup,
                shipping_days: result.fulfillment.shipping_days,
                description: result.product.description,
                image: result.product.main_image,
                rating: result.product.rating
            }
            match_list.push(match);
        }
        
    }).catch(err => {
        console.error(err);
    });
    return match_list
}

// TODO: Use function blueCartSearch() see sample call
// blueCartSearch("ninja+air+fryer").then((data) => {
//     var item_list = data;
//     console.log(item_list);
// });

