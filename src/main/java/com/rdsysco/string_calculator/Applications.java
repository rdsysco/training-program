package com.rdsysco.string_calculator;

import java.util.Scanner;

public class Applications {

    public static void main(String[] args) {

        CalculationFacade calculationFacade = new CalculationFacade(new CalculationLetters(),new CalculationNumbers());
        Scanner scanner = new Scanner(System.in);
        System.out.println("Enter some numbers and characters separated by commas: ");
        calculationFacade.calculate(scanner.nextLine());

    }
}
