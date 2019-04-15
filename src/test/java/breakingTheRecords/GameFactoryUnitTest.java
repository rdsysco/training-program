package breakingTheRecords;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.TestInstance;
import static org.junit.jupiter.api.Assertions.assertEquals;
import java.util.ArrayList;

import static org.mockito.Mockito.*;

@TestInstance(TestInstance.Lifecycle.PER_CLASS)
class GameFactoryUnitTest {
    @Test
    void makeGiveValidNumberReturnGameObjects(){
        Validation mockValidation = mock(Validation.class);
        short gameCount = 10;
        when(mockValidation.validateGameCount(gameCount)).thenReturn(true);

        GameFactory gameFactory = new GameFactory(mockValidation);

        ArrayList<Game> games =  gameFactory.make(gameCount);

        assertEquals(games.size(),gameCount);
    }

    @Test
    void makeGiveInValidNumberReturnGameObjects(){
        Validation mockValidation = mock(Validation.class);
        short gameCount = 0;
        when(mockValidation.validateGameCount(gameCount)).thenReturn(false);

        GameFactory gameFactory = new GameFactory(mockValidation);

        ArrayList<Game> games =  gameFactory.make(gameCount);

        assertEquals(games.size(), 0);
    }
}
