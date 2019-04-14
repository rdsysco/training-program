package stringCalculator;

public class StringInput {
    private String content;


    public StringInput(String input){
        this.content = input;
    }

    public boolean isNumeric(){
       return content.matches("-?\\d+(\\.\\d+)?");
    }

    public boolean isLetter(){
        if (Character.isLetter(content.charAt(0))){
            return true;
        }

        return false;
    }

    public String getContent() {
        return this.content;
    }
}
