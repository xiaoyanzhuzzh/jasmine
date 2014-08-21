//TODO: Please write code in this file.
  function CompareNumber(){

  }

  CompareNumber.prototype.compare = function(answer, input){
    var numberA = 0;
    var numberB = 0;

    for(var i = 0; i < input.length; i++){
      for(var j = 0; j < answer.length; j++){
        if(input[i] === answer[j]){

          if( i === j){
            numberA += 1;
          }
          else{
          numberB += 1;
          }
        }
      }
    }
    var text = '';
    text += numberA + 'A' + numberB + 'B';
    return text;

 };
