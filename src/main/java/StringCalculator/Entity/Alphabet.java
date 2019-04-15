package StringCalculator.Entity;

public class Alphabet {

    private char character;
    private byte frequency;

    public Alphabet(){
        frequency = 0;
    }

    public Alphabet(char character){
        this.character = character;
        frequency = 0;
    }

    public void addFrequency()
    {
        frequency++;
    }

    public char getCharacter() {
        return character;
    }

    public void setCharacter(char character) {
        this.character = character;
    }

    public byte getFrequency() {
        return frequency;
    }

    public void setFrequency(byte frequency) {
        this.frequency = frequency;
    }


}
