import java.util.*;

import static org.hibernate.query.criteria.internal.ValueHandlerFactory.isNumeric;

public class StringCalculator implements IStringCalculator {

   public String getMostFrequentElement(String strCalculator)
    {
        int count = 1, tempCount;
        String[] strArray=strCalculator.split(",");
        String popular = strArray[0];
        String temp = "";
        List<String> intList = new ArrayList<String>();
        int total = 0;
        for (int i = 0; i < (strArray.length - 1); i++)
        {
            temp = strArray[i];
            tempCount = 1;
            for (int j = 0; j < strArray.length; j++)
            {
                if (temp == strArray[j])
                    ++tempCount;
            }

            if(isDigit(strArray[i]))
            {
                total+=Integer.parseInt(strArray[i]);
                intList.add(strArray[i]);
            }
            if (tempCount > count)
            {
                popular = temp;
                count = tempCount;
            }
        }
        Collections.sort(intList);
        return popular + "-->"+total+" "+ intList;
    }
    private boolean isDigit(String str) {
        try {
            Double.parseDouble(str);
            return true;
        } catch(NumberFormatException e){
            return false;
        }
    }

}
