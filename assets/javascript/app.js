var listQ = [
    ["Bitcoin", "https://s2.coinmarketcap.com/static/img/coins/32x32/1.png"],
    ["Ethereum", "https://s2.coinmarketcap.com/static/img/coins/32x32/52.png"],
    ["Bitcoin Cash", "https://s2.coinmarketcap.com/static/img/coins/32x32/1831.png"],
    ["Tether", "https://s2.coinmarketcap.com/static/img/coins/32x32/825.png"],
    ["EOS", "https://s2.coinmarketcap.com/static/img/coins/32x32/1765.png"],
    ["Binance Coin", "https://s2.coinmarketcap.com/static/img/coins/32x32/1839.png"],
    ["Stellar", "https://s2.coinmarketcap.com/static/img/coins/32x32/512.png"],
    ["Dash", "https://s2.coinmarketcap.com/static/img/coins/32x32/131.png"],
    ["Monero", "https://s2.coinmarketcap.com/static/img/coins/32x32/328.png"],
    ["TRON", "https://s2.coinmarketcap.com/static/img/coins/32x32/1958.png"],
    ["Cardano", "https://s2.coinmarketcap.com/static/img/coins/32x32/2010.png"],
    ["Cosmos", "https://s2.coinmarketcap.com/static/img/coins/32x32/3794.png"],
    ["Tezos", "https://s2.coinmarketcap.com/static/img/coins/32x32/2011.png"],
    ["IOTA", "https://s2.coinmarketcap.com/static/img/coins/32x32/1720.png"],
    ["NEM", "https://s2.coinmarketcap.com/static/img/coins/32x32/873.png"],
    ["Ethereum Classic", "https://s2.coinmarketcap.com/static/img/coins/32x32/1321.png"],
    ["Maker", "https://s2.coinmarketcap.com/static/img/coins/32x32/1518.png"],
    ["Zcash", "https://s2.coinmarketcap.com/static/img/coins/32x32/1437.png"],
    ["Chainlink", "https://s2.coinmarketcap.com/static/img/coins/32x32/1975.png"],
    ["Bitcoin Gold", "https://s2.coinmarketcap.com/static/img/coins/32x32/2083.png"],
    ["BAT", "https://s2.coinmarketcap.com/static/img/coins/32x32/1697.png"],
    ["Dogecoin", "https://s2.coinmarketcap.com/static/img/coins/32x32/74.png"],
    ["Qtum", "https://s2.coinmarketcap.com/static/img/coins/32x32/1684.png"],
    ["OmiseGO", "https://s2.coinmarketcap.com/static/img/coins/32x32/1808.png"],
    [" Zilliqa", "https://s2.coinmarketcap.com/static/img/coins/32x32/2469.png"],
    ["Augur", "https://s2.coinmarketcap.com/static/img/coins/32x32/1104.png"],
    ["0x", "https://s2.coinmarketcap.com/static/img/coins/32x32/1896.png"],
    ["Steem", "https://s2.coinmarketcap.com/static/img/coins/32x32/1230.png"],
    ["Siacoin", "https://s2.coinmarketcap.com/static/img/coins/32x32/1042.png"],
    ["WAX", "https://s2.coinmarketcap.com/static/img/coins/32x32/2300.png"],
    ["Zcoin", "https://s2.coinmarketcap.com/static/img/coins/32x32/1414.png"],
    ["Litecoin", "https://s2.coinmarketcap.com/static/img/coins/32x32/2.png"]
   ];

   
var idInterval, count;
var QnA = {};
var totalGame = 10, maxTime = 10;
var iCorrect=0,iWrong=0, iNoAnswer=0;
// var QnA = {
//     Q: [4,5,10,11],
//     A: 5
// };
// return a random integer between a and b (including a b)
function random(a, b) {
    return  Math.floor(Math.random() * (b - a + 1)) + a;
 }


function init() {

 // pick 4 choices randomly

    QnA = {
        Q:[],
        A:0
    };
    for (var i=0; i<4; i++) {
        QnA.Q.push(random(0,listQ.length-1));
    }  
    QnA.A = QnA.Q[random(0,3)];

    
    
    var urlImg = listQ[QnA.A][1]; 
    // console.log(urlImg);
    $("#messageQ").html('<img src = ' + urlImg  + ">");
    $("#areaDisplay").text("");

    for (var i=0; i<4; i++) {
 // <div class = "choice" id ="choice-i"> string (ex. Litcoin ...) </div>       
       var str = '<div class="choice" id = "choice-' + i + '"> ' + listQ[QnA.Q[i]][0] + "</div>";
       console.log(str);
       $("#areaDisplay").append( str  ); 
    }    
    count = maxTime;
    idInterval = setInterval(function (){
       $("#second").text(--count);
       if (count < 0) {
           clearInterval(idInterval);
           alert("Time's OPut");
        //    init();
       }
    }, 1000)
}
// ===============================================================================================
// ===============================================================================================
// ===============================================================================================
$(document).ready(function() { //  Beginning of jQuery

init();

$(".choice").on("click", function () {
    var ans = parseInt($(this).attr("id").split("-").pop());
    if (QnA.Q[ans] === QnA.A) {
        alert("Good");
        clearInterval(idInterval);
        // init();
    } else {
        alert("wrong");
        clearInterval(idInterval);
        // init();
    }
 })

})
// ===============================================================================================