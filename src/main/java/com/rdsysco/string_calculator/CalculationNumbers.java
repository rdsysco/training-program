package com.rdsysco.string_calculator;

import java.util.ArrayList;
import java.util.Comparator;
import java.util.List;

public class CalculationNumbers {

    List<Integer> numberSorted;
    private int sum;


    public List<Integer> getNumberSorted() {
        return numberSorted;
    }

    public void setNumberSorted(List<Integer> numberSorted) {
        this.numberSorted = numberSorted;
    }

    public int getSum() {
        return sum;
    }

    public void setSum(int sum) {
        this.sum = sum;
    }

    public void calculate(List<Integer> nums) {
        List<Integer> numbers = new ArrayList<>();
        for (int number : nums) {
            numbers.add(number);
            sum += Integer.valueOf(number);
        }
        numberSorted = sortNumbers(numbers);
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
