package StringCalculator;

import StringCalculator.Entity.Alphabet;
import StringCalculator.Factory.AlphabetFactory;
import StringCalculator.Factory.NumberFactory;
import StringCalculator.Services.AlphabetService;
import StringCalculator.Services.IinputService;
import StringCalculator.Services.InputService;
import StringCalculator.Entity.Number;

import java.util.ArrayList;
import java.util.Scanner;

import StringCalculator.Services.NumberCalc;
import com.google.inject.Guice;
import com.google.inject.Injector;
import com.google.inject.Inject;


public class StringCalculator {
    public IinputService inputService;

    @Inject
    public StringCalculator(IinputService inputService) {
        inputService = inputService;
    }

    public static void main(String[] args) {
        ArrayList<Character> alphabeticalList = new ArrayList();
        ArrayList<Byte> numericalList = new ArrayList();
        ArrayList<Number> numberObjectList = new ArrayList<Number>();
        ArrayList<Alphabet> alphabetObjectList = new ArrayList<Alphabet>();

        Scanner scannerObj = new Scanner(System.in);
        System.out.println("Please enter your string please:");
        String inputString = scannerObj.nextLine();
        String characterList[] = inputString.split(",");

        Injector injector = Guice.createInjector(new ServiceModule());
        InputService inputService = injector.getInstance(InputService.class);

        alphabeticalList = inputService.getAlphabeticalList(characterList);
        numericalList = inputService.getNumericalList(characterList);

        NumberFactory numberFactory = injector.getInstance(NumberFactory.class);
        numberObjectList = numberFactory.bulkMake(numericalList);

        AlphabetFactory alphabetFactory = injector.getInstance(AlphabetFactory.class);
        alphabetObjectList = alphabetFactory.bulkMake(alphabeticalList);

        NumberCalc numberCalc = injector.getInstance(NumberCalc.class);
        int sum = numberCalc.getSum(numberObjectList);
        System.out.println("Sum of numbers equals: " + sum);

        int[] sortednumbers = numberCalc.sortNumber(numberObjectList);
        System.out.println("Sorted list equals:");
        for (byte index = 0; index < sortednumbers.length; index++) {
            System.out.print(sortednumbers[index] + " ");
        }

        AlphabetService alphabetService = injector.getInstance(AlphabetService.class);
        Alphabet mostFrecenceCharacter = alphabetService.getMostFrequentCharacter(alphabetObjectList);
        System.out.format("%n The most frequent character is:" + mostFrecenceCharacter.getCharacter() + " -> " + mostFrecenceCharacter.getFrequency());
    }
}
