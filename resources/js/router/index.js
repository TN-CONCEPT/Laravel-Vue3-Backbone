import * as VueRouter from 'vue-router';
import {websiteRoutes} from "./WebsiteRoutes";

const router = VueRouter.createRouter({
    history: VueRouter.createWebHistory(),
    routes: [...websiteRoutes],
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition
        } else if (to.hash) {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve({
                        el: to.hash,
                        behavior: 'smooth',
                    })
                }, 500);
            });
        } else {
            return {top: 0};
        }
    },
});

export default router
