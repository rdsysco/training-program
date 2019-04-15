import static org.junit.jupiter.api.Assertions.assertEquals;

import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import StringCalculator.Validation.NumericValidation;

public class NumericValidationTest {
    private NumericValidation numericValidation;
    @BeforeEach
    void setup()
    {
        numericValidation = new NumericValidation();
    }

    @Test
    void isInRangeReturnFalseGivenNumberLargerThanHundred() {
        //arrang
        byte number = 100;

        //act and assert
        assertEquals(numericValidation.isInRange(number) ,false);
    }

}
