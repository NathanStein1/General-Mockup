// parameter values for the API
var rain_sp = {
  url: "https://api.rainforestapi.com/request?",
  api_key: "7AB267DE1D7F401BB8BD2C88F7D741F6",
  search_term: "dyson+air+purifier+TP02",//temp var
  condition: "new",
  sort: "feature",
  output: "json"
}

// fetch call to retrieve product items
async function rainforestSearch(searchField) {
  console.log(searchField)
  let match_list = [];
  let queryURL = `${rain_sp.url}api_key=${rain_sp.api_key}&type=search&amazon_domain=amazon.com&search_term=${searchField}&condition=${rain_sp.condition}&sort=${rain_sp.sort}&output=${rain_sp.output}`
  //debug
  if (searchField == null) {
      searchField = sp.search_term;
  }
  //end debug
  await getData(queryURL).then(data => {
      // console.log(data);
      // check for remmaining credits
      let credits = data.request_info.credits_remaining
      if (credits == 0) {
          console.error(`Trial account ended. Credits count [${credits}]`)
      } else {
          console.log(`Current credits count [${credits}]`)
      }
      console.log(data.search_results);
      localStorage.setItem('url/img2', JSON.stringify({image: data.search_results[0].image, link: data.search_results[0].link}))
      for (let i = 0; i < data.search_results.length; i++) {
          if (i == 10) {
              break;
          }
          let result = data.search_results[i];

          // Find common variable to retrieve specific item from search
          // Option show title and have user pick from list
          // Item found from search results
         function check(item){
          if (item){
            var checkedItem = item.replace('?', '');
          }else{
            var checkedItem = "No DATA";
          }
          return checkedItem;
         }
          match = {
              title: result.title,
              price: check(result.price?.raw),
              isprime: result.is_prime,
              shipping: check(result.delivery?.price.raw),
              image: result.rating,
              rating: result.rating,
              link: result.link
          }
          match_list.push(match);
      }
      
  }).catch(err => {
      console.error(err);
  });
  console.log(match_list)
  return match_list
}

// TODO: Use function blueCartSearch() see sample call
// rainforestSearch("ninja+air+fryer").then((data) => {
//     var item_list = data;
//     console.log(item_list);
// });

// rainforestSearch();