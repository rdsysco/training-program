package StringCalculator.Services;

import StringCalculator.Entity.Number;

import java.util.ArrayList;
import java.util.Arrays;

public class NumberCalc implements INumberCalc {
    public int getSum(ArrayList<Number> numberObjectList) {
        int sum = 0;
        for (Number numberObj : numberObjectList) {
            sum += numberObj.getDigit();
        }
        return sum;
    }

    public int[] sortNumber(ArrayList<Number> numberObjectList) {
        int[] numberArray = getArrayNumberOfArrayList(numberObjectList);
        Arrays.sort(numberArray);
        return numberArray;
    }

    public int[] getArrayNumberOfArrayList(ArrayList<Number> numberObjectList) {
        int[] numberArray = new int[numberObjectList.size()];
        int index = 0;
        for (Number numberObj : numberObjectList) {
            numberArray[index] = numberObj.getDigit();
            index++;
        }
        return numberArray;
    }
}
