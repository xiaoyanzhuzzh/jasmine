$(document).ready(function(){

  var compareNumber = new CompareNumber();
  var answerGenerator = new AnswerGenerator();

  var guess = new Guess(compareNumber, answerGenerator);
  var game = new Game(guess);


  $('.startButton').on('click',function(){
    var result = game.start();
    alert(result);
    console.log(game.answer);

  });

  $('.submitButton').on('click',function(){
    var inputNumber = $('#inputNumber').val();
    var input = [];
    for(var i = 0; i < inputNumber.split('').length; i++){
      input.push(parseInt(inputNumber.split('')[i]));
    }

    var yesA = game.judgeInputForm(input);
    var yesB = game.judgeInputLength(input);
    var yesC = game.judgeInputNumber(input);

    if(yesA && yesB && yesC){
       var result = game.output(input);

       $('#times').text(game.number);
       alert(result);
      }
    else{
      alert('Please check your input number!')
    }

  });

});
