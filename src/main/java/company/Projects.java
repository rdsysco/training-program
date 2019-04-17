package company;

public class Projects {

    public static void main(String[] args) {
        PlusMinus p2 = new PlusMinus();
        p2.getRatioNumbers();

        System.out.println( "---------------------------------------------" );

        StringCalculator sc = new StringCalculator();
        sc.useStringCalculator();

        System.out.println( "---------------------------------------------" );

        BreakingRecords br = new BreakingRecords();
        br.getBreakingTheRecords();
    }
}
