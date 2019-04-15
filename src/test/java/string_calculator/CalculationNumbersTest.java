package string_calculator;

import com.rdsysco.string_calculator.CalculationNumbers;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;

import java.lang.reflect.InvocationTargetException;
import java.lang.reflect.Method;
import java.util.ArrayList;
import java.util.List;

public class CalculationNumbersTest {

    @Test
    public void sortNumbers() throws NoSuchMethodException, InvocationTargetException, IllegalAccessException {
        CalculationNumbers calculationNumbers = new CalculationNumbers();
        Method sortNumbersMethod = CalculationNumbers.class.getDeclaredMethod("sortNumbers", List.class);
        sortNumbersMethod.setAccessible(true);
        List<Integer> numbers = new ArrayList<>();
        numbers.add(-1);
        numbers.add(1);
        numbers.add(0);
        numbers.add(-1);
        numbers.add(2);
        numbers.add(3);
        List<Integer> sortedNumberActual = (List<Integer>) sortNumbersMethod.invoke(calculationNumbers, numbers);
        List<Integer> sortedNumberAssertion = new ArrayList<>();
        sortedNumberAssertion.add(-1);
        sortedNumberAssertion.add(-1);
        sortedNumberAssertion.add(0);
        sortedNumberAssertion.add(1);
        sortedNumberAssertion.add(2);
        sortedNumberAssertion.add(3);
        Assertions.assertTrue(sortedNumberActual.equals(sortedNumberAssertion));
    }

    @Test
    public void calculate() {
        CalculationNumbers calculationNumbers = new CalculationNumbers();
        List<Integer> numbers = new ArrayList<>();
        numbers.add(-1);
        numbers.add(1);
        numbers.add(0);
        numbers.add(-1);
        numbers.add(2);
        numbers.add(3);
        calculationNumbers.calculate(numbers);
        int sumActual = calculationNumbers.getSum();
        int sumAssertion = 4;
        System.out.println(sumActual);
        Assertions.assertTrue(sumActual == sumAssertion);
    }
}
