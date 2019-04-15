package breaking_records;

import com.rdsysco.breaking_records.BreakingRecords;
import org.junit.jupiter.api.*;

import java.util.Arrays;

public class BreakingRecordsTest {

    private BreakingRecords breakingRecords = new BreakingRecords();

    @Test
    public void getScores() {
        String scoresStr="10 5 20 20 4 5 2 25 1";
        int[] scoresActual = breakingRecords.getScores(scoresStr);
        int[] scoresAssertion = {10,5,20,20,4,5,2,25,1};
        Assertions.assertTrue(Arrays.equals(scoresActual,scoresAssertion));
    }

    @Test
    public void calculate() {
        int[] scores = {10,5,20,20,4,5,2,25,1};
        int[] recordActual=breakingRecords.calculate(scores);
        int[] recordAssertion = {2,4};
        Assertions.assertTrue(Arrays.equals(recordActual,recordAssertion));
    }

}
