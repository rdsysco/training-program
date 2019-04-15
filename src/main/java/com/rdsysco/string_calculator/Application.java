package com.rdsysco.string_calculator;

import java.util.Scanner;

/**
 * Created by RayaDyar on 4/10/2019.
 */
public class Application {

    public static void main(String[] args) {
        StringCalculator stringCalculator = new StringCalculator();
        Scanner scanner = new Scanner(System.in);
        System.out.println("Enter some numbers and characters separated by commas: ");
        stringCalculator.calculate(scanner.nextLine());
    }
}



