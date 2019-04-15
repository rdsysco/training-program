package plus_minus;

import com.rdsysco.plus_minus.Validation;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;

public class ValidationTest {

    @Test
    public void validateNumbersLength_numbersLengthIsNotInRange() {
        Validation validation=new Validation();
        String numberLength="0";
        boolean result=validation.validateNumbersLength(numberLength);
        Assertions.assertFalse(result);
    }

    @Test
    public void validateNumbersLength_numbersLengthIsInRange() {
        Validation validation=new Validation();
        String numberLength="2";
        boolean result=validation.validateNumbersLength(numberLength);
        Assertions.assertTrue(result);
    }

    @Test
    public void validateNumbers_numbersIsInRange() {
        Validation validation = new Validation();
        int[] numbers = {1,1,0,-1,-1};
        boolean result = validation.validateNumbers(numbers);
        Assertions.assertTrue(result);
    }

    @Test
    public void validateNumbers_numbersIsNotInRange() {
        Validation validation = new Validation();
        int[] numbers = {1,1,0,-1,-101};
        boolean result = validation.validateNumbers(numbers);
        Assertions.assertFalse(result);
    }
}
