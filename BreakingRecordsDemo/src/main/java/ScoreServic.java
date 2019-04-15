import com.google.inject.Inject;
import org.w3c.dom.ranges.RangeException;

public class ScoreServic {
    @Inject
    public ScoreServic(IScore _score) {
        this.score = _score;
    }

    private IScore score;

    public String requestData(int[] arr) {
        String result = "";
        try {
            result = score.getScore(arr);
        } catch (NumberFormatException e) {
            e.printStackTrace();
        } catch (RangeException e) {
            throw e;
        }
        return result;
    }
}
