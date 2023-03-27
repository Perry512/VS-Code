class Character {
    
    constructor(cName, archetype, moves, specialMoves) {

        this.cName = cName;
        this.archetype = archetype;
        this.moves = moves;
        this.specialMoves = specialMoves;

    }

    get computeName() {

        return(this.cName);

    }
    //Gives the moves object itself, looks super ugly but we ball
    displayMovesRaw() {

        for (var i = 0; i < this.moves.length; i++) {

            console.log(this.moves[i]);

        }

    }
    //I forget why this exists
    get displayMoveNames() {

        const rosterOfMoveNames = [];

        for (var i = 0; i < this.moves.length ; i++) {

            rosterOfMoveNames.push(this.moves[i].mName);

        }

        return rosterOfMoveNames;

    }

    get displayAllFrames() {

        const frames = [];

        for (var i = 0; i < this.moves.length; i++) {

            frames.push(this.moves[i].mStartup);

        }
        
        return frames;

    }

    getMoves() {

        return Array.from(this.moves.values());

    }

    computeSingleMoveStartup(moveRequest) {

        for (var i = 0; i < this.moves.length; i++) {

            if(moveRequest == this.moves[i].mName) {

                return this.moves[i].mStartup;

            }

        }

    }

    computeNormalMoves() {

        const normalMoves = [];
    
        for (let i = 0; i < this.moves.length; i++) {

          const move = this.moves[i];

          if (move instanceof NormalMove) {

            normalMoves.push(move);

          }

        }
    
        return normalMoves;
      }

    computeNormalMoveNames() {

        const normalMoveNames = [];

        for (let i = 0; i < this.moves.length; i++) {

            const move = this.moves[i];

            if (move instanceof NormalMove) {

                normalMoveNames.push(move.normalMoveName);

            }
        }

        return normalMoveNames;

    }

}

class Characters {

    constructor() {

        this.characters = [];

    }

    get fullRoster() {

        return this.characters;

    }

    get numberCharacters() {

        return this.characters.length;

    }

    newCharacter(name, archetype, moves, specialMoves) {

        let normalMoves = moves.map(

            move =>  new NormalMove(move.normalMoveName, move.normalMoveStartup, move.normalMoveActive, move.isStrike, move.isThrow)

        );

        let c = new Character(name, archetype, normalMoves, specialMoves);
        this.characters.push(c);

        return c;

    }

}

class NormalMove {

    constructor(normalMoveName, normalMoveStartup, normalMoveActive, isStrike, isThrow) {

        this.normalMoveName = normalMoveName;
        this.normalMoveStartup = normalMoveStartup;
        this.normalMoveActive = normalMoveActive;
        this.isStrike = isStrike;
        this.isThrow = isThrow;

    }
    
}

class SpecialMove extends NormalMove {

    constructor(normalMoveName, normalMoveStartup, normalMoveActive, isStrike, isThrow, specialInput) {

        this.normalMoveName = normalMoveName;
        this.normalMoveStartup = normalMoveStartup;
        this.normalMoveActive = normalMoveActive;
        this.isStrike = isStrike;
        this.isThrow = isThrow;
        this.specialInput = specialInput;

    }
}

let roster = new Characters();

roster.newCharacter("Goldlewis", ["Strike-Throw", "One-Shot"], [

    new NormalMove("5P", 7, 3, true, false),
    new NormalMove("5K", 10, 9, true, false),
    new NormalMove("c.S", 7, 6, true, false),
    new NormalMove("5S", 10, 3, true, false),
    new NormalMove("5H", 19, 6, true, false),
    new NormalMove("2P", 5, 3, true, false),
    new NormalMove("2K", 8, 3, true, false),
    new NormalMove("2S", 13, 3, true, false),
    new NormalMove("2H", 20, 4, true, false),    

    ],

    [

    {specialName: "248BT", mStartup: 12, mActive: 15, isStrike: true, isThrow: false},
    {specialName: "268BT", mStartup: 12, mActive: 15, isStrike: true, isThrow: false},
    {specialName: "684BT", mStartup: 12, mActive: 20, isStrike: true, isThrow: false}

]);


