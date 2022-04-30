var search_field = $(".container");

var url = "https://api.rainforestapi.com/request?";
var api_key = "D55BA8E25B2C41879508929A54C6AF9B";
var search_term = "dyson+air+purifier+TP02";
var sort = "best_match";
var brand = "facets=brand=dyson";
var condition = "new";
var customer_zipcode = "92152";
var output = "json";
var jsonRaw;

//const getData = async () => {
//    const res = await fetch(
//        `${url}api_key=${api_key}&type=search&amazon_domain=amazon.com&search_term=${search_term}&condition=${condition}&output=${output}`,
//        {
//          headers: {
//            "Content-Type": "application/json",
//            Accept: "application/json; odata=verbose",
//          },
//        }
//      )
//    const data = await res.json();
//    console.log(data);
//    const result = data.search_results[0].price.value;
//    const credits = await data.request_info.credits_remaining
//    if(credits == 0){
//        console.error(`Trial account ended. Credit count [${credits}]`)
//    }else{
//        console.log(`You still have credits!. Credit count [${credits}]`)
//    }

    // TODO: TEST ONLY use to not run credits
    jsonRaw = readData("amazontestdata");
    amazonResult = jsonRaw.search_results;
    // console.log(amazonResult);

    //brand = brand.split("=").pop();
    //.val(search.replaceAll("+", " ")); // sample search value
    //$(".btn-secondary").text("Amazon"); // sample dropdown value

    // loop thru search amazonResult
    var match_list = [];
    var amazonitem;
    for (let i = 0; i < amazonResult; i++) {
        console.log(amazonResult[i]);

        // TODO: Find common variable to retrieve specific amazonitem from search
        // TODO: Option show title and have user pick from list
        let title = amazonResult[i].product.title;
        match_list.push(title);

        // Item found from search amazonResult
        
    }
    amazonitem = amazonResult[3]; // TODO: filter amazonResult to one
    // Show amazonitem found in search result
    //console.log("Amazon Item: " + amazonitem);
    var amazonprice = amazonitem.price.raw;
    var amazondescription = amazonitem.title;
    var amazonimage = amazonitem.image;
    var amazonrating = amazonitem.rating;
    var amazonshipping = amazonitem.delivery.price.value;
     //console.log(`${amazonimage}`);

    // Add values to page
    var amazon_image = $("div.box1"); // TODO: Attach image only to second div.box
    amazon_image.css("background-image", `url("${amazonimage}")`);

    var amazontemplate = `<div class="pad1">
                    <div>Price: ${amazonprice}</div>
                    <div>Rating: ${amazonrating}</div>
                    <div>Shipping: ${amazonshipping}</div>
                    <div>Manufactuer: ${brand}</div>
                    </div>`;

    $("div.pad1").replaceWith(amazontemplate);




  //  return result;
//}

//getData().then((res) => {
//)

//getData();