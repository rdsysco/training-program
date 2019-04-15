package StringCalculator.Services;

import java.util.ArrayList;

import StringCalculator.Entity.Alphabet;

public interface IAlphabetService {
    Alphabet getMostFrequentCharacter(ArrayList<Alphabet> alphabetObjectList);
}
