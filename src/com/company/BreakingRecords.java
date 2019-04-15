package com.company;

import javax.swing.*;

public class BreakingRecords {

    private int countGame = 0;
    private int maxScore = 0;
    private int minScore = 0;
    private int numberOfBreakMin = 0;
    private int numberOfBreakMax = 0;
    private Validations validate = new Validations();

    public int[] prepareDataUser(String strInput) throws InvalidException {
        countGame = Integer.parseInt(strInput);

        validate.betweenNumeric(1, 1000, countGame);

        int scores[] = new int[countGame];

        for (int i = 0; i < countGame; i++) {
            strInput = JOptionPane.showInputDialog("Enter the game score : ");
            scores[i] = Integer.parseInt(strInput);

            validate.betweenNumeric(1, 100000000, scores[i]);
        }
        return scores;
    }

    public void setBreaksGame(int[] scores) {
        maxScore = scores[0];
        minScore = scores[0];

        for (int score : scores) {
            if (score > maxScore) {
                maxScore = score;
                numberOfBreakMax++;
            }

            if (score < minScore) {
                minScore = score;
                numberOfBreakMin++;
            }
        }
    }

    public void getBreakingTheRecords() {
        try {
            String strInput;

            strInput = JOptionPane.showInputDialog("Please enter count games : ");
            int[] scores = prepareDataUser(strInput);

            setBreaksGame(scores);

            System.out.println("Numbers of times best score increased : " + numberOfBreakMax);
            System.out.println("Numbers of times worst score decreased : " + numberOfBreakMin);

        } catch (Exception e) {
            System.out.println(e);
        }
    }

}
