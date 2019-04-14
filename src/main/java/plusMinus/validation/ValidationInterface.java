package plusMinus.validation;

import java.util.ArrayList;

public interface ValidationInterface {
    boolean rangeOfCountValidator(byte numberCount);
    boolean numberValidator(byte number);
    boolean numberCountsValidator(byte numberCount, int numbers);
}
