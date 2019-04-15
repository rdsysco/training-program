package com.rdsysco.plus_minus;

/**
 * Created by RayaDyar on 4/10/2019.
 */
public class Validation {

    public boolean validateNumbersLength(String numbersLengthStr) {
        final int lowerNumber = 0, highestNumber = 100;
        boolean result = true;
        try {
            int numbersLength = Integer.parseInt(numbersLengthStr);
            if (numbersLength <= lowerNumber || numbersLength >= highestNumber) {
                System.out.println("Please enter a number larger than 0 and less than 100");
                result = false;
            }
        } catch (NumberFormatException e) {
            System.out.println("Please enter in the Integer format!" + e.getMessage());
            result = false;
        }
        return result;
    }

    public boolean validateNumbers(int[] numbers) {
        final int leastNumber = -100, greatestNumber = 100;
        boolean result = true;
        for (int i = 0; i < numbers.length; i++) {
            if (numbers[i] <= leastNumber || numbers[i] >= greatestNumber) {
                System.out.println("Please enter the numbers larger than -100 and less than 100");
                result = false;
            }
        }
        return result;
    }
}
