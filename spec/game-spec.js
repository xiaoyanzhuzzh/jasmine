describe('game', function () {
    var guess;

    var answerGenerator;
    var answer;

    var compareNumber;

    beforeEach(function () {
      answerGenerator = new AnswerGenerator();
      answer = ['1','3','6','7'];
      spyOn(answerGenerator, 'generation').and.returnValue(answer);

      compareNumber = new CompareNumber();
      guess = new Guess(compareNumber, answerGenerator);

    });

    it ('Game can start!',function(){

        var game = new Game(guess);
        var result = 'Start! Please input your number,you only have 6 times!';

        expect(result).toEqual(game.start());
        expect(game.number).toBe(6);

    });

    it ('input cannot repeat!',function(){

      var inputA = ['2','2','1','3'];
      var inputB = ['5','2','1','3'];

      var resultA = false;
      var resultB = false;

      var game = new Game(guess);
      var welcomeString = game.start();

      if(game.judgeInputForm(inputA)){
        resultA = true;
      }

      if(game.judgeInputForm(inputB)){
        resultB = true;
      }

      expect(resultA).toBe(false);
      expect(resultB).toBe(true);
    });

    it ('The length of the input must be four', function(){

      var inputA = ['1','3','6','7'];
      var inputB = ['1','3','6','7','5'];

      var game = new Game(guess);
      var welcomeString = game.start();

      expect(game.judgeInputLength(inputA)).toBe(true);

      expect(game.judgeInputLength(inputB)).toBe(false);

    });

    it ('The input must be number', function(){

      var inputA = ['1','3','6','7'];
      var inputB = ['1','3','B','7'];

      var game = new Game(guess);
      var welcomeString = game.start();

      expect(game.judgeInputNumber(inputA)).toBe(true);

      expect(game.judgeInputNumber(inputB)).toBe(false);

    });

    it ('Game can judge your correct number!',function(){

        var input = ['1','3','6','7'];

        var game = new Game(guess);
        var welcomeString = game.start();
        var answer = game.answer;

        for (var i = 0; i < answer.length; i++){
          if(input[i] === answer[i]){
            var result = 'congratulation!';
          }
        }
        expect(result).toBe(game.congratulation(input));
    });

    it ('Game can judge your false number!',function(){
        var input = ['5','2','1','3'];

        var game = new Game(guess);
        var welcomeString = game.start();
        var answer = game.answer;

        var tips;
        if(!game.congratulation(input)){
            tips = game.guess.guess(input);
        }
        expect(tips).toBe('0A2B');

    });

    it ('Game can judge your false number and inform you your times!',function(){
        var input = ['5','2','1','3'];

        spyOn(compareNumber,'compare').and.returnValue('0A0B');

        var game = new Game(guess);
        var welcomeString = game.start();
        var answer = game.answer;
        var input2 = ['1','3','6','7'];
        var result6 = game.output(input2);
      
        var result5 = game.output(input);
        var result4 = game.output(input);
        var result3 = game.output(input);
        var result2 = game.output(input);
        var result1 = game.output(input);
        var result0 = game.output(input);

        expect(result6).toBe('congratulation!');
        expect(result5).toBe('0A0B,please input your next answer,you only have 5 times!');
        expect(result4).toBe('0A0B,please input your next answer,you only have 4 times!');
        expect(result1).toBe('0A0B,please input your next answer,you only have 1 times!');
        expect(result0).toBe('Game Over!');

    });

  });
