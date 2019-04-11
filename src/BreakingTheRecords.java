
import breakingTheRecords.*;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Scanner;
import java.util.stream.Collectors;

public class BreakingTheRecords {
    public static void main(String[] args){

        ArrayList<Game> games = new ArrayList<Game>();
        ArrayList<Score> scores = new ArrayList<Score>();

        Scanner gameCountInput = new Scanner(System.in);
        Scanner scoreInput = new Scanner(System.in);

        GameFactory gameFactory = new GameFactory();
        ScoreFactory scoreFactory = new ScoreFactory();

        short gameCount;
        String inputScores;


        System.out.println("Please insert count of the games: ");
        gameCount = Short.valueOf(gameCountInput.next());

        games = gameFactory.make(gameCount);
        if (games.isEmpty()){
            System.out.println("The game count is out of range");
            System.exit(0);
        }

        System.out.println("Please insert Scores: ");
        inputScores = scoreInput.nextLine();

        List<Integer> arrayOfScores = Arrays.stream(inputScores.split(" "))
                .map(Integer::parseInt)
                .collect(Collectors.toList());

        if (arrayOfScores.size() != gameCount){
            System.out.println("Count of the games dose not match with scores count");
            System.exit(0);
        }

        scores = scoreFactory.make(arrayOfScores, games);

        ReportCard reportCard = new ReportCard(scores);

        System.out.println(reportCard.report().get(0) + " " + reportCard.report().get(1));

    }
}
