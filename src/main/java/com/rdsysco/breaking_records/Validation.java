package com.rdsysco.breaking_records;

/**
 * Created by RayaDyar on 4/10/2019.
 */
public class Validation {

    public boolean validateNumbersOfScores(int numbersOfScores) {
        final int lowerNumberGames = 0, highestNumberGames = 1000;
        boolean result = true;
        if (numbersOfScores <= lowerNumberGames || numbersOfScores >= highestNumberGames) {
            System.out.println("Please enter a number larger than 0 and less than 1000");
            result = false;
        }
        return result;
    }

    public boolean validateScores(int[] numbers) {
        final int lowerScores = 0;
        final int highestScores = (int) Math.pow(10, 8);
        boolean result = true;
        for (int i = 0; i < numbers.length; i++) {
            if (numbers[i] <= lowerScores || numbers[i] >= highestScores) {
                System.out.println("Please enter the numbers larger than 0 and less than 10^8");
                result = false;
            }
        }
        return result;
    }
}
