public class Javatest {

    public static void main (String[] args){
        
        Characters solBadGuy = new Characters("Sol Badguy");

        System.out.println(Character.goldLewis.toString());

    }
}

/*
////////////////////////////////////////////////////////////////////
Creating the Character Class

Currently has the attributes of Character name, Archetype...

TODO Add Character Guts, Common Round start moves and their respective frame data.

*/ /////////////////////////////////////////////////////////////////
class Characters {

    public Archetype type;
    public String charName;
    public MoveSet [] moveSet;

    

    public Characters (String charName, Archetype type, MoveSet[] moveSet){

        this.charName = charName;
        this.type = type;
        this.moveSet = moveSet;

    }

    public Characters (String charName, Archetype type) {

        this.charName = charName;
        this.type = type;

    }

    public Characters (String charName) {

        this.charName = charName;

    }

    public String toString() {

        return this.charName;

    }

}

class Moves {

    public String label;
    public int frames;

    private Moves (String label, int frames){

        this.label = label;
        this.frames = frames;

    }

    private Moves (String label) {

        this.label = label;

    }

    public enum MoveNames {

        defaultMove("default"),
        TwoP("2P"),
        FiveK("5K"),
        TwoD("2D"),
        FarSlash("f.S");

        public String moName;

        private MoveNames (String moName){

            this.moName = moName;

        }
        
    }

}

class Archetype {

    public enum ArchetypeNames {
  
        Shoto("Shoto"),
        StrikeThrow("Strike-Throw"),
        Zoner("Zoner"),
        Grappler("Grappler"),
        Rushdown("Rushdown"),
        Charge("Charge");
        
        public String label;

        private ArchetypeNames (String label){

            this.label = label;

        }

    }

}

class MoveSet {

    Moves[] moves;

    public Moves[] getMoves() {
        return moves;
    }

    public void setMoves(Moves[] moves) {
        this.moves = moves;
    }

    private MoveSet(Moves[] moves) {

        this.moves = moves;

    }

}