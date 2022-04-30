
var resultEl = document.querySelector(".result");
const getData = async () => {
    const res = await fetch(
        "https://api.rainforestapi.com/request?api_key=D55BA8E25B2C41879508929A54C6AF9B&type=search&amazon_domain=amazon.com&search_term=memory+cards",
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json; odata=verbose",
          },
        }
      )
    const data = await res.json();
    const result = data.search_results[0].price.value;
    return result;
}

getData().then((res) => {
    resultEl.textContent = res;
})

getData();
    