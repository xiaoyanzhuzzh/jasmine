//TODO: Please write code in this file.
  function AnswerGenerator(math){
    this.math =  math;
  }
  AnswerGenerator.prototype.generation = function(){
    var answer = [];
    answer.push(parseInt(this.math.random()*10));
    while(answer.length != 4){
        var key = parseInt(this.math.random()*10);
        var isExist = _.contains(answer, key);
        if(!isExist) {
            answer.push(key);
        }

    }

        return answer;
   }
