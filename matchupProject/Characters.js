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
    displayMoveNames() {

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

let roster = new Characters();

roster.newCharacter("Goldlewis", ["Strike-Throw", "One-Shot"], [

    new NormalMove("5P", 7, 3, true, false),
    new NormalMove("5K", 10, 9, true, false),
    new NormalMove("c.S", 7, 6, true, false),
    new NormalMove("5S", 10, 3, true, false),
    new NormalMove("2P", 5, 3, true, false),
    new NormalMove("2K", 8, 3, true, false),
    new NormalMove("2S", 13, 3, true, false),
    new NormalMove("2H", 20, 4, true, false),    

    ],

    [

    {speicalName: "248BT", mStartup: 12, mActive: 15, isStrike: true, isThrow: false},
    {speicalName: "268BT", mStartup: 12, mActive: 15, isStrike: true, isThrow: false},
    {specialName: "684BT", mStartup: 12, mActive: 20, isStrike: true, isThrow: false}

]);


roster.newCharacter("Sol Badguy", ["Strike-Throw", "Rushdown"], [
  
    {mName: "5P", mStartup: 5, mActive: 0},
    {mName: "5K", mStartup: 3, mActive: 0},
    {mName: "5S", mStartup: 10, mActive: 0},
    {mName: "5H", mStartup: 11, mActive: 0}, 
    {mName: "2P", mStartup: 5, mActive: 0},
    {mName: "2K", mStartup: 4, mActive: 0},
    {mName: "2S", mStartup: 13, mActive: 0},
    {mName: "2H", mStartup: 20, mActive: 0}

    ],

    [

    {speicalName: "Bandit Revolver", mStartup: 12, mActive: 6, isStrike: true, isThrow: false},
    {specialName: "Gunflame", mStartup: 18, mActive: 32, isStrike: true, isThrow: false},
    {specialName: "Wild Throw", mStartup: 6, mActive: 2, isStrike: false, isThrow: true}

]);

roster.newCharacter("May", ["Rushdown", "Charge"], [

    {mName: "5P", mStartup: 4, mActive: 0},
    {mName: "5K", mStartup: 8, mActive: 0},
    {mName: "5S", mStartup: 12, mActive: 0},
    {mName: "5H", mStartup: 13, mActive: 0}, 
    {mName: "2P", mStartup: 5, mActive: 0},
    {mName: "2K", mStartup: 6, mActive: 0},
    {mName: "2S", mStartup: 10, mActive: 0},
    {mName: "2H", mStartup: 11, mActive: 0}    
    
    ],

    [

    {specialName: "SVerticalDolphin", sStartup: 6, sActive: 19, isStrike: true, isThrow: false}, 
    {specialName: "SVerticalDolphin", sStartup: 7, sActive: 18, isStrike: true, isThrow: false},
    {specialName: "Overhead Kiss", sStartup: 6, sActive: 2, isStrike: false, isThrow: true}

]);

roster.newCharacter("Ramlethal Valentine", ["Zoner", "Rushdown"], [

    {mName: "5P", mStartup: 5, mActive: 0},
    {mName: "5K", mStartup: 7, mActive: 0},
    {mName: "5S", mStartup: 11, mActive: 0},
    {mName: "5H", mStartup: 12, mActive: 0}, 
    {mName: "2P", mStartup: 6, mActive: 0},
    {mName: "2K", mStartup: 6, mActive: 0},
    {mName: "2S", mStartup: 10, mActive: 0},
    {mName: "2H", mStartup: 14, mActive: 0} 

    ],

    [

    {specialName: "Slido Detruo", mStartup: 30, mActive: 2, isStrike: true, isThrow: false},
    {specialName: "SBajoneto", mStartup: 20, mActive: 15, isStrike: true, isThrow: false},
    {specialName: "HBajoneto", mStartup: 20, mActive: 15, isStrike: true, isThrow: false}
    
]);

function doToRoster() {
 
    roster.fullRoster.forEach(character => character.displayName());

}

function showSpecificChar(userCharacter) {

    console.log(roster.fullRoster[userCharacter].displayFrames());

}

function showCharacterMoveRoster(userCharacter) {

    console.log(roster.fullRoster[userCharacter].displayMoveNames());

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

displayNormalMoves(0)