roster.newCharacter("Sol Badguy", ["Strike-Throw", "Rushdown"], [
  
    new NormalMove("5P", 4, 5, true, false),
    new NormalMove("5K", 3, 4, true, false),
    new NormalMove("c.S", 7, 6, true, false),
    new NormalMove("5S", 10, 2, true, false),
    new NormalMove("5H", 11, 4, true, false),
    new NormalMove("2P", 5, 3, true, false),
    new NormalMove("2K", 8, 3, true, false),
    new NormalMove("2S", 13, 3, true, false),
    new NormalMove("2H", 20, 4, true, false),
    
    ],

    [

    {specialName: "Bandit Revolver", mStartup: 12, mActive: 6, isStrike: true, isThrow: false},
    {specialName: "Gunflame", mStartup: 18, mActive: 32, isStrike: true, isThrow: false},
    {specialName: "Wild Throw", mStartup: 6, mActive: 2, isStrike: false, isThrow: true}

]);

roster.newCharacter("May", ["Rushdown", "Charge"], [

    new NormalMove("5P", 4, 3, true, false),
    new NormalMove("5K", 8, 6, true, false),
    new NormalMove("c.S", 7, 6, true, false),
    new NormalMove("5S", 12, 3, true, false),
    new NormalMove("5H", 13, 8, true, false),
    new NormalMove("2P", 5, 4, true, false),
    new NormalMove("2K", 6, 4, true, false),
    new NormalMove("2S", 10, 3, true, false),
    new NormalMove("2H", 11, 13, true, false),
    
    ],

    [

    {specialName: "SVerticalDolphin", sStartup: 6, sActive: 19, isStrike: true, isThrow: false}, 
    {specialName: "SVerticalDolphin", sStartup: 7, sActive: 18, isStrike: true, isThrow: false},
    {specialName: "Overhead Kiss", sStartup: 6, sActive: 2, isStrike: false, isThrow: true}

]);

roster.newCharacter("Ramlethal Valentine", ["Zoner", "Rushdown"], [

    new NormalMove("5P", 5, 4, true, false),
    new NormalMove("5K", 7, 3, true, false),
    new NormalMove("c.S", 7, 6, true, false),
    new NormalMove("5S", 11, 6, true, false),
    new NormalMove("5H", 12, 3, true, false),
    new NormalMove("2P", 6, 4, true, false),
    new NormalMove("2K", 6, 5, true, false),
    new NormalMove("2S", 10, 4, true, false),
    new NormalMove("2H", 14, 9, true, false),

    ],

    [

    {specialName: "Slido Detruo", mStartup: 30, mActive: 2, isStrike: true, isThrow: false},
    {specialName: "SBajoneto", mStartup: 20, mActive: 15, isStrike: true, isThrow: false},
    {specialName: "HBajoneto", mStartup: 20, mActive: 15, isStrike: true, isThrow: false}
    
]);

//Displays the entire character roster, name only
//Works as of 3/16/23
function displayFullCharacterRosterNames() {
 
    //this forEach will probably(?) have to be changed when characters are stored in a map instead of an array 
    var characterRoster = roster.fullRoster.map(character => character.computeName);

    return characterRoster;

}

//Should return a single characters moveset in just its names
//Does not work 5/15/23
//Currently will just give a new line and then the array of moves but every value for the moves are also undefined
function showCharacterMoveRoster(userCharacter) {

    var characterMoveRoster = roster.fullRoster[userCharacter].computeNormalMoveNames();

    return characterMoveRoster;

}

function displayAllMoveFrame(userCharacter) {

    console.log(roster.fullRoster[userCharacter].displayAllFrames);

}

//userCharacter: (int 0 - 3, based on position of characters in roster)
//userMove (String, name of move you want to get frames of e.g. "2K")
function displaySingleMoveStartup(userCharacter, userMove) {

    console.log(roster.fullRoster[userCharacter].computeSingleMoveStartup(userMove));

}

function displayNormalMoves(userCharacter) {

    console.log(roster.fullRoster[userCharacter].computeNormalMoveNames())

}

function showMoves() {
    var characterName = document.getElementById("character-name").value;
    var moveList = showCharacterMoveRoster(characterName);
    var moveListElement = document.getElementById("move-list");
  
    // Clear previous move list
    moveListElement.innerHTML = "";
  
    // Create new move list
    var list = document.createElement("ul");
    for (var i = 0; i < moveList.length; i++) {
      var item = document.createElement("li");
      item.innerText = moveList[i].name;
      list.appendChild(item);
    }
  
    // Add move list to page
    moveListElement.appendChild(list);

}
  

function main() {

    let myInput = 0;

    console.log("Welcome to program, here is where the menu system will remain for a bit");

    console.log("Here is the main roster for now");

    console.log(showCharacterMoveRoster(1));

    

}

main();