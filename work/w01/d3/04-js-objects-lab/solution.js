const game = {
  title: 'Guess the Number!',
  biggestNum: 100,
  smallestNum: 1,
  secretNum: null,
  prevGuesses: [],
  play: function() {
    this.secretNum = Math.floor(Math.random() * 
      (this.biggestNum - this.smallestNum + 1)) + this.smallestNum;
    let guess = NaN;
    while(guess !== this.secretNum) {
      guess = this.getGuess();
      this.prevGuesses.push(guess);
      this.render(guess);
      if (guess === this.secretNum) return;
    }
  },
  getGuess: function() {
    let guess = NaN;
    while (isNaN(guess) || guess < this.smallestNum || guess > this.biggestNum) {
      guess = parseInt(prompt(`Enter a guess between ${this.smallestNum} and ${this.biggestNum}: `));
    }
    return guess;
  },
  render: function(guess) {
    let msg = (guess === this.secretNum) ?
      `Congrats! You guessed the number in ${this.prevGuesses.length} guesses!`
    :
      `
      Your guess is too ${guess > this.secretNum ? 'high' : 'low'}
      Previous guesses: ${this.prevGuesses.join(', ')}
      `
    ;
    alert(msg);
  }
};
