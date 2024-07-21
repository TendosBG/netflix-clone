import * as axios from "axios";

const instance = axios.default.create({
    baseURL: "https://api.themoviedb.org/3",
});

export default instance;