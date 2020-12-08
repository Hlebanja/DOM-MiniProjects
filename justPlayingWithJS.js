//Coding exercise - practicing loops over objects
/* 
Let's continue with our football betting app!

1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")
2. Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember)
3. Print the 3 odds to the console, but in a nice formatted way, exaclty like this:
      Odd of victory Bayern Munich: 1.33
      Odd of draw: 3.25
      Odd of victory Borrussia Dortmund: 6.5
Get the team names directly from the game object, don't hardcode them (except for "draw"). HINT: Note how the odds and the game objects have the same property names 😉

BONUS: Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value. In this game, it will look like this:
      {
        Gnarby: 1,
        Hummels: 1,
        Lewandowski: 2
      }

GOOD LUCK 😀
*/

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

//This is how to easily work with arrays including element indexes
// for (const [i, x] of game.scored.entries()) {
//   console.log(i + ' ' + x);
// }

// 1.
// game.scored.forEach((player, i) => console.log(`${player} score ${i}`));

// 2.
// let sum = 0;
// for (const [key, value] of Object.entries(game.odds)) {
//   //this is how you iterate through elements of an object
//   sum += value;
// }
// console.log(sum / Object.entries(game.odds).length);

// // 2. alternative
// const average = Object.entries(game.odds).reduce(
//   (acc, entrie, i, arr) => (acc += entrie[1] / arr.length),
//   0
// );
// console.log(average);

// Challenge;

// So the solution is to loop over the array, and add the array elements as object properties, and then increase the count as we encounter a new occurence of a certain element
// const scorers = {};
// for (const player of game.scored) {
//   scorers[player] ? scorers[player]++ : (scorers[player] = 1);
// }

//Cool counting entities on an array algorithm
// var arr = [2, 2, 2, 2, 2, 4, 5, 5, 5, 9];

// function foo(arr) {
//   var a = [],
//     b = [],
//     prev;

//   arr.sort();
//   for (var i = 0; i < arr.length; i++) {
//     if (arr[i] !== prev) {
//       a.push(arr[i]);
//       b.push(1);
//     } else {
//       b[b.length - 1]++;
//     }
//     prev = arr[i];
//   }
//   return [a, b];
// }

// var result = foo(arr);
// console.log('[' + result[0] + ']', '[' + result[1] + ']');

/*
1. Create an array 'events' of the different game events that happened (no duplicates)
2. After the game has finished, is was found that the yellow card from minute 64 was unfair. 
So remove this event from the game events log.
3. Print the following string to the console: "An event happened, on average, every 9 minutes" (keep in mind that a game has 90 minutes)
4. Loop over the events and log them to the console, marking whether it's in the first half or second half (after 45 min) of the game, like this:
      [FIRST HALF] 17: ⚽️ GOAL

GOOD LUCK 😀
*/

const gameEvents = new Map([
  [17, '⚽️ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽️ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽️ GOAL'],
  [80, '⚽️ GOAL'],
  [92, '🔶 Yellow card'],
]);

const eventsArr = [...gameEvents];

//removing duplicates
const uniqueArr = [...new Set(eventsArr)];

//deleting specific element of bidimensional array
uniqueArr.splice(
  uniqueArr.findIndex(element => element[0] === 64),
  1
);
console.log(uniqueArr);

for ([index, key] of uniqueArr.entries()) {
  console.log(index + ' ' + key);
}
//Map to array
// let events = [...gameEvents];
// console.log(events);

//Object to array
// const car = {
//   name: 'Pajero',
//   brand: 'volkswagen',
// };
// console.log(Object.entries(car));

var carArr = ['gol', 'pajero', 'carrera', 'polo'];
// //way of easily getting the index out of an array
// for (const [index, element] of carArr.entries())
//   console.log(index + ' ' + element);
