//Javascript Objects Labs

const game = {
    title: 'Guess the Number!',
    biggestNum: 100,
    smallestNum: 1,
    secretNum: null,
    prevGuesses: [],
    play: function() {
      this.secretNum = Math.floor(Math.random() * 
        (this.biggestNum - this.smallestNum + 1)) + this.smallestNum;
        while(guess !== this.secretNum) {
            guess = this.getGuess();
            this.prevGuesses.push(guess);
            this.render(guess);
            if (guess === this.secretNum) return;
        }
    }  
   
    
  };
  
   game.getGuess = function() {
     do {
      var guess = prompt(`Enter a guess between ${game.smallestNum} and ${game.biggestNum}`);
     }
     while (!parseInt(guess) /*&& (guess < this.smallestNum || guess > this.biggestNum) */);
     return guess;
    };
    
    game.render = function(guess) {
       var renderMessage = (guess === secretNum) ? `Congrats! You guessed the number in ${game.prevGuess.length}guesses!`
       :  
        `Your guess is too ${guess > game.secretNum ? 'high' : 'low'}
        Previous guesses: ${game.prevGuesses.join(' ')}; `
        
        alert(renderMessage);
    };
    
    game.play()