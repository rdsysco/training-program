package com.company;

import javax.swing.*;
import java.util.List;
import java.util.ArrayList;
import java.util.*;

public class StringCalculator {

    private int indexInt = 0;
    private int totalIntegers = 0;
    private List<Integer> integerInputs = new ArrayList<Integer>();
    private String stringInputs = "";
    private Validations validate = new Validations();

    public void prepareInputData(String[] inputs) throws InvalidException {
        for (String userInput : inputs) {
            if (validate.isNumeric(userInput)) {
                validate.betweenNumeric(-100, 100, Integer.parseInt(userInput));

                integerInputs.add(indexInt, Integer.parseInt(userInput));
                indexInt++;
                totalIntegers += Integer.parseInt(userInput);
            } else {
                Validations.checkAlphabet(userInput);
                stringInputs += userInput;
            }
        }
    }

    public void getSortedList(List intlist) {
        Collections.sort(intlist);
        Iterator itr = intlist.iterator();

        System.out.print("Sorted list : ");
        while (itr.hasNext())
            System.out.printf("%s ", itr.next());
        System.out.println();
    }

    public void getMostFrequentCharacter(String stringInputs) {
        int maxFrequent = 0;
        char maxChar = 0;
        char[] chars = stringInputs.toCharArray();

        for (int i = 0; i < stringInputs.length(); i++) {
            int countFrequent = 1;
            for (int j = i + 1; j < stringInputs.length(); j++) {
                if (chars[i] == chars[j]) {
                    countFrequent++;
                }
            }
            if (countFrequent > maxFrequent) {
                maxFrequent = countFrequent;
                maxChar = chars[i];
            }
        }
        System.out.println("The most frequent character : " + maxChar + " -> " + maxFrequent);
    }

    public void useStringCalculator() {
        try {
            String strInput;

            strInput = JOptionPane.showInputDialog("Please enter letters and numbers separated by comma : ");
            String inputs[] = strInput.split(",");

            prepareInputData(inputs);

            System.out.println("Calculated summation of numbers : " + totalIntegers);
            getSortedList(integerInputs);
            getMostFrequentCharacter(stringInputs);

        } catch (Exception e) {
            System.out.println(e);
        }
    }

}
