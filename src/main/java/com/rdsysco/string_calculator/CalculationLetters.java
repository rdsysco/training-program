package com.rdsysco.string_calculator;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class CalculationLetters {

    private int mostRepetitions = 0;
    private String mostRepetitionsChar = null;

    public int getMostRepetitions() {
        return mostRepetitions;
    }

    public void setMostRepetitions(int mostRepetitions) {
        this.mostRepetitions = mostRepetitions;
    }

    public String getMostRepetitionsChar() {
        return mostRepetitionsChar;
    }

    public void setMostRepetitionsChar(String mostRepetitionsChar) {
        this.mostRepetitionsChar = mostRepetitionsChar;
    }

    public void calculate(List<String> letters) {
        Map<String, Integer> charactersMap = new HashMap<>();
        int count;
        for (String letter : letters) {
            count = 1;
            if (charactersMap.containsKey(letter)) {
                count += charactersMap.get(letter);
            }
            charactersMap.put(letter, count);
            if (count > mostRepetitions) {
                mostRepetitions = count;
                mostRepetitionsChar = letter;
            }
        }

    }
}
