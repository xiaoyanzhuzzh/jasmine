//TODO: Please write code in this file.
  function Guess(compareNumber, answerGenerator){

    this.compareNumber = compareNumber;
    this.answerGenerator = answerGenerator;

  }
  Guess.prototype.guess = function (input){
        var answer = this.answerGenerator.generation();
      
        var tips = this.compareNumber.compare(input, answer);

        return tips;
  }
