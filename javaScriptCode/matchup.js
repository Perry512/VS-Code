function moveVsMoveCheck(x,y) {

    var char1Move = x;
    var char2Move = y;
    var moveDiff = x - y;
    
    if(char1Move < char2Move) {

        console.log(x + " loses to " + y)

    } else if (moveDiff === 0) {

        console.log(x + " trades with " + y);

    } else {

        console.log(x + " beats " + y);

    }

}

class MoveName extends Enumify {

    static fiveP = new MoveName();
    static fiveK = new MoveName();
    static fiveS = new MoveName();
    static fiveH = new MoveName();
    static twoP = new MoveName();
    static twoK = new MoveName();
    static twoS = new MoveName();
    static twoH = new MoveName();
    static twoD = new MoveName();

}

class Character {

    constructor (options) {

        this.cName = options.cName || "template";
        this.fiveP = options.MoveName.fiveP || 3;
        this.fiveK = options.fiveK || 3;
        this.fiveS = options.fiveS || 3;
        this.fiveH = options.fiveH || 3;
        this.twoP = options.twoP || 3; 
        this.twoK = options.twoK || 3; 
        this.twoS = options.twoS || 3; 
        this.twoH = options.twoH || 3; 
        this.twoD = options.twoD || 3; 
        this.sixP = options.sixP || 3; 
        
    }

}

class CharacterBuilder {

    create = (options) => {

        let uCharacter;

        uCharacter = new Character(options);

        return uCharacter;

    }  
}

const characterFactory = new CharacterBuilder();

const sol = characterFactory.create( {

    cName: "Sol Badguy",
    fiveP: 3,
    fiveK: 3,
    fiveH: 3, 
    fiveS: 3,
    twoP: 4,
    twoK: 4,
    twoS: 13,
    twoH: 14,
    twoD: 10

});

const ram = characterFactory.create( {

    cName:"Ramlethal Valentine",
    fiveP: 5,
    fiveK: 7,
    fiveS: 11,
    fiveH: 12,
    twoP: 6,
    twoK: 6,
    twoS: 10,
    twoH: 14,
    twoD: 10

});

const goldLewis = characterFactory.create({

    cName: "Goldlewis Dickinson",
    MoveName
}) 



/*
normalMoves(fiveP,fiveK,fiveS,fiveH,twoP,twoK,twoS,twoH,twoD,sixP) {

    this.fiveP = fiveP;
    this.fiveK = fiveK;
    this.fiveS = fiveS;
    this.fiveH = fiveH;
    this.twoP = twoP;
    this.twoK = twoK;
    this.twoS = twoS;
    this.twoH = twoH;
    this.twoD = twoD;
    this.sixP = sixP;

}


build() {

    return this.character;

}

*/

function main() {

    /*
    goldLewis.cName("Goldlewis");
    goldLewis.normalMoves(7,10,10,19,5,8,13,20,14,12)
    goldLewis.build();
    */

}

main();