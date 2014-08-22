describe('guess', function () {

    var input;

    beforeEach(function () {
     input = ['1','2','3','4'];
    });

    it ('should be correct direction',function(){
      var  answerGenerator = new AnswerGenerator();
      spyOn(answerGenerator, 'generation').and.returnValue(['1','2','3','4']);

      var compareNumber = new CompareNumber();
      var finalTips = compareNumber.compare(answerGenerator.generation(),input);

      var guess = new Guess(compareNumber, answerGenerator);
      var tips = guess.guess(input);

      expect(tips).toBe(finalTips);
    });

  });
