import PATHS from '../config/webPaths';
import Home from '../containers/Home';
import Profile from  '../containers/Profile';
import PageNotFound from '../containers/PageNotFound';
import Login from '../containers/Sign In'

const ROUTES = [
    {
        exact:true, path:PATHS.HOME, component: Home
    },

    {
        exact: true, path: PATHS.PROFILE, component: Profile
    },

    {
        exact: true, path: PATHS.LOGIN, component: Login
    },

    {
        exact: true, path: "*", component: PageNotFound
    }
];

export default ROUTES;