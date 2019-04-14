import breakingtherecords.breakingRecords;
import plusminus.plusMinus;
import stringcalculator.stringCalculator;

public class Main {

    public static void main(String[] args) {

        breakingRecords br = new breakingRecords();
        br.input();
        br.output();

        System.out.println("\n###################");
        int[] numbers1 = {-4,3,-9,0,4,1};
        int[] numbers2 = {1,1,0,-1,-1};
        plusMinus pm = new plusMinus();
        pm.calculateFractions(numbers1);
        pm.printFractions();
        System.out.println("\n---------");
        pm.calculateFractions(numbers2);
        pm.printFractions();

        System.out.println("\n###################");
        stringCalculator sc = new stringCalculator("a,b,c,a,d,c,1,3,a,4,2,d,a,2,-1,-2,1");
        sc.output();

    }
}
