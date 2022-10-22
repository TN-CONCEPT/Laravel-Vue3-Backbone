import NotFound from "../views/NotFound.vue";
import Home from "../views/Home.vue";

export const websiteRoutes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
        props: {title: 'Home Page', description: 'asd'}
    },
    {
        path: '/:pathMatch(.*)*', name: 'not-found', component: NotFound
    },
];
