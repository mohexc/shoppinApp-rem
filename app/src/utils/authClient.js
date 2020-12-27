import Axios from "axios";

const tokenKey = "token";

const instance = Axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    headers: {
        // Authorization: localStorage.getItem(tokenKey),
        accepts: "application/json"
    },
});
console.log()

const authClient = {
    // login,
    // logout,
    // register,
    // getUserInfo,
    client: instance,
};

export default authClient;