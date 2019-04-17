package company;

import javax.swing.*;
import java.util.ArrayList;
import java.util.Collections;
import java.util.Iterator;
import java.util.List;

public class StringCalculator {

    private int indexInt = 0;
    private int totalIntegers = 0;
    private List<Integer> integerInputs = new ArrayList<Integer>();
    private String stringInputs = "";
    private Validations validate = new Validations();
    private int maxFrequent = 0;
    private char maxChar = 0;
    private String sortedList = "";

    public String getSortedList() {
        return sortedList;
    }

    public char getMaxChar() {
        return maxChar;
    }

    public int getMaxFrequent() {
        return maxFrequent;
    }

    public void prepareInputData(String[] inputs) throws InvalidException {
        for (String userInput : inputs) {
            if (validate.isNumeric( userInput )) {
                validate.betweenNumeric( -100, 100, Integer.parseInt( userInput ) );

                integerInputs.add( indexInt, Integer.parseInt( userInput ) );
                indexInt++;
                totalIntegers += Integer.parseInt( userInput );
            } else {
                Validations.checkAlphabet( userInput );
                stringInputs += userInput;
            }
        }
    }

    public void getSortedList(List intlist) {
        Collections.sort( intlist );
        Iterator itr = intlist.iterator();

        while (itr.hasNext())
            sortedList += " " + itr.next();
    }

    public void getMostFrequentCharacter(String stringInputs) {

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
    }

    public void useStringCalculator() {
        try {
            String strInput;

            strInput = JOptionPane.showInputDialog( "Please enter letters and numbers separated by comma : " );
            String inputs[] = strInput.split( "," );

            prepareInputData( inputs );
            getSortedList( integerInputs );
            getMostFrequentCharacter( stringInputs );

            System.out.println( "Calculated summation of numbers : " + totalIntegers );
            System.out.println( "Sorted list : " + sortedList );
            System.out.println( "The most frequent character : " + maxChar + " -> " + maxFrequent );

        } catch (Exception e) {
            System.out.println( e );
        }
    }

}
