package com.rdsysco.string_calculator;

import java.util.ArrayList;
import java.util.List;

public class CalculationFacade {

    CalculationLetters calculationLetters;
    CalculationNumbers calculationNumbers;

    public CalculationFacade(CalculationLetters calculationLetters, CalculationNumbers calculationNumbers) {
        this.calculationLetters = calculationLetters;
        this.calculationNumbers = calculationNumbers;
    }

    public void calculate(String str) {
        List<String> letters = new ArrayList<>();
        List<Integer> numbers = new ArrayList<>();
        String[] text = str.trim().split(",");
        final String lettersCharactersPattern = "[A-Za-z]";
        final String digitCharactersPattern = "^-?\\d+$";
        for (int i = 0; i < text.length; i++) {
            String currentCharacter = text[i];
            if (currentCharacter.matches(digitCharactersPattern)) {
                numbers.add(Integer.valueOf(currentCharacter));
            } else if (currentCharacter.matches(lettersCharactersPattern)) {
                letters.add(currentCharacter);
            }
        }

        this.calculationLetters.calculate(letters);
        this.calculationNumbers.calculate(numbers);

        printResult();
    }

    private void printResult() {
        System.out.println("Numbers are sorted:");
        this.calculationNumbers.getNumberSorted().forEach(System.out::print);
        System.out.println();
        System.out.println("Sum of Numbers: " + this.calculationNumbers.getSum());
        System.out.println("Most frequent character: " + this.calculationLetters.getMostRepetitionsChar()
                + "=>" + this.calculationLetters.getMostRepetitions());
    }
}
