package string_calculator;

import com.rdsysco.string_calculator.StringCalculator;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;

import java.lang.reflect.InvocationTargetException;
import java.lang.reflect.Method;
import java.util.*;

public class StringCalculatorTest {

    @Test
    public void calculate() throws NoSuchMethodException, InvocationTargetException, IllegalAccessException {
        StringCalculator stringCalculator = new StringCalculator();
        Method sortNumbersMethod = StringCalculator.class.getDeclaredMethod("sortNumbers",List.class);
        sortNumbersMethod.setAccessible(true);
        List<Integer> numbers =new ArrayList<>();
        numbers.add(-1);
        numbers.add(1);
        numbers.add(0);
        numbers.add(-1);
        numbers.add(2);
        numbers.add(3);
        List<Integer> sortedNumberActual= (List<Integer>) sortNumbersMethod.invoke(stringCalculator,numbers);
        List<Integer> sortedNumberAssertion=new ArrayList<>();
        sortedNumberAssertion.add(-1);
        sortedNumberAssertion.add(-1);
        sortedNumberAssertion.add(0);
        sortedNumberAssertion.add(1);
        sortedNumberAssertion.add(2);
        sortedNumberAssertion.add(3);
        Assertions.assertTrue(sortedNumberActual.equals(sortedNumberAssertion));
    }
}
