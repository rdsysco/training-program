import static org.junit.jupiter.api.Assertions.assertEquals;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import StringCalculator.Validation.NumericValidation;
import org.junit.jupiter.api.DisplayName;

@DisplayName("Numeric validation test")
class NumericValidationTest {
    private NumericValidation numericValidation;
    @BeforeEach
    void setup()
    {
        numericValidation = new NumericValidation();
    }

    @Test
    @DisplayName("Checking rang of number")
    void isInRangeReturnFalseGivenNumberLargerThanHundred() {
        //arrang
        byte number = 100;

        //act and assert
        assertEquals(numericValidation.isInRange(number) ,false);
    }

    @Test
    @DisplayName("Checking rang of number")
    void isInRangeReturnTrueGivenNumberLowerThanHundred() {
        //arrang
        byte number = 80;

        //act and assert
        assertEquals(numericValidation.isInRange(number) ,true);
    }

}
