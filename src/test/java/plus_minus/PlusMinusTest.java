package plus_minus;

import com.rdsysco.plus_minus.PlusMinus;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;

import java.util.Arrays;

public class PlusMinusTest {

    @Test
    public void getNumbers() {
        PlusMinus plusMinus = new PlusMinus();
        String numberStr="1 1 0 -1 -1";
        int numberLength=5;
        int[] numbersActual = plusMinus.getNumbers(numberStr,numberLength);
        int[] numbersAssertion = {1,1,0,-1,-1};
        Assertions.assertTrue(Arrays.equals(numbersActual,numbersAssertion));
    }

    @Test
    public void getNumber_mismatchLengthNumbers() {
        PlusMinus plusMinus = new PlusMinus();
        String numberStr="1 1 0 -1 -1";
        int lengthNumber=4;
        int[] numbersActual = plusMinus.getNumbers(numberStr,lengthNumber);
        Assertions.assertTrue(Arrays.equals(numbersActual, null));
    }

    @Test
    public void getNumber_wrongFormatNumbers() {
        PlusMinus plusMinus = new PlusMinus();
        String numberStr="1.1 1 0 -1 -1";
        int lengthNumber=5;
        int[] numbersActual = plusMinus.getNumbers(numberStr,lengthNumber);
        Assertions.assertTrue(Arrays.equals(numbersActual, null));
    }

    @Test
    public void calculatePlusMinus() {
        PlusMinus plusMinus = new PlusMinus();
        int[] numbers = {1,1,0,-1,-1};
        float[] recordActual=plusMinus.calculatePlusMinus(numbers);
        float[] recordAssertion = {0.400000f,0.400000f,0.200000f};
        Assertions.assertTrue(Arrays.equals(recordActual,recordAssertion));
    }
}
