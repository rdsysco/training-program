package breakingTheRecords;

import static org.junit.jupiter.api.Assumptions.assumeTrue;
import static org.junit.jupiter.api.Assumptions.assumeFalse;

import org.junit.jupiter.api.Order;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.TestInstance;

@TestInstance(TestInstance.Lifecycle.PER_CLASS)
public class ValidationUnitTest {
    private Validation validation;

    @BeforeAll
    void setup()
    {
        this.validation = new Validation();
    }

    @Test
    @Order(2)
    void validateGameCountGiveBigNumberReturnFalse() {
        short gameConut = 1001 ;
        boolean result = this.validation.validateGameCount(gameConut);

        assumeFalse(result);
    }

    @Test
    @Order(1)
    void validateGameCountGiveLessNumberReturnFalse() {
        short gameConut = 0 ;
        boolean result = this.validation.validateGameCount(gameConut);

        assumeFalse(result);
    }

    @Test
    public void validateGameCountGiveValidNumberReturnTrue() {
        short gameConut = 10 ;
        boolean result = this.validation.validateGameCount(gameConut);

        assumeTrue(result);
    }


}
