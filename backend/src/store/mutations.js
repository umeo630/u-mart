export function setUser(state, user) {
    console.log("setUser mutation");
    state.user.data = user;
}

export function setToken(state, token) {
    console.log("setToken mutation");
    state.user.token = token;
    if (token) {
        sessionStorage.setItem("TOKEN", token);
    } else {
        sessionStorage.removeItem("TOKEN");
    }
}
