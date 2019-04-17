package company;

public class InvalidException extends Exception {

    String errorMessage;

    public InvalidException(String errorMessage) {
        this.errorMessage = errorMessage;
    }

    @Override
    public String toString() {
        return this.errorMessage;
    }
}
