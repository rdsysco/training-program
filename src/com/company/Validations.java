package com.company;

public class Validations {

    public static boolean isNumeric(String strNum) {
        return strNum.matches("-?\\d+(\\.\\d+)?");
    }

    public static void betweenNumeric(int first, int end, int number) throws InvalidException {
        if (number < first || number > end) {
            throw new InvalidException("The number must be between " + first + " and " + end + "!");
        }
    }

    public static void checkAlphabet(String inputchar) throws InvalidException {
        boolean alphabet;
        alphabet = inputchar.matches("^([a-z])$");

        if (!alphabet) {
            throw new InvalidException("The entered char is not English alphabet!");
        }
    }
}
