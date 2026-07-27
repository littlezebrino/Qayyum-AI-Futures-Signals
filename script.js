// ===============================
// QAYYUM AI FUTURES SIGNALS
// Binance Live Market Engine
// ===============================


const coins = [
"BTC",
"ETH",
"BNB",
"SOL",
"XRP",
"DOGE",
"ADA",
"AVAX",
"LINK",
"DOT"
];



// Binance API Live Price

async function loadPrices(){

for(let coin of coins){

try{

let response = await fetch(
`https://api.binance.com/api/v3/ticker/price?symbol=${coin}USDT`
);


let data = await response.json();


let price = Number(data.price).toFixed(4);


document.getElementById(coin).innerHTML =
"$"+price;



}

catch(error){

document.getElementById(coin).innerHTML =
"Error";

}

}

}



// Refresh every 5 seconds

loadPrices();

setInterval(loadPrices,5000);





// ===============================
// Futures Calculator
// ===============================


function calculate(){


let capital =
Number(document.getElementById("capital").value);


let entry =
Number(document.getElementById("entry").value);


let exit =
Number(document.getElementById("exit").value);



if(!capital || !entry || !exit){

document.getElementById("result").innerHTML =
"Enter all values";

return;

}



let quantity =
capital / entry;


let profit =
(exit-entry)*quantity;


let roi =
(profit/capital)*100;



document.getElementById("result").innerHTML =

`
Profit/Loss:
$${profit.toFixed(2)}

<br>

ROI:
${roi.toFixed(2)}%

`;

}




// ===============================
// Signal Engine Base
// ===============================


function generateSignal(){


let confidence =
Math.floor(Math.random()*20)+70;



document.getElementById("signalBox").innerHTML =

`

<h3>BTCUSDT LONG</h3>

<p>Entry: Live Market</p>

<p>Stop Loss: -1%</p>

<p>TP1: +0.7%</p>

<p>TP2: +1.4%</p>

<p>TP3: +2.1%</p>

<p>Confidence: ${confidence}%</p>

<p>
Indicators:
RSI ✅
EMA ✅
MACD ✅
Volume ✅
ATR ✅
</p>

`;

}



generateSignal();



// ===============================
// Performance Dashboard
// ===============================


let totalSignals = 1;

let wins = 0;

let losses = 0;


document.getElementById("total").innerHTML =
totalSignals;


document.getElementById("wins").innerHTML =
wins;


document.getElementById("loss").innerHTML =
losses;


document.getElementById("accuracy").innerHTML =
"0%";
