package company;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class BreakingRecordsTest {
    @Test
    public void test_correct_breaking_records() {
        int[] scores = {10, 5, 20, 20, 4, 5, 2, 25, 1};
        BreakingRecords br = new BreakingRecords();
        br.setBreaksGame( scores );

        assertEquals( 2, br.getNumberOfBreakMax() );
        assertEquals( 4, br.getNumberOfBreakMin() );
    }

    @Test
    public void test_mistake_breaking_records() {
        int[] scores = {10, 5, 20, 20, 4, 5, 2, 1};
        BreakingRecords br = new BreakingRecords();
        br.setBreaksGame( scores );

        assertNotEquals( 2, br.getNumberOfBreakMax() );
        assertNotEquals( 3, br.getNumberOfBreakMin() );
    }

}