describe('generateAnswer', function () {
    var answer;

    beforeEach(function () {

    });

    it('Length should be four',function(){
      var answerGenerator = new AnswerGenerator();
      var answer = answerGenerator.generation();
      var result = false;
      if(answer.length === 4){
        result = true;
      }

  expect(result).toBe(true);

    });

    it ('Answer should be number',function(){
      var answerGenerator = new AnswerGenerator();
      var answer = answerGenerator.generation();
      var result = true;
      for (var i = 0; i < answer.length; i++){
        if(isNaN(answer[i])){
          result = false;
        }
      }
expect(result).toBe(true);

    });

    it ('Answer should not repeat',function(){

          var answerGenerator = new AnswerGenerator();
          var answer = answerGenerator.generation();
          var result;
          for(var i = 0; i < answer.length; i++){
            for(var j = i+1; j < answer.length; j++){
              if(answer[i] === answer[j]){
                result = false;
              }
              result = true;
            }
          }

         expect(result).toBe(true);

    });
    it ('Answer should be random',function(){
      var answerGenerator = new AnswerGenerator();
      var answer1 = answerGenerator.generation();
      var answer2 = answerGenerator.generation();
      var result = true;
      for(var i = 0; i < answer1.length; i++){
        for(var j = 0; j < answer2.length; j++){
          if(answer1[i] !== answer2[j]){
            result = false;
            break;
          }
        }
      }
  expect(result).toBe(true);
    });
});
