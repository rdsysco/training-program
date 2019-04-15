package com.rdsysco.breaking_records;

/**
 * Created by RayaDyar on 4/10/2019.
 */
public class BreakingRecords {

    public int[] calculate(int[] scores) {

        int score, highest = scores[0], lowest = scores[0];
        int numbersOfHighest = 0, numbersOfLowest = 0;
        for (int currentScore : scores) {
            score = currentScore;
            if (score > highest) {
                highest = currentScore;
                numbersOfHighest++;
            }
            if (score < lowest) {
                lowest = currentScore;
                numbersOfLowest++;
            }
        }
        return new int[]{numbersOfHighest, numbersOfLowest};
    }

    public void printResult(int...records) {
        System.out.println(records[0] + " " + records[1]);
    }

    public int[] getScores(String scoresStr) {
        String[] scoresSeparated = scoresStr.trim().split("\\s+");
        int[] scores = new int[scoresSeparated.length];
        for (int i = 0; i < scoresSeparated.length; i++) {
            scores[i] = Integer.parseInt(scoresSeparated[i]);
        }
        return scores;
    }
}
