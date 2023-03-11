class Character {
    
    constructor(cName, archetype, moves) {

        this.cName = cName;
        this.archetype = archetype;
        this.moves = moves;

    }

    displayName() {

        console.log(this.cName);

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

    
    displayAllFrames() {

        const frames = [];

        for (var i = 0; i < this.moves.length; i++) {

            frames.push(this.moves[i].mStartup);

        }
        
        return frames;

    }

    computeSingleMoveFrame(moveRequest) {

        for (var i = 0; i < this.moves.length; i++) {

            if(moveRequest == this.moves[i].mName) {

                return this.moves[i].mStartup;

            }

        }

    }

}

class Characters {

    constructor() {

        this.characters = [];

    }

    newCharacter(name, archetype, moves) {

        let c = new Character(name, archetype, moves);
        this.characters.push(c);

        return c;

    }

    get fullRoster() {

        return this.characters;

    }

    get numberCharacters() {

        return this.characters.length;

    }

}

let roster = new Characters();

roster.newCharacter("Goldlewis", ["Strike-Throw", "One-Shot"], [
    
    {mName: "5P", mStartup: 7, mActive: 0},
    {mName: "5K", mStartup: 8, mActive: 0},
    {mName: "5S", mStartup: 10, mActive: 0},
    {mName: "5H", mStartup: 19, mActive: 0}, 
    {mName: "2P", mStartup: 5, mActive: 0},
    {mName: "2K", mStartup: 8, mActive: 0},
    {mName: "2S", mStartup: 13, mActive: 0},
    {mName: "2H", mStartup: 20, mActive: 0}

    ]
);


roster.newCharacter("Sol Badguy", ["Strike-Throw", "Rushdown"], [
  
    {mName: "5P", mStartup: 5, mActive: 0},
    {mName: "5K", mStartup: 3, mActive: 0},
    {mName: "5S", mStartup: 10, mActive: 0},
    {mName: "5H", mStartup: 11, mActive: 0}, 
    {mName: "2P", mStartup: 5, mActive: 0},
    {mName: "2K", mStartup: 4, mActive: 0},
    {mName: "2S", mStartup: 13, mActive: 0},
    {mName: "2H", mStartup: 20, mActive: 0}
    ]

);

roster.newCharacter("May", ["Rushdown", "Charge"], [

    {mName: "5P", mStartup: 4, mActive: 0},
    {mName: "5K", mStartup: 8, mActive: 0},
    {mName: "5S", mStartup: 12, mActive: 0},
    {mName: "5H", mStartup: 13, mActive: 0}, 
    {mName: "2P", mStartup: 5, mActive: 0},
    {mName: "2K", mStartup: 6, mActive: 0},
    {mName: "2S", mStartup: 10, mActive: 0},
    {mName: "2H", mStartup: 11, mActive: 0}    
    ]

);

roster.newCharacter("Ramlethal Valentine", ["Zoner", "Rushdown"], [

    {mName: "5P", mStartup: 5, mActive: 0},
    {mName: "5K", mStartup: 7, mActive: 0},
    {mName: "5S", mStartup: 11, mActive: 0},
    {mName: "5H", mStartup: 12, mActive: 0}, 
    {mName: "2P", mStartup: 6, mActive: 0},
    {mName: "2K", mStartup: 6, mActive: 0},
    {mName: "2S", mStartup: 10, mActive: 0},
    {mName: "2H", mStartup: 14, mActive: 0} 
    ]

);

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

    console.log(roster.fullRoster[userCharacter].displayAllFrames());

}

function displaySingleMoveFrame(userCharacter,userMove) {

    console.log(roster.fullRoster[userCharacter].computeSingleMoveFrame(userMove));

}