/*----- constants -----*/
const beepAudio = new Audio('http://soundbible.com/mp3/Robot_blip-Marianne_Gagnon-120342607.mp3');
const shootAudio = new Audio('http://soundbible.com/mp3/shooting_star-Mike_Koenig-1132888100.mp3');
const rps = {
  r: {
    image: 'url(imgs/rock.png)',
    beats: 's'
  },
  p: {
    image: 'url(imgs/paper.png)',
    beats: 'r'
  },
  s: {
    image: 'url(imgs/scissors.png)',
    beats: 'p'
  }
};
const rpsLookup = ['r', 'p', 's'];


/*----- app's state (variables) -----*/
let scores, results, winner;


/*----- cached element references -----*/
const scoreEls = {
  p: document.querySelector('#player > h1'),
  c: document.querySelector('#computer > h1'),
  t: document.querySelector('#tie > h1'),
};
const pResultEl = document.querySelector('#player > div');
const cResultEl = document.querySelector('#computer > div');

/*----- event listeners -----*/

document.getElementById('go-btn').addEventListener('click', handleGo);

/*----- functions -----*/
init();

function init() {
  scores = {
    p: 0,
    c: 0,
    t: 0
  };
  results = {
    p: 'r',
    c: 'r'
  };
  winner = null; // null - no winner; 'p' - Player Wins; 'c' - Computer; and 't' - Tie
  render();
}

function render() {
  // transfer all state (vars) to the DOM
  // display scores
  for (let score in scores) scoreEls[score].textContent = scores[score];
  // display results
  pResultEl.style.backgroundImage = rps[results.p].image;
  cResultEl.style.backgroundImage = rps[results.c].image;
  // display winner
  pResultEl.style.borderColor = winner === 'p' ? 'grey' : 'white';
  cResultEl.style.borderColor = winner === 'c' ? 'grey' : 'white';
}

function handleGo() {
  // Start the timer (icebox)
  // After the timer has reached zero:
  //  - generate the results (r, p, s) randomly for both player & computer
  results.p = getRandomRPS();
  results.c = getRandomRPS();
  //  - compute who the winner is: player, computer or tie
  winner = results.p === results.c ? 't' :
    rps[results.p].beats === results.c ? 'p' : 'c';
  //  - increase the score for the winner
  scores[winner]++;
  //  - render (transfer the state (model) to the DOM)
  render();
}

function getRandomRPS() {
  return rpsLookup[Math.floor(Math.random() * 3)];
}