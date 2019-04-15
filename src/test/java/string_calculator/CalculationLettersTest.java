package string_calculator;

import com.rdsysco.string_calculator.CalculationLetters;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;

import java.util.ArrayList;
import java.util.List;

public class CalculationLettersTest {

    @Test
    public void calculate()  {
        CalculationLetters calculationLetters = new CalculationLetters();
        List<String> letters =new ArrayList<>();
        letters.add("a");
        letters.add("b");
        letters.add("c");
        letters.add("a");
        letters.add("c");
        letters.add("a");
        calculationLetters.calculate(letters);
        String mostRepetitionsActual= calculationLetters.getMostRepetitionsChar();
        String mostRepetitionsAssertion="a";
        System.out.println("Most frequent character: " + calculationLetters.getMostRepetitionsChar()
                + "=>" + calculationLetters.getMostRepetitions());
        Assertions.assertTrue(mostRepetitionsActual.equals(mostRepetitionsAssertion));
    }
}
