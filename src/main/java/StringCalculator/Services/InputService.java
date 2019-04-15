package StringCalculator.Services;


import java.util.ArrayList;

public class InputService implements IinputService {

    public ArrayList<Character> getAlphabeticalList(String[] characterList) {
        ArrayList<Character> alphabeticalList = new ArrayList();

        for (byte index = 0; index < characterList.length; index++) {
            if (Character.isLetter(characterList[index].charAt(0))) {
                alphabeticalList.add(characterList[index].charAt(0));
            }
        }
        return alphabeticalList;
    }

    public ArrayList getNumericalList(String[] characterList) {
        ArrayList<Byte> numericalList = new ArrayList();

        for (byte index = 0; index < characterList.length; index++) {
            if (isNumeric(characterList[index])) {
                numericalList.add(Byte.valueOf(characterList[index]));
            }
        }
        return numericalList;
    }

    private boolean isNumeric(String strNum) {
        return strNum.matches("-?\\d+(\\.\\d+)?");
    }
}
