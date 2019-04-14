package stringCalculator;

import java.util.ArrayList;

public class StringCalculation {
    private ArrayList<StringInput> stringInputs = new ArrayList<StringInput>();

    public StringCalculation(ArrayList<StringInput> stringInputs){
        this.stringInputs = stringInputs;
    }

    public ArrayList<Byte> sortTheNumbers(){
        ArrayList<Byte> numbers;
        numbers = this.getNumbers();

        int lenght = numbers.size();
        for (int i = 0; i < lenght-1; i++)
        {
            for (int j = 0; j < lenght-i-1; j++)
                if (numbers.get(j)> numbers.get(j+1))
                {
                    byte temp = numbers.get(j);
                    numbers.set(j,numbers.get(j+1));
                    numbers.set(j+1,temp);
                }
        }

        return numbers;

    }

    private ArrayList<Byte> getNumbers(){
        ArrayList<Byte> numbers = new ArrayList<Byte>();
        for(StringInput stringInput:stringInputs){
            if(stringInput.isNumeric()){
                numbers.add(Byte.parseByte(stringInput.getContent()));
            }
        }

        return numbers;
    }

    public int getSumOfTheNumbers(){
        ArrayList<Byte> numbers = this.getNumbers();
        int sum = 0;
        for(Byte number:numbers){
            sum += number;
        }

        return sum;
    }

    private ArrayList<Character> getLetters(){
        ArrayList<Character> letters = new ArrayList<Character>();
        for(StringInput stringInput:stringInputs){
            if(stringInput.isLetter()){
                letters.add(stringInput.getContent().charAt(0));
            }
        }

        return letters;
    }

    public FrequentCharacterOutput mostFrequentCharacter(){
        ArrayList<Character> letters = this.getLetters();
        ArrayList<FrequentCharacterOutput> frequentCharacterOutputs = getFrequentCharacters(letters);

        FrequentCharacterOutput maxFrequentCharacter = frequentCharacterOutputs.get(0);

        for (FrequentCharacterOutput frequentCharacterOutput:frequentCharacterOutputs){
            if(frequentCharacterOutput.frequent > maxFrequentCharacter.frequent){
                maxFrequentCharacter = frequentCharacterOutput;
            }
        }

        return maxFrequentCharacter;
    }

    private ArrayList<FrequentCharacterOutput> getFrequentCharacters(ArrayList<Character> letters) {
        ArrayList<FrequentCharacterOutput> frequentCharacterOutputs = new ArrayList<FrequentCharacterOutput>();
        int charCount;

        for (Character letter:letters){
            charCount = 0;
            FrequentCharacterOutput frequentCharacterOutput = new FrequentCharacterOutput();
            frequentCharacterOutput.character = letter;
            for (Character currentLetter:letters){
                if(letter == currentLetter){
                    charCount++;
                }

                frequentCharacterOutput.frequent = charCount;
            }

            frequentCharacterOutputs.add(frequentCharacterOutput);

        }
        return frequentCharacterOutputs;
    }
}
