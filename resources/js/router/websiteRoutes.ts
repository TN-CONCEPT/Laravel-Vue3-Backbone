import NotFound from "../views/NotFoundPage.vue"
import Home from "../views/HomePage.vue"
import { Pages } from "../common/constants"

export const websiteRoutes = [
    {
        path: "/",
        name: Pages.HOME,
        component: Home,
        props: { title: "Home Page", description: "asd" },
    },
    {
        path: "/not-found",
        name: Pages.NOT_FOUND,
        component: NotFound,
    },
    {
        path: "/:pathMatch(.*)*",
        name: Pages.NOT_FOUND,
        component: NotFound,
    },
]
