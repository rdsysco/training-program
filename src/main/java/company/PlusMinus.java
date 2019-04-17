package company;

import javax.swing.*;
import java.text.DecimalFormat;

public class PlusMinus {

    private int countNumber = 0;
    private int countPositive = 0;
    private int countNegative = 0;
    private int countZero = 0;

    private double ratioPositive, ratioNegative, ratioZero;

    private Validations validate = new Validations();

    public void setCountNumber(int countNumber) {
        this.countNumber = countNumber;
    }

    public String getRatioPositive() {
        return customFormat( "0.000000", ratioPositive );
    }

    public String getRatioNegative() {
        return customFormat( "0.000000", ratioNegative );
    }

    public String getRatioZero() {
        return customFormat( "0.000000", ratioZero );
    }

    public void getNumbersFromUser(int[] integers) throws InvalidException {
        String strInput;
        for (int i = 0; i < countNumber; i++) {
            strInput = JOptionPane.showInputDialog( "Enter a Integer : " );
            integers[i] = Integer.parseInt( strInput );

            validate.betweenNumeric( -100, 100, integers[i] );
        }
    }

    public void setRatioIntegers(int[] integers) {
        for (int number : integers) {
            if (number < 0) {
                countNegative++;
            } else if (number > 0) {
                countPositive++;
            } else {
                countZero++;
            }
        }

        ratioPositive = (double) countPositive / (double) countNumber;
        ratioNegative = (double) countNegative / (double) countNumber;
        ratioZero = (double) countZero / (double) countNumber;
    }

    static public String customFormat(String pattern, double value) {
        DecimalFormat myFormatter = new DecimalFormat( pattern );
        String output = myFormatter.format( value );
        return output;
    }

    public void getRatioNumbers() {
        try {
            String strInput;

            strInput = JOptionPane.showInputDialog( "Please enter number of integers : " );
            countNumber = Integer.parseInt( strInput );
            validate.betweenNumeric( 0, 100, countNumber );

            int integers[] = new int[countNumber];

            getNumbersFromUser( integers );
            setRatioIntegers( integers );

            System.out.println( "The ratio of positive items is : " + getRatioPositive() );
            System.out.println( "The ratio of negative items is : " + getRatioNegative() );
            System.out.println( "The ratio of zero items is : " + getRatioZero() );

        } catch (Exception e) {
            System.out.println( e );
        }
    }

}
