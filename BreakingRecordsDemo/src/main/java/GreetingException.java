import javax.ejb.ApplicationException;

@ApplicationException
public class GreetingException extends RuntimeException {
    public GreetingException( String message) {
        super( message) ;
    }
}