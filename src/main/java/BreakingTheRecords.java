
import breakingTheRecords.*;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Scanner;
import java.util.stream.Collectors;
import com.google.inject.Guice;
import com.google.inject.Injector;

public class BreakingTheRecords {
    public static void main(String[] args){
        short gameCount;
        String inputScores;

        ArrayList<Game> games = new ArrayList<Game>();
        ArrayList<Score> scores = new ArrayList<Score>();

        Scanner gameCountInput = new Scanner(System.in);
        Scanner scoreInput = new Scanner(System.in);

        Injector injector = Guice.createInjector(new BreakingTheRecordsServiceProvider());
        GameFactory gameFactory = injector.getInstance(GameFactory.class);
        ScoreFactory scoreFactory = new ScoreFactory();


        do {

            System.out.println("Please insert count of the games (0 for exit): ");
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

            }

            scores = scoreFactory.make(arrayOfScores, games);

            ReportCard reportCard = new ReportCard(scores);

            System.out.println(reportCard.report().get(0) + " " + reportCard.report().get(1));
        }while (gameCount > 0);
    }


}
