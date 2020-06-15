// ⭐️ Example Challenge START ⭐️

/**
 * ### Challenge `processFirstItem`
 * 
 * @instructions
 * Implement a higher-order function called `processFirstItem`.
 * It takes two arguments:
 * @param stringList an array of strings.
 * @param callback function that takes a string as its argument.
 * @returns the result of invoking `callback` with the FIRST element in `stringList`.
 * 
 * Example of usage of this higher-order function:
 * Invoking `processFirstItem` passing `['foo', 'bar']` and `(str) => str + str`,
 * should return 'foofoo'.
*/
// function processFirstItem(stringList, callback) {
//   return callback(stringList[0])
// }

// console.log(processFirstItem(['foo', 'bar'], 'str'));

// ⭐️ Example Challenge END ⭐️


///// M V P ///////

/* Task 1: `counterMaker`
 * Study the code for counter1 and counter2. Answer the questions below.
 * 
 * 1. What is the difference between counter1 and counter2?
 * 
 * Counter 1 Will reset every time the function is called. Counter 2 will keep a continuous count that adds on to each previous time the function was called
 * 
 * 2. Which of the two uses a closure? How can you tell?
 * 
 * The first one uses closure, since all of the parts of the function are contained inside of it. The second one uses a variable from the global scope
 * 
 * 3. In what scenario would the counter1 code be preferable? In what scenario would counter2 be better? 
 *
 * Counter 1 would be best for something that resets - in baseball this could be outs in an inning. Counter 2 is better for something where you want to count the whole way - in baseball this could be the score for the entire game
 * 
*/

// counter1 code
function counterMaker() {
  let count = 0;
  return function counter() {
   return count++;
  }
}

const counter1 = counterMaker();

// counter2 code
let count = 0;

function counter2() {
  return count++;
}


/* Task 2: inning() 

Write a function called `inning` that generates a random number of points that a team scored in an inning. This should be a whole number between 0 and 2. */

function inning(min, max){

  return Math.round(Math.random() * (max-min) + min);

}

// console.log(inning(0, 2));

/* Task 3: finalScore()

Write a higher order function called `finalScore` that accepts the callback function `inning` (from above) and a number of innings and and returns the final score of the game in the form of an object.

For example, 

finalScore(inning, 9) might return: 
{
  "Home": 11,
  "Away": 5,
}

*/ 

function finalScore(inning, numOfInnings){

  let homeScore = 0;
  let awayScore = 0;

  for (let i = 0; i < numOfInnings; i++) {
    homeScore += inning(0, 2);
    awayScore += inning(0, 2);
  }

  return {homeTeam: homeScore, awayTeam: awayScore}
}

console.log(finalScore(inning, 9));

/* Task 4: 

Create a function called `scoreboard` that accepts the following parameters: 

(1) Callback function `inning` that you wrote above
(2) A number of innings

and returns the score at each pont in the game, like so:

1st inning: 0 - 2
2nd inning: 1 - 3
3rd inning: 1 - 3
4th inning: 2 - 4
5th inning: 4 - 6
6th inning: 4 - 6
7th inning: 4 - 6
8th inning: 5 - 8
9th inning: 6 - 10

Final Score: 6 - 10 */

function scoreboard(inning, numOfInnings) {

  let initialScore = 0;

  for (let i = 0; i < numOfInnings; i++) {

    initialScore += inning(0, 2);
    console.log(`${i + 1} inning: ${initialScore}`)

  }

  return initialScore

}

scoreboard(inning, 9);

