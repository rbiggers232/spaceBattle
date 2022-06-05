// This will be a space battle between multiple spaceships
// Start with just one ship battle.
// Use loops for the battle.

// *****Ship Properties
// hull is the same as hitpoints. If hull reaches 0 or less, the ship is destroyed.

// firepower is the amount of damage done to the hull of the target with a successful hit.

// accuracy is the chance between 0 and 1 that the ship will hit its target.

// ****The USS Assembly should have the following properties:

// hull - 20
// firepower - 5
// accuracy - .7

// ****The alien ships should each have the following ranged properties determined randomly:

// hull - between 3 and 6
// firepower - between 2 and 4
// accuracy - between .6 and .8

// Objects,
// -earthShip Object
// -alienShip Object 
// -game Object 

// Methods
// -attacking Methods (for both ships)
// -reducing Methods (for both ships)
// -MathRandom will be used for accuracy
// -attacks end when either one is at a hull of 0

// alerts or prints
// -console log winner 
// -maybe console log loser
// ###################################

// FUNCTIONS
const getRandomNum = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const getRandomDec = (min, max) => {
  return Math.random() * (max - min) + min;
};

const startGame = () => {
  console.log(ussAssembly);
  console.log(alienShip);
  for (let i = 1; ussAssembly.health >= 1 && alienShip.health >= 1; i++) {
    console.log('%c ========', 'font-size: 20px')
    console.log('%c round ' + i, 'font-size: 20px')
    console.log('%c ussassembly\'s health: ' + ussAssembly.health, '');
    console.log('alien ship\'s health: ' + alienShip.health);
    ussAssembly.attack();
    if (alienShip.health >= 1) {
      alienShip.attack();
    };
  };
  endGame();
};

const endGame = () => {
  console.log('%c ========', 'font-size: 20px;');
  if (ussAssembly.health >= 1) {
    console.log('U.S.S. Assembly WINS!!!')
  } else {
    console.log('Alien Ship WINS!!!!')
  };
  
  
  console.log('ussassembly\'s health: ' + ussAssembly.health);
  console.log('alien ship\'s health: ' + alienShip.health);
};

// OBJECTS
const ussAssembly = {
  health: 10,
  damage: 5,
  accuracy: .7,
  attack(){
    const hitChance = getRandomDec(0, 1);
    if (ussAssembly.accuracy >= hitChance) {
      console.log('%c U.S.S. Assembly hits for ' + this.damage + ' damage', "color: red;")
      alienShip.health = alienShip.health - this.damage;
    } else {
      console.log('%c U.S.S. Assembly misses', "color: red;")
    };
  }
};

const alienShip = {
  health: getRandomNum(3, 6),
  damage: getRandomNum(2, 4),
  accuracy: getRandomDec(.6, .9),
  attack(){
    const hitChance = getRandomDec(0, 1);
    if (alienShip.accuracy >= hitChance) {
      console.log('%c Alien Ship hits for ' + this.damage + ' damage', "color: red;");
      ussAssembly.health = ussAssembly.health - this.damage;
    } else {
      console.log('%c Alien Ship misses!', 'color: red;')
    };
  }
};

// class alienShip {

//   health: getRandomNum(3, 6),
//   damage: getRandomNum(2, 4),
//   accuracy: getRandomDec(.6, .9),
//   attack(){
//     const hitChance = getRandomDec(0, 1);
//     if (alienShip.accuracy >= hitChance) {
//       console.log('Alien Ship hits for ' + this.damage + ' damage');
//       ussAssembly.health = ussAssembly.health - this.damage;
//     } else {
//       console.log('Alien Ship misses!')
//     };
//   }
// };

// RUN APP
startGame();










