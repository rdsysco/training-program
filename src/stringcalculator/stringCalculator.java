package stringcalculator;

import java.util.*;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class stringCalculator {

    private String value;
    private ArrayList<Integer> numbersArray= new ArrayList<>();
    private ArrayList<String> charsArray= new ArrayList<>();
    private int numberSummation=0;
    private String maxChar;
    private Integer maxValue;

    public stringCalculator(String value)
    {
        this.value = value;
    }

    public void output()
    {
        sumOfTheNumbers();
        mostFrequentCharacter();
        numbersSortedList();
        print();
    }

    public void sumOfTheNumbers()
    {
        Pattern p = Pattern.compile("(\\-)?\\d+");
        Matcher m = p.matcher(value);
        while(m.find()) {
            this.numbersArray.add(new Integer(m.group()));
        }
        this.numbersArray.forEach(
           number -> this.numberSummation+=number
        );
    }

    public void numbersSortedList()
    {
        Collections.sort(this.numbersArray);
    }

    public void mostFrequentCharacter() {
        Pattern p = Pattern.compile("[a-zA-Z]+");
        Matcher m = p.matcher(value);
        while (m.find()) {
            this.charsArray.add(m.group());
        }
        Map<String, Integer> frequent = new HashMap<>();
        for (String charValue : this.charsArray) {
            if (frequent.containsKey(charValue)) {
                frequent.put(charValue, frequent.get(charValue).intValue() + 1);
            } else {
                frequent.put(charValue, 1);
            }
        }
        Object[] keys = frequent.keySet().toArray();
        Object[] values = frequent.values().toArray();
        this.maxChar = keys[0].toString();
        this.maxValue = new Integer(values[0].toString());
        for (int i = 1; i < keys.length; i++) {
            if (Integer.parseInt(values[i].toString()) > maxValue) {
                maxChar = keys[i].toString();
                maxValue = Integer.parseInt(values[i].toString());
            }
        }
    }

    private void print() {
        System.out.println(this.numberSummation);
        System.out.println(this.maxChar + " -> " + this.maxValue);
        for (int number : this.numbersArray) {
            System.out.print(number + " ");
        }
    }
}
