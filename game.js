$(document).ready(function() {
	
// This was a tough one for me, and I found some resources online and 
// i based got some of the idea to layout some of the code. Such as 
// setting up the true and false under the answers, and then calling them down below 
// to set up the if and else if loops, to see if the answer chosen is true. If it 
// isnt it would be logged as an incorrect answer. Also I layed out my code as having
// the questions in an array, and the answers in a seperate array. I saw that 
// it was easier to put them together. I definetly did not know how to do some of 
//this code otherwise. 

	var index = 0;
	var countdownTimer = {
		time : 30,
		reset: function() {
			this.time = 30;
			$('.timer').html('<h3>' + this.time + ' seconds remaining</h3>');
		},
		start: function() {
			counter = setInterval(countdownTimer.count, 1000);	
		},
		stop: function() {
			clearInterval(counter);
		},
		count: function() {
				countdownTimer.time--;
				console.log(countdownTimer.time);

			if (countdownTimer.time >= 0) {
				$('.timer').html('<h3>' + countdownTimer.time + ' seconds remaining</h3>');
			}
			else {
				index++;
				answerWrong();
				countdownTimer.reset();
				if (index < questionArray.length) {
					loadQuestion(index);
				} else {
					$(".answerchoice").hide();
					showScore();
				}
			}
		}
	};



var correct = 0;
var wrong = 0;
var q1 = {
	question : 'Who was the first president?',
	possibleAnswers : ['A. George Washington',
				 'B. John Adams',
				 'C. Bonnie Appetit',
				 'D. Cherry Ontop'],
	choices : [true, false, false, false],
	
};

var q2 = {
	question: 'Which president bought the Louisiana Purchase?',
	possibleAnswers: ['A. Andrew Jackson',
				 'B. Thomas Jefferson',
				 'C. John Quincy Adams',
				 'D. Abraham Lincoln'],
	choices : [false, true, false, false],
	
};

var q3 = {
	question : 'What is the capital of California',
	possibleAnswers : ['A. Dover',
				 'B. Sacremento',
				 'C. Helena',
				 'D. Albany'],
	choices : [false, true, false, false],
	
};
var q4 = {
	question : 'What is the longest river in the world?',
	possibleAnswers : ['A. Colorado River',
				 'B. Thames River',
				 'C. Amazon River',
				 'D. Congo River'],
	choices : [false, false, true, false],
	
};
var q5 = {
	question : 'Which country is Machu Picchu located in?',
	possibleAnswers : ['A. Columbia',
				 'B. Chile',
				 'C. Bolivia',
				 'D. Peru'],
	choices : [false, false, false, true],
	
};
var q6 = {
	question : 'Which city is located on two continents?',
	possibleAnswers : ['A. New York',
				 'B. London',
				 'C. Istanbul',
				 'D. Rome'],
	choices : [false, false, true, false],

};


var questionArray = [q1, q2, q3,q4, q5, q6];


function loadQuestion(questionSelection) {
	console.log(questionSelection);
	countdownTimer.reset();
  $(".question").html("<h3>" + questionArray[questionSelection].question + "</h3>");
  $("#buttonA").text(questionArray[questionSelection].possibleAnswers[0]).show();
  $("#buttonB").text(questionArray[questionSelection].possibleAnswers[1]).show();
  $("#buttonC").text(questionArray[questionSelection].possibleAnswers[2]).show();
  $("#buttonD").text(questionArray[questionSelection].possibleAnswers[3]).show();

}



function setup() {
	index = 0;
	$('.question').append('<button id="startButton">Start</button>');
	$('#startButton').on('click', function() {
		$(this).hide();
		countdownTimer.start();
	 	loadQuestion(index);
	});
}		

function getAnswer() {

//  nextQuestion();
	$('.answerchoice').on('click', function() {
	  console.log('alert', index);
		index++;
		console.log('click', index);
		$(".question").text('');
		$("#buttonA").text('');
		$("#buttonB").text('');
		$("#buttonC").text('');
		$("#buttonD").text('');
		loadQuestion();
	})
}

function answerCorrect() {
	correct++;
	console.log("correct");
}

function answerWrong() {
	wrong++;
	console.log("wrong");
}

function showScore() {
	
	$('.question').append("<h2><p>" + correct + " correct</p></h2>");
	$('.question').append("<h2><p>" + wrong + " incorrect</p></h2>");
	countdownTimer.stop();
	$('.timer').empty();

}

setup();
$('.answerchoice').on('click', function() {
 console.log($(this));
 if(this.id == 'buttonA') {
 	var answerChosen = 'A';
 } else if(this.id == 'buttonB') {
 	answerChosen = 'B';
 } else if (this.id == 'buttonC') {
 	answerChosen = 'C';
 } else if (this.id == 'buttonD') {
 	answerChosen = 'D';
 } 
 if ((answerChosen == 'A') && (questionArray[index].choices[0] == true)) {
 	answerCorrect();
 } else if (answerChosen == 'A') {
 	answerWrong();
 }
 if ((answerChosen == 'B') && (questionArray[index].choices[1] == true)) {
 	answerCorrect();
 } else if (answerChosen == 'B') {
 	answerWrong();
 }
if ((answerChosen == 'C') && (questionArray[index].choices[2] == true)) {
 	answerCorrect();
 } else if (answerChosen == 'C') {
 	answerWrong();
 }
if ((answerChosen == 'D') && (questionArray[index].choices[3] == true)) {
 	answerCorrect();
 } else if (answerChosen == 'D') {
 	answerWrong();
 }

 $(".question").text('');
 $("#buttonA").text('');
 $("#buttonB").text('');
 $("#buttonC").text('');
 $("#buttonD").text('');
 index++;
 if (index < questionArray.length) {
 	loadQuestion(index);
 } else {
 	$(".answerchoice").hide();
 	showScore();
 }
});

;
});

