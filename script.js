'use strict';
// Selecting elements
const score0El = document.getElementById('score--0');
const score1EL = document.getElementById('score--1');
const diceEl = document.querySelector('.dice');
const bntNew = document.querySelector('.btn--new');
const bntRoll = document.querySelector('.btn--roll');
const bntHold = document.querySelector('.btn--hold');
const current0EL = document.getElementById('current--0');
const current1EL = document.getElementById('current--1');
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const winner = document.querySelector('.winner-message');

const swith = () => {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};

// Strating conditions
let currentScore = 0;
let activePlayer = 0;
score0El.textContent = 0;
score1EL.textContent = 0;
diceEl.classList.add('hidden');
const scores = [0, 0];
let playing = true;

// Rolling dice functionalities.

bntRoll.addEventListener('click', () => {
  if (playing) {
    const dice = Math.trunc(Math.random() * 6) + 1;
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;
    if (dice !== 1) {
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
      // current0EL.textContent = currentScore;
    } else {
      // Swith to another player
      swith();
      /*document.getElementById(`current--${activePlayer}`).textContent = 0;
    currentScore = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');*/
    }
  }
});

bntHold.addEventListener('click', () => {
  if (playing) {
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];
    if (scores[activePlayer] >= 100) {
      playing = false;
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('.player--active');
      diceEl.classList.add('hidden');
    } else {
      swith();
      /*document.getElementById(`current--${activePlayer}`).textContent = 0;
    currentScore = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');*/
    }
  }
});

bntNew.addEventListener('click', () => {
  // Réinitialisation des scores des joueurs
  document.getElementById('current--0').textContent = 0;
  document.getElementById('current--1').textContent = 0;
  document.getElementById('score--0').textContent = 0;
  document.getElementById('score--1').textContent = 0;
  document
    .querySelector(`.player--${activePlayer}`)
    .classList.remove('player--winner');
  player0El.classList.add('active');
  player1El.classList.remove('active');
  diceEl.classList.add('hidden');

  scores[0] = 0;
  scores[1] = 0;
  currentScore = 0;
  activePlayer = 0;

  playing = true;
});
