describe('guess', function () {

    var input;

    beforeEach(function () {
     input = ['5','2','3','4'];
    });

    it ('should be correct direction',function(){

      var  answerGenerator = new AnswerGenerator();
      var answer = ['1','2','3','4'];
      spyOn(answerGenerator, 'generation').and.returnValue(answer);

      var compareNumber = new CompareNumber();
      spyOn(compareNumber, "compare");

      var guess = new Guess(compareNumber, answerGenerator);
      var tips = guess.guess(input);
          tips = guess.guess(input);

      expect(tips).toBe(finalTips);

      expect(compareNumber.compare).toHaveBeenCalledWith(input, answer);
      expect(compareNumber.compare).toHaveBeenCalledTimes(1);
    });

  it ('should integrate all component to finish guess',function(){
    var randomArray = [0.1, 0.2, 0.3, 0.4];
    var fakeMath = {
      random: function(){

      }
    }
    spyOn(fakeMath,"random").callFake(function(){
      return randomArray.shift();
    });

    var  answerGenerator = new AnswerGenerator(fakeMath);
    var compareNumber = new CompareNumber();

    var guess = new Guess(compareNumber, answerGenerator);
    var tips = guess.guess(input);

    expect(tips).toBe(finalTips);

  });
  });
