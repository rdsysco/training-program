package breakingTheRecords;

import java.util.List;

public class Validation implements ValidationInterface {


    public boolean validateGameCount(short gameCount){
        if (gameCount > 0 && gameCount < 1000) {
            return true;
        }

        return false;
    }

    public boolean validateScoreNumber(List<Integer> arrayOfScore){

        for (Integer score:arrayOfScore){
            if(score < 0 || score > 100000000){
                return false;
            }
        }

        return true;
    }
}
