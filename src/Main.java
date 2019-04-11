import plusminus.*;
public class Main {

    public static void main(String[] args) {

        int[] numbers1 = {-4,3,-9,0,4,1};
        int[] numbers2 = {1,1,0,-1,-1};
        plusMinus pm = new plusMinus();
        pm.calculateFractions(numbers1);
        pm.printFractions();
        System.out.println("\n---------");
        pm.calculateFractions(numbers2);
        pm.printFractions();

    }
}
