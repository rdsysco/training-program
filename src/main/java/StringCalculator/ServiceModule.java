package StringCalculator;

import StringCalculator.Services.IinputService;
import StringCalculator.Services.InputService;
import StringCalculator.Validation.InumericValidation;
import StringCalculator.Validation.NumericValidation;
import com.google.inject.AbstractModule;

public class ServiceModule extends AbstractModule {
    @Override
    protected void configure() {

        bind(IinputService.class).to(InputService.class);
        bind(InumericValidation.class).to(NumericValidation.class);

    }
}
