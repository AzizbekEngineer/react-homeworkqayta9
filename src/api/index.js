import axios from "axios";

const MainUrl = axios.create({
    baseURL: "https://fakestoreapi.com/",
    // baseURL: "https://dummyjson.com/",
});

export default MainUrl;
