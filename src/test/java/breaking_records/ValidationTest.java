package breaking_records;

import com.rdsysco.breaking_records.Validation;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

public class ValidationTest {

    @Test
    @DisplayName("numbersOfScoresMoreThanHighestNumber")
    public void validateNumbersOfScores_numbersOfScoresMoreThanHighestNumber() {
        Validation validation=new Validation();
        int numbersOfScores=2000;
        boolean result=validation.validateNumbersOfScores(numbersOfScores);
        Assertions.assertFalse(result);
    }

    @Test
    public void validateNumbersOfScores_numbersOfScoresLessThanLowerNumber() {
        Validation validation=new Validation();
        int numbersOfScores=0;
        boolean result=validation.validateNumbersOfScores(numbersOfScores);
        Assertions.assertFalse(result);
    }

    @Test
    public void validateNumbersOfScores_numbersOfScoresIsInRange() {
        Validation validation=new Validation();
        int numbersOfScores=50;
        boolean result=validation.validateNumbersOfScores(numbersOfScores);
        Assertions.assertTrue(result);
    }

    @Test
    public void validateNumbers_numbersMoreThanHighestNumber() {
        Validation validation=new Validation();
        int[] numbersOfScores={1,200_000_000};
        boolean result=validation.validateScores(numbersOfScores);
        Assertions.assertFalse(result);
    }

    @Test
    public void validateNumbers_numbersLessThanLowerNumber() {
        Validation validation=new Validation();
        int[] numbersOfScores={0,10};
        boolean result=validation.validateScores(numbersOfScores);
        Assertions.assertFalse(result);
    }

    @Test
    public void validateNumbers_numbersAreInRange() {
        Validation validation = new Validation();
        int[] numbersOfScores={1,2};
        boolean result = validation.validateScores(numbersOfScores);
        Assertions.assertTrue(result);
    }

}
