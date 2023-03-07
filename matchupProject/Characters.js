class Character {
    
    constructor(cName, archetype, moves) {

        this.cName = cName;
        this.archetype = archetype;
        this.moves = moves;

    }

    displayName() {

        console.log(this.cName);

    }

    displayMovesRaw() {

        for (var i = 0; i < this.moves.length; i++) {

            console.log(this.moves[i]);
        }
    }

    displayMoveNames() {

        for (var i = 0; i < this.moves.length; i++) {

            console.log(this.moves[i].mName);

        }
    }

    
    displayFrames() {

        for (var i = 0; i < this.moves.length; i++) {

            console.log(this.moves[i].mStartup);
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

roster.newCharacter("Goldlewis", "One-Shot", [
    
    {mName: "5P", mStartup: 7},
    {mName: "5K", mStartup: 8},
    {mName: "5S", mStartup: 10},
    {mName: "5H", mStartup: 19}, 
    {mName: "2P", mStartup: 5},
    {mName: "2K", mStartup: 8},
    {mName: "2S", mStartup: 13},
    {mName: "2H", mStartup: 20}

    ]
);


roster.newCharacter("Sol Badguy", "Rushdown", [
  
    {mName: "5P", mStartup: 5},
    {mName: "5K", mStartup: 3},
    {mName: "5S", mStartup: 10},
    {mName: "5H", mStartup: 11}, 
    {mName: "2P", mStartup: 5},
    {mName: "2K", mStartup: 4},
    {mName: "2S", mStartup: 13},
    {mName: "2H", mStartup: 20}
    ]

);

roster.fullRoster.forEach(character => character.displayMoves());

/*
Characters.addCharacterRoster(new Builder("Sol Badguy", "Rushdown", [
    { name: "Dragon Punch", startUp: 4, active: 2, recovery: 18 },
    { name: "Volcanic Viper", startUp: 14, active: 2, recovery: 24 }
    
]));

newRoster.addCharacterRoster(new Builder("May", "Blanka", [

    { name: "5P", startUp: 5, active: 2, recovery: 2 },
    { name: "5K", startUp: 7, active: 3, recovery: 3 },

]));
    
console.log(characterRoster);

    const sol = new Builder()
    .setName("Sol Badguy")
    .setArchetype("Rushdown")
    .addMove({ name: "Dragon Punch", startUp: 4, active: 2, recovery: 18 })
    .addMove({ name: "Volcanic Viper", startUp: 14, active: 2, recovery: 24 })
    .build();


    static ram = new Builder()
    .setName("Ramlethal Valentine")
    .setArchetype("Rushdown")
    .addMove({ name: "fiveP", startUp: 5, active: 1, recovery: 1 })
    .addMove({ name: "fiveK", startUp: 7, active: 1, recovery: 1 })
    .addMove({ name: "fiveS", startUp: 11, active: 1, recovery: 1 })
    .addMove({ name: "fiveH", startUp: 12, active: 1, recovery: 1 })
    .addMove({ name: "twoP", startUp: 6, active: 1, recovery: 1 })
    .addMove({ name: "twoK", startUp: 6, active: 1, recovery: 1 })
    .addMove({ name: "twoS", startUp: 10, active: 1, recovery: 1 })
    .addMove({ name: "twoH", startUp: 14, active: 1, recovery: 1 })
    .addMove({ name: "twoD", startUp: 10, active: 1, recovery: 1 })
    .build();

    static goldLewis = new Builder()
    .setName("Goldlewis Dickinson")
    .setArchetype("One-shot")
    .addMove({ name: "fiveP", startUp: 7, active: 1, recovery: 1 })
    .addMove({ name: "fiveK", startUp: 10, active: 1, recovery: 1 })
    .addMove({ name: "fiveS", startUp: 10, active: 1, recovery: 1 })
    .addMove({ name: "fiveH", startUp: 19, active: 1, recovery: 1 })
    .addMove({ name: "twoP", startUp: 5, active: 1, recovery: 1 })
    .addMove({ name: "twoK", startUp: 8, active: 1, recovery: 1 })
    .addMove({ name: "twoS", startUp: 13, active: 1, recovery: 1 })
    .addMove({ name: "twoH", startUp: 20, active: 1, recovery: 1 })
    .addMove({ name: "twoD", startUp: 14, active: 1, recovery: 1 })
    .build();

    */


// Going to start transferring above to a factory method, this should cause too many problems right? :)))))
  

  
//}