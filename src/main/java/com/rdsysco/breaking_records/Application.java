package com.rdsysco.breaking_records;

import java.util.Scanner;

/**
 * Created by RayaDyar on 4/10/2019.
 */
public class Application {

    public static void main(String[] args) {

        BreakingRecords breakingRecords = new BreakingRecords();
        Validation validation = new Validation();
        Scanner scanner = new Scanner(System.in);
        boolean numbersGamesValid;
        int numbersOfGames;
        do {
            System.out.println("Enter the number of games: ");
            numbersOfGames = Integer.parseInt(scanner.nextLine());
            numbersGamesValid = validation.validateNumbersOfScores(numbersOfGames);
        } while (!numbersGamesValid);

        boolean scoresValid;
        int[] scores;
        do {
            System.out.printf("Enter %d space-separated integers describing the respective values of: %n", numbersOfGames);
            scores = breakingRecords.getScores(scanner.nextLine());
            scoresValid = validation.validateScores(scores);
        } while (!scoresValid);

        breakingRecords.printResult(breakingRecords.calculate(scores));
    }
}
