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
var totalGame = 10, maxTime = 10, maxChoice = 6, waitingTime = 5;
var iCorrect=0,iWrong=0, iNoAnswer=0, iQuestion=0;
// var QnA = {
//     Q: [4,5,10,11],
//     A: 5
// };
// return a random integer between a and b (including a b)
function random(a, b) {
    return  Math.floor(Math.random() * (b - a + 1)) + a;
 }

 function showResult(str) {
    $("#second").text("10"); 
     $("#areaDisplay").empty();
     str = str + " " + listQ[QnA.A][0];
     $("#areaDisplay").append($("<div>").text(str));
    //  $("#areaDisplay").append($("<div>").text(listQ[QnA.A][0]));
 }

 // Click a botton to start a new game

 function clickToStart() {
     
     $("#second").text("10"); 
     $("#messageQ").text("Click to restart the game :");
     $("#areaDisplay").empty();
     
     var wins = $("<div>").text("Correct Answers : " + iCorrect);
     var losses = $("<div>").text("Wrong Answers : " + iWrong);
     var timeout = $("<div>").text("No Answers : " + iNoAnswer);
     
     $("#areaDisplay").append(wins, losses, timeout, '<button onclick="init()">Click me</button>');
     iQuestion=0;
     iCorrect=0;
     iWrong=0;
     iNoAnswer=0;
     

 }


function init() {

    if (++iQuestion > totalGame) {
        clickToStart();
        return; // 
    }  
    

    QnA = {
        Q:[],
        A:0
    };
    // for (var i=0; i<maxChoice; i++) {
    //     QnA.Q.push(random(0,listQ.length-1));
    // }  
    
    QnA.Q = [];
    do {
      var x = random(0, listQ.length-1);
      if (QnA.Q.indexOf(x)<0) {
          QnA.Q.push(x);
      }
    } while(QnA.Q.length < maxChoice);

    QnA.A = QnA.Q[random(0,maxChoice-1)];

    
    
    var urlImg = listQ[QnA.A][1]; 
    // console.log(urlImg);
    $("#qNumber").html("Question # " + iQuestion + ". ");
    $("#messageQ").html('<img src = ' + urlImg  + ">");
    $("#areaDisplay").empty();

    for (var i=0; i<maxChoice; i++) {
 // <div class = "choice" id ="choice-i"> string (ex. Litcoin ...) </div>       
       var str = '<div class="choice" id = "choice-' + i + '"> ' + listQ[QnA.Q[i]][0] + "</div>";
       console.log(str);
       $("#areaDisplay").append( str  ); 
    }    
    count = maxTime;
    idInterval = setInterval(function (){
       $("#second").text(--count);
       if (count < 0) {
           iNoAnswer++;
           clearInterval(idInterval);
        //    alert("Time's Out");
           showResult("Time Out ! The answer is :");
           setTimeout(init, waitingTime *1000)
       }
    }, 1000);

    $(".choice").on("click", function () {
        var ans = parseInt($(this).attr("id").split("-").pop());
        console.log(ans);
        if (QnA.Q[ans] === QnA.A) {
            // alert("Good");
            iCorrect++;
            clearInterval(idInterval);
            showResult("Correct. The answer is :")
        } else {
            // alert("wrong");
            iWrong++;
            clearInterval(idInterval);
            showResult("Wrong answer! The correct answer is :");
        }
        setTimeout(init, waitingTime *1000)
     })



}
// ===============================================================================================
// ===============================================================================================
// ===============================================================================================
$(document).ready(function() { //  Beginning of jQuery

    init();

// $(".choice").on("click", function () {
//     var ans = parseInt($(this).attr("id").split("-").pop());
//     console.log(ans);
//     if (QnA.Q[ans] === QnA.A) {
//         alert("Good");
//         clearInterval(idInterval);
        
//         // init();
//     } else {
//         alert("wrong");
//         clearInterval(idInterval);
        
//         // init();
//     }
//  })

 

})
// ===============================================================================================