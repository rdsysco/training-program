package com.rdsysco.plus_minus;

import java.text.DecimalFormat;

/**
 * Created by RayaDyar on 4/10/2019.
 */
public class PlusMinus {

    public float[] calculatePlusMinus(int[] numbers) {
        int positive = 0, negative = 0, zeros = 0;
        for (int number : numbers) {
            if (number > 0) {
                positive++;
            } else if (number < 0) {
                negative++;
            } else {
                zeros++;
            }
        }
        int numbersLen = numbers.length;
        DecimalFormat decimalFormat = new DecimalFormat("#.######");
        float positiveFractions = Float.parseFloat(decimalFormat.format((float) positive / numbersLen));
        float negativeFractions = Float.parseFloat(decimalFormat.format((float) negative / numbersLen));
        float zerosFractions = Float.parseFloat(decimalFormat.format((float) zeros / numbersLen));
        return (new float[]{positiveFractions, negativeFractions, zerosFractions});
    }

    public void printAllFractions(float... fractions) {
        System.out.printf("The fractions of the elements that are positive is %.6f%n", fractions[0]);
        System.out.printf("The fractions of the elements that are negative is %.6f%n", fractions[1]);
        System.out.printf("The fractions of the elements that are zeros is %.6f%n", fractions[2]);
    }

    public int[] getNumbers(String numbersStr, int numbersLength) {
        String[] spitedNumbers = numbersStr.trim().split("\\s+");
        if (spitedNumbers.length != numbersLength) {
            System.out.printf("Please enter %d numbers.%n", numbersLength);
            return null;
        }
        int[] numbers = new int[numbersLength];
        for (int i = 0; i < numbersLength; i++) {
            try {
                numbers[i] = Integer.parseInt(spitedNumbers[i]);
            } catch (NumberFormatException e) {
                System.out.println("All Numbers must be in the Integer format!" + e.getMessage());
                return null;
            }
        }
        return numbers;
    }

}