describe('guess', function () {

    var input;

    beforeEach(function () {
     input = ['5','2','3','4'];
    });

    it ('should be correctly callback',function(){

      var  answerGenerator = new AnswerGenerator();
      var answer = ['1','2','3','4'];
      spyOn(answerGenerator, 'generation').and.returnValue(answer);

      var compareNumber = new CompareNumber();
      var finalTips = compareNumber.compare(answerGenerator.generation(), input);

      var guess = new Guess(compareNumber, answerGenerator);
      var tips = guess.guess(input);


      expect(tips).toBe(finalTips);


    });


  });
