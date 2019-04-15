package com.rdsysco.string_calculator;

import java.util.*;

/**
 * Created by RayaDyar on 4/11/2019.
 */
public class StringCalculator {

    public void calculate(String str) {
        List<Integer> numbers = new ArrayList<>();
        Map<String, Integer> charactersMap = new HashMap<>();
        int sum = 0;
        int mostRepetitions = 0;
        String mostRepetitionsChar = null;
        int count;
        String[] text = str.trim().split(",");
        final String lettersCharactersPattern = "[A-Za-z]";
        final String digitCharactersPattern = "^-?\\d+$";
        for (int i = 0; i < text.length; i++) {
            String currentCharacter = text[i];
            if (currentCharacter.matches(digitCharactersPattern)) {
                numbers.add(Integer.valueOf(currentCharacter));
                sum += Integer.valueOf(currentCharacter);
            } else if (currentCharacter.matches(lettersCharactersPattern)) {
                count = 1;
                if (charactersMap.containsKey(currentCharacter)) {
                    count += charactersMap.get(currentCharacter);
                }
                charactersMap.put(currentCharacter, count);
                if (count > mostRepetitions) {
                    mostRepetitions = count;
                    mostRepetitionsChar = currentCharacter;
                }
            }
        }
        List<Integer> numberSorted = sortNumbers(numbers);
        System.out.println("Numbers are sorted:");
        numberSorted.forEach(System.out::print);
        System.out.println();
        System.out.println("Sum of Numbers: " + sum);
        System.out.println("Most frequent character: " + mostRepetitionsChar + "=>" + mostRepetitions);
    }

    private List<Integer> sortNumbers(List<Integer> numbers) {
        numbers.sort(new Comparator<Integer>() {
            @Override
            public int compare(Integer o1, Integer o2) {
                return o1.compareTo(o2);
            }
        });
        return numbers;
    }
}

