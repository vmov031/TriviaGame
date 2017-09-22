$(document).ready(function() {

// requirements: countdown timer, timeout
// $(document).ready(function() 

// establish start button that collects user info to begin game
var count = 30;
var correct = 0;
var wrong = 0;

$("#start").on("click", function(){
	count--;
};


// setTimeout(thirtySeconds, 1000 * 30);

// function thirtySeconds() {

// 	 $("#timer").append("<h2>Time's Up!</h2>");
// 	 $("#timer").html("<h2>Time's up!</h2>");
// };


// var questions = [, "What is the official language of the United States", "Where are cats from?", "In what year was Karl Marx's Das Kapital written?"];
// var answers = [["Chow Hound", "Earth Angel", "Man's Best Friend", "All of the Above"], ["English","Spanish","French","None of the above"], ["A galaxy far away", "Glendale, CA", "Fukuoka Prefecture, Japan", "Istanbul, Turkey"], ["1984","1867","1789","1922"]];
// var correctAnswers = ["All of the Above", "None of the above", "A galaxy far away", "1867"];

var q1 = {
	question : "What is an alternative name for dogs?",
	options : ["Chow Hound", "Earth Angel", "Man's Best Friend", "All of the above"],
	correct : "All of the above"

};

var q2 = {
	question : "What is the official language of the United States?",
	options : ["Spanish", "French", "English", "An official language for the US is not federally recognized"],
	correct : "An official language for the US is not federally recognized"
}

$(".question1").html("<h3>" + q1.question + "<h3>");
$(".button1").html("<p>" + q1.options[0] + "</p>");
$(".button2").html("<p>" + q1.options[1] + "</p>");
$(".button3").html("<p>" + q1.options[2] + "</p>");
$(".button4").html("<p>" + q1.options[3] + "</p>");


$(".question2").html("<h3>" + q2.question + "<h3>");
$("#button1").html("<p>" + q2.options[0] + "</p>");
$("#button2").html("<p>" + q2.options[1] + "</p>");
$("#button3").html("<p>" + q2.options[2] + "</p>");
$("#button4").html("<p>" + q2.options[3] + "</p>");
});


// NOTHING WORKS! 

// // // requirements: countdown timer, timeout
// // // $(document).ready(function() 

// // // establish start button that collects user info to begin game
// // window.onload = function() {
// // 	$("#start").on("click", timer.start);
// // };

// // var intervalId;
// // var clockRunning = false;
// // var timer = {

// // 	time: 30,

// // 	reset: function() {
// // 		timer.time = 3000;

// // 		$("#timer").html("00:30");
// // 	},
// // 	start: function() {
// // 		if (!clockRunning) {
// // 			intervalId = setInterval(stopwatch.countdown, 1000);
// // 			clockRunning = true;
// // 		}
// // 	},

// // }

