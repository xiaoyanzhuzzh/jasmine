//TODO: Please write code in this file.
  function AnswerGenerator(){

  }
  AnswerGenerator.prototype.generation = function(){
    var answer = [];
    answer.push(parseInt(Math.random()*10));
    while(answer.length != 4){
        var key = parseInt(Math.random()*10);
        var isExist = _.contains(answer, key);
        if(!isExist) {
            answer.push(key);
        }

    }
        console.log(answer);
        return answer;
   }
