package StringCalculator.Factory;

import com.google.inject.Inject;

import java.util.ArrayList;

import StringCalculator.Validation.InumericValidation;
import StringCalculator.Entity.Number;

public class NumberFactory {
    private InumericValidation numericValidation;

    @Inject
    public NumberFactory(InumericValidation _numericValidation) {
        this.numericValidation = _numericValidation;
    }

    public ArrayList<Number> bulkMake(ArrayList<Byte> numericalList) {

        ArrayList<Number> numberObjectList = new ArrayList<Number>();
        for (Byte byteNumber : numericalList) {
            if (numericValidation.isInRange(byteNumber)) {
                Number numberObj = new Number(byteNumber);
                numberObjectList.add(numberObj);
            }
        }
        return numberObjectList;
    }
}
