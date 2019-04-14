package plusMinus;

import com.google.inject.AbstractModule;
import plusMinus.validation.Validation;
import plusMinus.validation.ValidationInterface;

public class PlusMinusServiceProvider extends AbstractModule{
    @Override
    protected void configure() {
        bind(ValidationInterface.class).to(Validation.class);
    }
}
