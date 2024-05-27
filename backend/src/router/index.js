import { createRouter, createWebHashHistory } from "vue-router";
import DashBoard from "../views/Dashboard.vue";
import Login from "../views/Login.vue";
import RequestPassword from "../views/RequestPassword.vue";

const routes = [
    {
        path: "/dashboard",
        name: "dashboard",
        component: DashBoard,
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
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;
