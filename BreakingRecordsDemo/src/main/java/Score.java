
public class Score implements IScore {
    public Score() {
    }

    public String getScore(int[] score) {
        int lowScore = score[0];
        int highScore = score[0];
        int numOfLowScore = 0;
        int numOfHighScore = 0;

        for(int i = 0; i < score.length; ++i) {
            if (score[i] > highScore) {
                highScore = score[i];
                ++numOfHighScore;
            }

            if (score[i] < lowScore) {
                lowScore = score[i];
                ++numOfLowScore;
            }
        }

        return "HighScore=" + numOfHighScore + " LowScore=" + numOfLowScore;
    }
}