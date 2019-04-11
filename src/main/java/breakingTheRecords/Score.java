package breakingTheRecords;

public class Score {

    private Game game;
    private int score;

    public Score(Game game,int score){
        this.game = game;
        this.score = score;
    }

    public Game getGame() {
        return game;
    }

    public void setGame(Game game) {
        this.game = game;
    }

    public long getScore() {
        return score;
    }

    public void setScore(int score) {
        this.score = score;
    }
}
