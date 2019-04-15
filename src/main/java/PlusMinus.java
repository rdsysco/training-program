import com.google.inject.Guice;
import com.google.inject.Injector;
import plusMinus.*;
import plusMinus.validation.ValidationOutput;

import java.util.Arrays;
import java.util.List;
import java.util.Scanner;
import java.util.stream.Collectors;

public class PlusMinus {
    public static void main(String[] args){
        byte numberCount = 0;
        String numberInput;
        RatioOutput ratioOutput;

        ValidationOutput validationOutput = new ValidationOutput();

        Scanner numberCountInput = new Scanner(System.in);
        Scanner numbersInput = new Scanner(System.in);

        Injector injector = Guice.createInjector(new PlusMinusServiceProvider());
        NumberFactory numberFactory = injector.getInstance(NumberFactory.class);
        Ratio ratio = new Ratio();

        do {


            System.out.println("Please insert count of the numbers (0 for exit): ");

            try {
                numberCount = Byte.valueOf(numberCountInput.next());
            } catch (Exception e) {
                System.out.println("The count of numbers is out of range (0 - 100)");
                System.exit(0);
            }

            System.out.println("Please insert Numbers: ");
            numberInput = numbersInput.nextLine();

            List<Byte> arrayOfNumbers = Arrays.stream(numberInput.split(" "))
                    .map(Byte::parseByte)
                    .collect(Collectors.toList());

            validationOutput = numberFactory.make(numberCount, arrayOfNumbers);

            if (validationOutput.message != "") {
                System.out.println(validationOutput.message);
                System.exit(0);
            }

            ratio.setNumbers(validationOutput.numbers);
            ratioOutput = ratio.calcRatio();

            System.out.printf("%.6f", ratioOutput.positiveRatio);
            System.out.print("\n\r");
            System.out.printf("%.6f", ratioOutput.negativeRatio);
            System.out.print("\n\r");
            System.out.printf("%.6f", ratioOutput.zeroRatio);
            System.out.print("\n\r");

        }while (numberCount != 0);
    }
}
