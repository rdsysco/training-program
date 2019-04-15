package com.rdsysco.plus_minus;

import java.util.Scanner;

/**
 * Created by RayaDyar on 4/10/2019.
 */
public class Application {

    public static void main(String[] args) {

        Validation validation = new Validation();
        PlusMinus plusMinus = new PlusMinus();
        Scanner scanner = new Scanner(System.in);
        System.out.println("How many numbers do you want to enter?");
        String numbersLengthStr;
        boolean numbersLengthValid;
        do {
            numbersLengthStr = scanner.nextLine().trim();
            numbersLengthValid = validation.validateNumbersLength(numbersLengthStr);
        } while (!numbersLengthValid);

        int[] numbers;
        boolean numbersValid = false;
        do {
            System.out.printf("Enter %s numbers,use space for separating them:%n",numbersLengthStr);
            String numbersStr = scanner.nextLine();
            numbers = plusMinus.getNumbers(numbersStr, Integer.parseInt(numbersLengthStr));
            if (numbers != null) {
                numbersValid = validation.validateNumbers(numbers);
            }
        } while (!numbersValid);

        plusMinus.printAllFractions(plusMinus.calculatePlusMinus(numbers));
    }
}



