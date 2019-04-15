import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.runners.MockitoJUnitRunner;

import static junit.framework.TestCase.assertEquals;

@RunWith(MockitoJUnitRunner.class)
public class ScoreUnitTest {

    private ScoreServic scoreservic;

    @Mock
    private IScore score;

    @Before
    public void setup() {
        scoreservic = new ScoreServic(score);
    }

    @Test
    public void ServerRequestDataTest() {
        int[] arr = new int[]{10, 5, 20, 20, 4, 5, 2, 25, 10};
        Mockito.when(score.getScore(arr)).thenReturn("HighScore=2 LowScore=3");
        assertEquals("HighScore=2 LowScore=3",scoreservic.requestData(arr));
        //Assert.assertEquals("HighScore=2 LowScore=3",scoreservic.requestData(arr));
    }
}
