package plusMinus;

import java.util.ArrayList;

public class Ratio {

    private ArrayList<Number> numbers = new ArrayList<Number>();
    public RatioOutput calcRatio(){
        RatioOutput ratioOutput = new RatioOutput();
        byte positiveCount = 0;
        byte negativeCount = 0;
        byte zeroCount = 0;

        for(Number number:numbers){
            if (number.isPositive()){
                positiveCount++;
            }
            else if (number.isNegative()){
                negativeCount++;
            }
            else if (number.isZero()){
                zeroCount++;
            }
        }

        ratioOutput.positiveRatio = (float) positiveCount / numbers.size();
        ratioOutput.negativeRatio = (float) negativeCount / numbers.size();
        ratioOutput.zeroRatio = (float) zeroCount / numbers.size();

        return ratioOutput;
    }

    public ArrayList<Number> getNumbers() {
        return numbers;
    }

    public void setNumbers(ArrayList<Number> numbers) {
        this.numbers = numbers;
    }
}
