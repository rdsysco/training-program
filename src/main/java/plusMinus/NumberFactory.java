package plusMinus;

import java.util.ArrayList;
import java.util.List;
import com.google.inject.Inject;
import plusMinus.validation.ValidationInterface;
import plusMinus.validation.ValidationOutput;

public class NumberFactory {

    private ValidationInterface validation;

    @Inject
    public NumberFactory(ValidationInterface validation){
        this.validation = validation;
    }

    public ValidationOutput make(byte numberCount, List<Byte> arrayOfNumbers){
        ValidationOutput validationOutput = new ValidationOutput();
        validationOutput.message = "";

        ArrayList<Number> numbers = new ArrayList<Number>();
        if (!this.validation.numberCountsValidator(numberCount, arrayOfNumbers.size())){
            validationOutput.message = "The count of numbers not matched";
            return validationOutput;
        }

        if (!this.validation.rangeOfCountValidator(numberCount)){
            validationOutput.message = "The count of numbers is out of range (0 - 100)";
            return validationOutput;
        }

        for (byte i = 0; i < numberCount; i++)
        {
            if(!this.validation.numberValidator(arrayOfNumbers.get(i))){
                validationOutput.message = "one of the entered number is out of range (-100 - 100)";
            }
            numbers.add(new Number(arrayOfNumbers.get(i)));
        }

        validationOutput.numbers = numbers;
        return validationOutput;
    }
}
