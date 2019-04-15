import com.google.inject.Guice;
import com.google.inject.Injector;

import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;
import java.util.Scanner;


public class Main {
    public static void main(String[] args) throws Exception {
        String strCalculator = "a,b,c,a,d,c,1,3,a,4,2,d,a,2,-1,-2,1";
        StringCalculator sc=new StringCalculator();
       String d= sc.getMostFrequentElement(strCalculator);
        Injector injector = Guice.createInjector(new ServerModule());
        ScoreServic scoreServic = injector.getInstance(ScoreServic.class);
        PlusMinusServic plusMinusServic=injector.getInstance(PlusMinusServic.class);
        int plusArr[] = {1, 1, 0, -1, -1};
        plusMinusServic.getPlusMinus(plusArr);
        int[] scoreArr = new int[]{10, 5, 20, 20, 4, 5, 2, 25, 10};
        System.out.println(scoreServic.requestData(scoreArr));

    }
}