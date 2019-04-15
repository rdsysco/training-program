import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.runners.MockitoJUnitRunner;

import java.util.Map;

import static junit.framework.TestCase.assertEquals;
@RunWith(MockitoJUnitRunner.class)
public class PluseMinusUnitTest {
    private PlusMinusServic plusMinuseServic;

    @Before
    public void setup()
    {
        IPlusMinus plusMinus=new PlusMinus();
          plusMinuseServic=new PlusMinusServic(plusMinus);
    }
    @Test
    public void ServerRequestDataTest() throws Exception {
        int arr[] = {1, 1, 0, -1, -1};

          Assert.assertEquals(null,"{zero=1, negative=2, positive=2}",plusMinuseServic.getPlusMinus(arr));
    }
}
