import axiosClient from "../axios";

export function login({ commit }, data) {
    console.log("login action");
    return axiosClient.post("/login", data).then(({ data }) => {
        commit("setUser", data.user);
        commit("setToken", data.token);
        return data;
    });
}
