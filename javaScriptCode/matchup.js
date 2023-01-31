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



class character {

    constructor (options) {

        this.cName = options.cName || "template";
        this.fiveP = options.fiveP || 3;
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

class characterBuilder {

    create = (options) => {

        let uCharacter;

        uCharacter = new character(options);

        return uCharacter;

    }  
}

const characterFactory = new characterBuilder();

const sol = characterFactory.create( {

}};



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

    var goldLewis = new characterBuilder() 

    goldLewis.cName("Goldlewis");
    goldLewis.normalMoves(7,10,10,19,5,8,13,20,14,12)
    goldLewis.build();


}

main();