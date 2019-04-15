package StringCalculator.Services;

import StringCalculator.Entity.Alphabet;

import java.util.ArrayList;

public class AlphabetService implements IAlphabetService {

    public Alphabet getMostFrequentCharacter(ArrayList<Alphabet> alphabetObjectList) {
        ArrayList<Alphabet> frequencyOfAlphabet = getFrequencyOfAlphabet(alphabetObjectList);
        Alphabet mostFrequentCharacter = new Alphabet();
        for (Alphabet alphabetObj : frequencyOfAlphabet) {
            if (mostFrequentCharacter.getFrequency() <= alphabetObj.getFrequency()) {
                mostFrequentCharacter.setCharacter(alphabetObj.getCharacter());
                mostFrequentCharacter.setFrequency(alphabetObj.getFrequency());
            }
        }
        return mostFrequentCharacter;
    }

    private ArrayList<Alphabet> getFrequencyOfAlphabet(ArrayList<Alphabet> alphabetObjectList) {
        ArrayList<Alphabet> frequencyOfAlphabet = new ArrayList<Alphabet>();

        for (Alphabet alphabetObj : alphabetObjectList) {
            boolean finded = false;
            for (Alphabet frequencyOfAlphabetObj : frequencyOfAlphabet) {
                if (alphabetObj.getCharacter() == frequencyOfAlphabetObj.getCharacter()) {
                    frequencyOfAlphabetObj.addFrequency();
                    finded = true;
                    break;
                }
            }
            if (!finded) {
                Alphabet newAlphabetObj = new Alphabet(alphabetObj.getCharacter());
                newAlphabetObj.addFrequency();
                frequencyOfAlphabet.add(newAlphabetObj);
            }
        }

        return frequencyOfAlphabet;
    }

}
