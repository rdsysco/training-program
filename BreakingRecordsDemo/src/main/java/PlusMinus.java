import java.util.HashMap;
import java.util.Map;


public class PlusMinus implements IPlusMinus{
    public Map<String, Integer> PlusMinusCalculattion(int[] arr) {

        int positive = 0;
        int negative = 0;
        int zero = 0;

        for (int i = 0; i < arr.length; i++) {

            if (arr[i] > 0) {
                positive++;
            } else if (arr[i] < 0) {
                negative++;
            } else {
                zero++;
            }
        }
        Map<String, Integer> aMap = new HashMap<String, Integer>();
        aMap.put("positive" , positive);
        aMap.put("negative" , negative);
        aMap.put("zero" , zero);
         
       return aMap;

    }

}
