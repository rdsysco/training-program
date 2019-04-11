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
        for (int i = 1; i <= this.theNumberOfGames; i++) {
            System.out.format("Enter the score of %d game:", i);
            this.scores.add(consoleIn.nextInt());
        }
    }

    private void readTheNumberOfGames()
    {
        do {
            System.out.print("Enter the number of games:");
            try {
                this.theNumberOfGames = consoleIn.nextInt();
                if (this.theNumberOfGames < 2 || this.theNumberOfGames > 1000) {
                    System.out.println("Error: The entered number is out of range (1<number<1000)");
                }
            } catch (InputMismatchException exp) {
                System.out.println("Error: Only the integer numbers are allowed");
                this.consoleIn.next();
            }
        } while (this.theNumberOfGames < 2 || this.theNumberOfGames > 1000);
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
