function Game(guess){

   this.guess = guess;
   this.number;

}

Game.prototype.start = function(){

    this.number = 6;
    return 'Start! Please input your number,you only have 6 times!';
};

Game.prototype.judgeInputForm = function(input){

    for (var i = 0; i < input.length; i++){
      for (var j = i+1; j < input.length; j++){
        if(input[i] !== input[j]){
          return true;
        }
        return false;
      }
    }
};

Game.prototype.judgeInputLength = function(input){

    if(input.length === this.guess.answer.length){
      return true;
    }
    return false;
};

Game.prototype.judgeInputNumber = function(input){

    var result = true;
    for (var i = 0; i < input.length; i++){
      if(isNaN(input[i])){
        return result = false;
        break;
      }
    }
    return result;
};

Game.prototype.congratulation = function(input){

    var result = false;
    for(var i = 0; i < this.guess.answer.length; i++){
       if(this.guess.answer[i] === input[i]){
          result = 'congratulation!';
       }
    }
    return result;
};

Game.prototype.output = function(input){

    while(this.number != 0){
    for(var i = 0; i < input.length; i++){
        if(this.guess.answer[i] !== input[i]){
           var tips = this.guess.compareNumber.compare(this.guess.answer, input);
           this.number -= 1;
        }
    }
  }
};
