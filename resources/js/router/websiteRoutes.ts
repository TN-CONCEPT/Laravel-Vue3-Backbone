import NotFound from "../views/NotFoundPage.vue"
import Home from "../views/HomePage.vue"

export const websiteRoutes = [
    {
        path: "/",
        name: "Home",
        component: Home,
        props: { title: "Home Page", description: "asd" },
    },
    {
        path: "/:pathMatch(.*)*",
        name: "not-found",
        component: NotFound,
    },
]
