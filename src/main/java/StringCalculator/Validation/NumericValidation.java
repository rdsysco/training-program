package StringCalculator.Validation;

public class NumericValidation implements InumericValidation{
    public boolean isInRange(byte number) {
        if ((number > -100) && (number < 100)) {
            return true;
        }
        return false;
    }
}
