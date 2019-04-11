import breakingTheRecords.Validation;
import breakingTheRecords.ValidationInterface;
import com.google.inject.AbstractModule;

public class AppServiceProvider extends AbstractModule{
    @Override
    protected void configure() {
        bind(ValidationInterface.class).to(Validation.class);
    }
}
