import StringCalculator.Entity.Number;
import StringCalculator.Services.NumberCalc;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import static org.mockito.Mockito.*;


import java.util.ArrayList;

import static org.junit.jupiter.api.Assertions.*;

public class NumberCalcTest {
    private NumberCalc numberCalc;

    @BeforeEach
    void setup() {
        numberCalc = new NumberCalc();
    }

    @Test
    void sortNumberReturnSortedArrayGivenNumericArray() {
        //arrange
        NumberCalc numberCalcMock = mock(NumberCalc.class);
        ArrayList<Number> numberObjectList = new ArrayList<>();
        Number numberObj = new Number(8);
        numberObjectList.add(numberObj);
        int[] numberArray = {4, 8, 3, 9, -99, -8, -60};
        int[] sortedArray = {-99, -60, -8, 3, 4, 8, 9};
        //act
        when(numberCalcMock.getArrayNumberOfArrayList(numberObjectList)).thenReturn(numberArray);
        when(numberCalcMock.sortNumber(numberObjectList)).thenCallRealMethod();

        //assert
        assertArrayEquals(sortedArray, numberCalcMock.sortNumber(numberObjectList));
    }

    @Test
    void getArrayNumberOfArrayListReturnArrayGivenArrayList()
    {
        //arrange
        ArrayList<Number> numberObjectList = new ArrayList<>();
        Number numberObj = new Number(8);
        numberObj = new Number(8);
        numberObjectList.add(numberObj);
        numberObj = new Number(-99);
        numberObjectList.add(numberObj);
        numberObj = new Number(4);
        numberObjectList.add(numberObj);
        int[] numberArray = {8,-99,4};

        //assert
        assertArrayEquals(numberCalc.getArrayNumberOfArrayList(numberObjectList),numberArray);
    }

}
