package breakingTheRecords;

import java.util.ArrayList;
import java.util.List;

public class ScoreFactory {

    public ArrayList<Score> make(List<Integer> inputScores, ArrayList<Game> games){
        ArrayList<Score> scores = new ArrayList<Score>();
        for (int i = 0;i < inputScores.size(); i++){
            scores.add(new Score(games.get(i), inputScores.get(i)));
        }

        return scores;
    }
}
