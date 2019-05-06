import { Application } from './Application';
import { ErrorDefault, NotificationDefault, RequestAxios, RequestFetch } from './extensions';
import { Error, Profile } from './modules';

const wow = new Application();

wow.use(
    'error',
    new ErrorDefault()
);

wow.use(
    'notification',
    new NotificationDefault({
        position: 'top left'
    })
);

wow.use(
    'request',
    new RequestAxios({
        baseURL: 'http://a.b/api',
        timeout: 1000,
        headers: {
            'X-Custom-Header': 'foobar'
        }
    })
);

wow.register(
    'profile',
    Profile,
    {
        route: '/profile'
    }
);

wow.register(
    'error',
    Error,
    {
        route: '/*'
    }
);

wow.start();