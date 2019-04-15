import com.google.inject.AbstractModule;

public class ServerModule extends AbstractModule {
    @Override
    protected void configure() {

         bind(IScore.class).to(Score.class);
         bind(IPlusMinus.class).to(PlusMinus.class);


    }
}