import { createRouter, createWebHistory } from "vue-router";
import AppLayout from "../components/AppLayout.vue";
import DashBoard from "../views/Dashboard.vue";
import Products from "../views/Products.vue";
import Login from "../views/Login.vue";
import RequestPassword from "../views/RequestPassword.vue";
import ResetPassword from "../views/ResetPassword.vue";
import NotFound from "../views/NotFound.vue";
import store from "../store";

const routes = [
    {
        path: "/app",
        name: "app",
        component: AppLayout,
        meta: {
            requiresAuth: true,
        },
        children: [
            {
                path: "dashboard",
                name: "app.dashboard",
                component: DashBoard,
            },
            {
                path: "products",
                name: "app.products",
                component: Products,
            },
        ],
    },
    {
        path: "/login",
        name: "login",
        component: Login,
        meta: {
            requirersGuest: true,
        },
    },
    {
        path: "/request-password",
        name: "requestPassword",
        component: RequestPassword,
        meta: {
            requirersGuest: true,
        },
    },
    {
        path: "/reset-password",
        name: "resetPassword",
        component: ResetPassword,
        meta: {
            requirersGuest: true,
        },
    },
    {
        path: "/:pathMatch(.*)",
        name: "notfound",
        component: NotFound,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

router.beforeEach((to, from, next) => {
    if (to.meta.requiresAuth && !store.state.user.token) {
        next({ name: "login" });
    } else if (to.meta.requirersGuest && store.state.user.token) {
        console.log(to);
        next({ name: "app.dashboard" });
    } else {
        next();
    }
});

export default router;
