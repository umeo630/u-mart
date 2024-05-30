import { createRouter, createWebHistory } from "vue-router";
import AppLayout from "../components/AppLayout.vue";
import DashBoard from "../views/Dashboard.vue";
import Products from "../views/Products.vue";
import Login from "../views/Login.vue";
import RequestPassword from "../views/RequestPassword.vue";
import ResetPassword from "../views/ResetPassword.vue";

const routes = [
    {
        path: "/app",
        name: "app",
        component: AppLayout,
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
    },
    {
        path: "/request-password",
        name: "requestPassword",
        component: RequestPassword,
    },
    {
        path: "/reset-password",
        name: "resetPassword",
        component: ResetPassword,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
