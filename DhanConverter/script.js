//CONVERT AND DISPLAY
function display() {
  let values = {
    from: document.getElementById("from").value,
    to: document.getElementById("to").value,
    paisa: document.getElementById("amountToConv").value,
  };

  var requestURL = `https://api.exchangerate.host/convert?from=${values.from}&to=${values.to}&amount=${values.paisa}&places=2`;
  var request = new XMLHttpRequest();
  request.open("GET", requestURL);
  request.responseType = "json";
  request.send();
  request.onload = function () {
    var response = request.response;
    document.getElementById("lblResult").innerHTML =
      response.result + " " + response.query.to;
  };
}
//GET USER LOCATION FOR DEFAULT
// const ipdata = {
//   key: "540f7c5f9cf2fd0b749a73a4595a82d8c2a6f5fd458c1da351c8becb",
//   baseurl: "https://api.ipdata.co",
//   currency: function(){
//     return `${this.baseurl}/currency?api-key=${this.key}`;
// },
// };


//GET CURRENCY LISTS
var requestURL = "https://api.exchangerate.host/symbols";
var request = new XMLHttpRequest();
request.open("GET", requestURL);
request.responseType = "json";
request.send();

request.onload = function () {
  var response = request.response;
  for (const code in response.symbols) {
    document.querySelector(
      "#from"
    ).innerHTML += `<option value="${code}">${code} </option>`;
    
  }
  for (const code in response.symbols) {
    // console.log(code);

    document.querySelector(
      "#to"
    ).innerHTML += `<option value="${code}">${code}</option>`;
  }
};

// async function getUserCurrency(){
//   const res = await fetch(ipdata.currency());
//   const userCurrency = await res.json();
//     //console.log(userCurrency);
//     console.log(userCurrency.code);
//     document.getElementById("#to") = `<option value="${userCurrency.code}" selected>${userCurrency.code}</option>`; 
// }
// getUserCurrency();