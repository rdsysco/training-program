import com.google.inject.Inject;

import java.util.HashMap;
import java.util.Map;

public class PlusMinusServic {
    private IPlusMinus plusMinus;

    @Inject
    public PlusMinusServic(IPlusMinus _pludMinus) {
        plusMinus = _pludMinus;
    }

    public Map<String, Integer> getPlusMinus(int[] arr) throws Exception {
        Map<String, Integer> aMap = new HashMap<String, Integer>();
        try {
            aMap = plusMinus.PlusMinusCalculattion(arr);
            float positive = (float) aMap.get("positive") / arr.length;
            float negative = (float) aMap.get("negative") / arr.length;
            float zero = (float) aMap.get("zero") / arr.length;
            System.out.format("%.6f\n", (float) positive);
            System.out.format("%.6f\n", (float) negative);
            System.out.format("%.6f\n", (float) zero);
        } catch (Exception e) {
            throw e;
        }
        return aMap;
    }
}