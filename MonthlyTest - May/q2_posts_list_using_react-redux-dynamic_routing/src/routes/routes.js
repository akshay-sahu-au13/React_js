import PATHS from "../config/webPaths";
import Home from "../containers/Home/Home";
import PostInfo from "../containers/PostInfo/PostInfo";

export const routes = [
    {exact: true, path: PATHS.HOME, component: Home},
    {exact: true, path: '/posts/:id', component: PostInfo}
]

