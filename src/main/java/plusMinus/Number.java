package plusMinus;

public class Number {
    private byte number;

    public Number(byte number){
        this.number = number;
    }

    public boolean isPositive(){
        if (number > 0) {
            return true;
        }

        return false;
    }

    public boolean isNegative(){
        if (number < 0) {
            return true;
        }

        return false;
    }

    public boolean isZero(){
        if (number == 0){
            return true;
        }

        return false;
    }

    public byte getNumber() {
        return number;
    }

    public void setNumber(byte number) {
        this.number = number;
    }
}
