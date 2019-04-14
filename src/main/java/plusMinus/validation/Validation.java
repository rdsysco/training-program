package plusMinus.validation;

import java.util.ArrayList;

public class Validation implements ValidationInterface {

    @Override
    public boolean rangeOfCountValidator(byte numberCount) {
        if(numberCount < 0 || numberCount > 100){
            return false;
        }

        return true;
    }

    @Override
    public boolean numberValidator(byte number) {
        if(number < -100 || number > 100){
            return false;
        }

        return true;
    }

    @Override
    public boolean numberCountsValidator(byte numberCount, int numbers) {
        if(numberCount != numbers){
            return false;
        }

        return true;
    }
}
