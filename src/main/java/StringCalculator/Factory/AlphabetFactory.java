package StringCalculator.Factory;

import StringCalculator.Entity.Alphabet;

import java.util.ArrayList;

public class AlphabetFactory {
    public ArrayList<Alphabet> bulkMake(ArrayList<Character> alphabetList) {

        ArrayList<Alphabet> alphabetObjectList = new ArrayList<Alphabet>();
        for (Character charObj : alphabetList) {
            Alphabet alphabetObj = new Alphabet(charObj);
            alphabetObjectList.add(alphabetObj);
        }
        return alphabetObjectList;
    }

}
