package breakingTheRecords;

import java.util.ArrayList;

public class GameFactory {
    public ArrayList<Game> make(int gameCount){

        ArrayList<Game> games = new ArrayList<Game>();

        if (gameCount > 0 && gameCount < 1000) {
            for (byte i = 0; i < gameCount; i++)
            {
                games.add(new Game(i));
            }
        }

        return games;
    }
}
