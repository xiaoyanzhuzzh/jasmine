//TODO: Please write code in this file.
  function Guess(compareNumber, answerGenerator){

    this.compareNumber = compareNumber;
    this.answerGenerator = answerGenerator;
    this.answer = this.answerGenerator.generation();

  }

  Guess.prototype.guess = function (input){

        var tips = this.compareNumber.compare(this.answer, input);
        return tips;
  };
