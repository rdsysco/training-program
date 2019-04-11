package breakingTheRecords;

import java.util.ArrayList;

public class ReportCard {

    private ArrayList<Score> scores = new ArrayList<Score>();

    public ReportCard(ArrayList<Score> scores){
        this.scores = scores;
    }

    private int calcNumberOfHighestScores(){
        long maxScoreAmount = scores.get(0).getScore();
        int numberOfHighestScores = 0;

        for (Score score:scores){
            if(maxScoreAmount < score.getScore()){
                maxScoreAmount = score.getScore();
                numberOfHighestScores++;
            }
        }

        return numberOfHighestScores;
    }

    private int calcNumberOfLowestScores(){
        long minScoreAmount = scores.get(0).getScore();
        int numberOfLowestScores= 0;

        for (Score score:scores){
            if(minScoreAmount > score.getScore()){
                minScoreAmount = score.getScore();
                numberOfLowestScores++;
            }
        }

        return numberOfLowestScores;
    }

    public ArrayList<Integer> report(){
        ArrayList<Integer> report = new ArrayList<Integer>();
        report.add(this.calcNumberOfHighestScores());
        report.add(this.calcNumberOfLowestScores());

        return report;
    }

    public ArrayList<Score> getScores() {
        return scores;
    }

    public void setScores(ArrayList<Score> scores) {
        this.scores = scores;
    }
}
