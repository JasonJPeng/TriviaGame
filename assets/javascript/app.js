   
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
     $("#areaDisplay").append($('<div id=answer>').text(str));
    //  $("#areaDisplay").append($("<div>").text(listQ[QnA.A][0]));
 }

 // Click a botton to start a new game

 function clickToStart() {
     
     $("#second").text("10"); 
     $("#messageQ").text("Click to start again :");
     $("#areaDisplay").empty();
     
     var wins = $("<div>").text("Correct Answers : " + iCorrect);
     var losses = $("<div>").text("Wrong Answers : " + iWrong);
     var timeout = $("<div>").text("No Answers : " + iNoAnswer);
     var btn = $('<button type="button" class="btn btn-primary btn-lg btn-block" onclick="init()">').text("Start a New Quiz");
    //  <button type="button" class="btn btn-primary btn-lg">Large button</button>
     
     $("#areaDisplay").append(wins, losses, timeout, btn);
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
       var str = '<div class="choice" id = "choice-' + i + '"> ' + listQ[QnA.Q[i]][0] + "</div><div>  <div>";
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