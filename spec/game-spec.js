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

    });

    it ('input is ok!',function(){

      var inputA = ['2','2','1','3'];
      var inputB = ['5','2','1','3'];

      var resultA = false;
      var resultB = false;

      var game = new Game(guess);

      if(game.judgeInput(inputA)){
        resultA = true;
      }

      if(game.judgeInput(inputB)){
        resultB = true;
      }

      expect(resultA).toBe(false);
      expect(resultB).toBe(true);
    });


    it ('Game can judge your correct number!',function(){

        var input = ['1','3','6','7'];

        var game = new Game(guess);
        var answer = game.guess.answer;

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
        var answer = game.guess.answer;

        var result = true;
        var tips;

        for (var i = 0; i < answer.length; i++){
            if(input[i] !== answer[i]){
              result = false;
            }
        }

        if(!result){
            tips = game.guess.guess(input);
        }
        console.log(tips);
        expect(tips).toBe('0A2B');

    });

    it ('Game can judge your false number and inform you your times!',function(){
        var input = ['5','2','1','3'];

        spyOn(compareAnswer,'compare').and.returnValue('0A0B');
        var game = new Game(guess);
        var answer = game.guess.answer;

        var result = true;

        for (var i = 0; i < answer.length; i++){
            if(input[i] !== answer[i]){
              result = false;
            }
        }

        if(!result){
            var tips = game.guess.guess(input);
        }
        return(tips).toBe('0A0B,please input your next answer,you only have');

    });

    // it ('Game only provide you 6 times!',function(){
    //     var input = ['5','2','1','3'];
    //
    //     var game = new Game(guess);
    //     var answer = game.guess.answer;
    //
    //     var result = true;
    //
    //     for (var i = 0; i < answer.length; i++){
    //         if(input[i] !== answer[i]){
    //           result = false;
    //         }
    //     }
    //
    //     if(!result){
    //         var tips = game.guess.guess(input);
    //     }
    //     return(tips).toBe('0A0B');
    //
    // });
    //


  });
