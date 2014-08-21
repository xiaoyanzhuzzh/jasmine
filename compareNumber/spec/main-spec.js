describe('guessNumber', function () {
    var answer;
    var inputs;

    beforeEach(function () {
      answer = ['1','2','3','4'];
      // inputs = ['4','3','1','2'];
    });

    it ('all correct number and location',function(){

      var inputs = ['1','2','3','4'];

      var compareNumber = new CompareNumber();

      var tips = compareNumber.compare(answer, inputs);

      expect(tips).toBe('4A0B');

    });

    it ('none correct number and location',function(){

      var inputs = ['5','6','7','8'];

      var compareNumber = new CompareNumber();

      var tips = compareNumber.compare(answer, inputs);

      expect(tips).toBe('0A0B');

    });

    it ('all correct number and none correct location',function(){

      var inputs = ['4','3','2','1'];

      var compareNumber = new CompareNumber();

      var tips = compareNumber.compare(answer, inputs);

      expect(tips).toBe('0A4B');

    });



});
