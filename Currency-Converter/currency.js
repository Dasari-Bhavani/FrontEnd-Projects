// const BASE_URL ="https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies";
const dropdowns = document.querySelectorAll(".dropdown select");
// for (code in countryList)
// {
//     console.log(code,countryList[code]);//USD:US
// }
const apiKey="98ac23ab05a40d651f3ab465";
const api = `https://v6.exchangerate-api.com/v6/${apiKey}/latest/USD`;
console.log(api);
for (let select of dropdowns) {
    for (currcode in countryList) {
        //to add new options in from-list or to-list(2 dropdowns)
        let newOption = document.createElement("option");
        newOption.innerText = currcode;
        newOption.value = currcode;
        //selected items first display
        if (select.name === "from" && currcode === "USD") {
            newOption.selected = "selected";
        }
        if (select.name === "to" && currcode === "INR") {
            newOption.selected = "selected";
        }
        select.append(newOption);
    }
    //after entering all country options
    //we select dropdown boxes,if select changes then do funcs
    select.addEventListener("change", (evt) => {
        updateFlag(evt.target);//change flag based on changed country
        // console.log(evt.target);//target=obj(select of from or to according to when they change)
    });
}

const updateFlag = (element) => {
    // console.log(element);//entire select div from/to is passed
    let currCode = element.value;//that we choosed
    // console.log(currCode);
    let countryCode = countryList[currCode];//US IN
    let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
    //we have img above the select div(go for parent)
    let img = element.parentElement.querySelector("img");
    img.src = newSrc;
};

const btn = document.querySelector("button");
const amt = document.querySelector(".amount input");
console.log(amt.value);
const fromCurr = document.querySelector(".from select");
const toCurr= document.querySelector(".to select");
const result=document.querySelector("#result");

let convertCurr = (evt) => {
    evt.preventDefault();
    let amt_val = amt.value;
    if (amt_val === "")
        alert("Enter amount!");
    else if (amt_val < 1) {
        alert("Enter valid amount!");
        // amt_val = "1";
        // amt.value="1";
    }
    else {
        // alert("okay!");
        fetch(api)
        .then((resp) => resp.json())
        .then(data => {
            let fromExchangeRate=data.conversion_rates[fromCurr.value];
            let toExchangeRate=data.conversion_rates[toCurr.value];
            const convertedAmt=(amt.value/fromExchangeRate)* toExchangeRate;
            result.innerText=`${amt.value} ${fromCurr.value}=${convertedAmt.toFixed(2)} ${toCurr.value}`;
        });
    }

};
btn.addEventListener("click",convertCurr);
window.addEventListener("load",convertCurr);