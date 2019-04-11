package breakingTheRecords;

import java.util.ArrayList;
import com.google.inject.Inject;

public class GameFactory {

    private ValidationInterface validation;

    @Inject
    public GameFactory(ValidationInterface validation){
        this.validation = validation;
    }


    public ArrayList<Game> make(short gameCount){

        ArrayList<Game> games = new ArrayList<Game>();
        if (!this.validation.validateGameCount(gameCount)){
            return games;
        }

        for (byte i = 0; i < gameCount; i++)
        {
            games.add(new Game(i));
        }

        return games;
    }
}
