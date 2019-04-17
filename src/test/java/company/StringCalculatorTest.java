package company;

import java.util.ArrayList;
import java.util.Collections;
import java.util.Iterator;
import java.util.List;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

public class StringCalculatorTest {

    @Test
    public void test_sort_numbers() {
        StringCalculator sc = new StringCalculator();
        List<Integer> integerInputs = new ArrayList<Integer>();

        integerInputs.add( 2 );
        integerInputs.add( -7 );
        integerInputs.add( 4 );

        sc.getSortedList( integerInputs );

        assertEquals( " -7 2 4", sc.getSortedList() );
    }

    @Test
    public void test_most_frequent_character() {
        StringCalculator sc = new StringCalculator();
        String stringInputs = "addbdcda";

        sc.getMostFrequentCharacter( stringInputs );

        assertEquals( 4, sc.getMaxFrequent() );
        assertEquals( 'd', sc.getMaxChar() );
    }

}
