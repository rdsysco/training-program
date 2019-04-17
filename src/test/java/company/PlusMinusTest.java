package company;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

public class PlusMinusTest {

    @Test
    public void test_ratio_of_positive() {
        PlusMinus pm = new PlusMinus();
        int integers[] = {-4, 3, -9, 0, 4, 1};
        pm.setCountNumber( integers.length );
        pm.setRatioIntegers( integers );
        assertEquals( "0.500000", pm.getRatioPositive() );
    }

    @Test
    public void test_ratio_of_negative() {
        PlusMinus pm = new PlusMinus();
        int integers[] = {-4, 3, -9, 0, 4, 1};
        pm.setCountNumber( integers.length );
        pm.setRatioIntegers( integers );
        assertEquals( "0.333333", pm.getRatioNegative() );
    }

    @Test
    public void test_ratio_of_zero() {
        PlusMinus pm = new PlusMinus();
        int integers[] = {-4, 3, -9, 0, 4, 1};
        pm.setCountNumber( integers.length );
        pm.setRatioIntegers( integers );
        assertEquals( "0.166667", pm.getRatioZero() );
    }

}
