package breakingTheRecords;

import java.util.List;

public interface ValidationInterface {
    boolean validateGameCount(short gameCount);
    boolean validateScoreNumber(List<Integer> arrayOfScore);
}
