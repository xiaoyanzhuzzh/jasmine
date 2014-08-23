function Game(guess){

   this.guess = guess;
   this.answer;
   this.number;

}

Game.prototype.start = function(){

    this.number = 6;
    this.answer = this.guess.answer;
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

    var result = 'congratulation!';
    for(var i = 0; i < this.guess.answer.length; i++){
       if(this.guess.answer[i] !== input[i]){
          result =  false;
       }
    }
    return result;
};

Game.prototype.output = function(input){

    var JudgeResult = this.congratulation(input);

    var tipsResult = this.guess.guess(input);
    var outputResult = '';
    if(!JudgeResult){
       this.number --;
       if(this.number !=0){
          outputResult += tipsResult +
          ',please input your next answer,you only have ' + this.number +' times!';
       }
       else{
          outputResult = 'Game Over!';
       }
   }
   else{
     outputResult = JudgeResult;
  }

   return outputResult;
};
