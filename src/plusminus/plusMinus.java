package plusminus;

public class plusMinus {

    private float positivesFraction;
    private float negativesFraction;
    private float zerosFraction;

    public void calculateFractions(int[] numbers)
    {

        int zerosCount=0, negativesCount=0, positivesCount=0;
        for (int number:numbers) {
            if(number==0){
                zerosCount++;
            }else if(number<0){
                negativesCount++;
            }else {
                positivesCount++;
            }
        }

        this.positivesFraction = (float)positivesCount / numbers.length;
        this.negativesFraction = (float)negativesCount / numbers.length;
        this.zerosFraction = (float)zerosCount / numbers.length;
    }

    public void printFractions()
    {
        System.out.format("%1.6f%n%1.6f%n%1.6f",this.positivesFraction,this.negativesFraction,this.zerosFraction);
    }
}
