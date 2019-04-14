import stringCalculator.*;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Scanner;



public class StringCalculator {
    public static void main(String[] args){
        String inputString;
        ArrayList<StringInput> stringInputs = new ArrayList<StringInput>();
        ArrayList<Byte> sortedNumbers = new ArrayList<Byte>();
        FrequentCharacterOutput frequentCharacterOutput;

        Scanner input = new Scanner(System.in);
        System.out.println("Please insert Numbers: ");

        inputString = input.nextLine();
        String[] inputArray = inputString.split(",");

        StringInputFactory stringInputFactory = new StringInputFactory();
        stringInputs = stringInputFactory.make(inputArray);

        StringCalculation stringCalculation = new StringCalculation(stringInputs);

        sortedNumbers = stringCalculation.sortTheNumbers();

        frequentCharacterOutput = stringCalculation.mostFrequentCharacter();

        System.out.println(stringCalculation.getSumOfTheNumbers());
        System.out.println(sortedNumbers.toString());
        System.out.println(frequentCharacterOutput.character + " -> "+ frequentCharacterOutput.frequent);

    }
}
