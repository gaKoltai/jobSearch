import axios from "axios";

const API_URL = "https://ghubjobscorsproxy.herokuapp.com/https://jobs.github.com";
const TIMEOUT = 10000;

const instance = axios.create({
    baseURL: API_URL,
    timeout: TIMEOUT,
    headers: { "Content-Type": "application/json" },
});

/*

const isHandlerEnabled = (config = {}) => {
    return config.hasOwnProperty("handlerEnabled") && !config.handlerEnabled ? false : true;
};

//request interceptor, add headers
const requestHandler = (request) => {
    if (isHandlerEnabled(request)) {
    }
    return request;
};

//response interceptor anything outside 2xx range
const errorHandler = (error) => {
    if (isHandlerEnabled(error.config)) {
        if (error.response) {
            if (error.response.status === 500) {
                history.push("/error");
            }
        } else if (error.request) {
            history.push("/error");
        } else {
            history.push("/error");
        }
    }
    return Promise.reject({ ...error });
};

//response interceptor anything inside 2xx range
const successHandler = (response) => {
    if (isHandlerEnabled(response.config)) {
    }
    return response;
};

export const setup = {
    setupInterceptors: () => {
        instance.interceptors.request.use((request) => requestHandler(request));

        instance.interceptors.response.use(
            (response) => successHandler(response),
            (error) => errorHandler(error)
        );
    },
};

*/

export default instance;
