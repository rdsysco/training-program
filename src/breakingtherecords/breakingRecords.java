package breakingtherecords;

import java.util.ArrayList;
import java.util.InputMismatchException;
import java.util.Scanner;

public class breakingRecords {

    private ArrayList<Integer> scores;
    private int bestScoreBreakingCount;
    private int worstScoreBreakingCount;
    private int theNumberOfGames;
    private Scanner consoleIn;

    public breakingRecords()
    {
        this.scores = new ArrayList<>();
        this.consoleIn = new Scanner(System.in);
        this.theNumberOfGames = 0;
    }
    
    public void input()
    {
        this.readTheNumberOfGames();
        int value=0;
        for (int i = 1; i <= this.theNumberOfGames; i++) {
            try {
                System.out.format("Enter the score of %d game:", i);
                value = this.consoleIn.nextInt();
                if(this.isScoreValueEligible(value)){
                    throw new Exception("Error: The entered score is out of range (0<number<10e8)");
                }
                this.scores.add(value);
            }catch (Exception exp) {
                String msg = "Error: The entered score is out of range (0<number<10e8)";
                if (exp instanceof InputMismatchException) msg = "Error: Only the integer numbers are allowed";
                System.out.println(msg);
                this.consoleIn.next();
                i--;
                continue;
            }
        }
    }

    private boolean isScoreValueEligible(int value) {
        return value <= 0 || value > 10e8;
    }

    private void readTheNumberOfGames()
    {
        int value=0;
        do {
            System.out.print("Enter the number of games:");
            try {
                value = consoleIn.nextInt();
                if (this.theNumberOfGameIsEligible(value)) {
                    System.out.println("Error: The entered number is out of range (1<number<1000)");
                }
            } catch (InputMismatchException exp) {
                System.out.println("Error: Only the integer numbers are allowed");
                this.consoleIn.next();
            }
        } while (this.theNumberOfGameIsEligible(value));
        this.theNumberOfGames=value;
    }

    private boolean theNumberOfGameIsEligible(int value) {
        return value < 2 || value > 1000;
    }

    private void calculateBreakingRecords()
    {
        this.bestScoreBreakingCount = this.worstScoreBreakingCount = 0;
        int bestRecord = this.scores.get(0);
        int worstRecord = this.scores.get(0);

        for (int i = 1; i < this.scores.size(); i++) {
            if (this.scores.get(i) > bestRecord) {
                bestRecord = this.scores.get(i);
                this.bestScoreBreakingCount++;
            } else if (this.scores.get(i) < worstRecord) {
                worstRecord = this.scores.get(i);
                this.worstScoreBreakingCount++;
            }
        }
    }

    public void output()
    {
        this.calculateBreakingRecords();
        System.out.println(this.bestScoreBreakingCount + " " + this.worstScoreBreakingCount);
    }
}
