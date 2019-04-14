package breakingTheRecords;

import com.google.inject.AbstractModule;

public class BreakingTheRecordsServiceProvider extends AbstractModule{
    @Override
    protected void configure() {
        bind(ValidationInterface.class).to(Validation.class);
    }
}
