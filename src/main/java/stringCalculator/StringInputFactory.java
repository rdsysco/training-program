package stringCalculator;

import java.util.ArrayList;

public class StringInputFactory {

    public ArrayList<StringInput> make(String[] inputs){
        ArrayList<StringInput> stringInputs = new ArrayList<StringInput>();
        for (String input:inputs){
            stringInputs.add(new StringInput(input));
        }

        return stringInputs;
    }
}
