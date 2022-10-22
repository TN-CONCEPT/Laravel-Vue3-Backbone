import _ from 'lodash';
import axios, {AxiosRequestConfig, AxiosRequestHeaders} from 'axios';
import {useAuthStore} from "./store/authStore";

window._ = _;

/**
 * We'll load the axios HTTP library which allows us to easily issue requests
 * to our Laravel back-end. This library automatically handles sending the
 * CSRF token as a header based on the value of the "XSRF" token cookie.
 */

/**
 * Global request axios configurations
 */
axios.defaults.withCredentials = true;
axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
axios.defaults.headers.common['Accept'] = 'application/json';
axios.defaults.headers.common['X-CSRF-TOKEN'] = document.querySelector('meta[name="csrf-token"]')?.getAttribute('content') ?? '';
axios.interceptors.response.use(undefined, error => {
    return Promise.reject(error); // <- important piece
});

/**
 * Automatically append the authorization token if the user is logged in
 */
axios.interceptors.request.use((config: AxiosRequestConfig) => {
    const authStore = useAuthStore();

    let user = authStore.user;

    if (user) {
        let headers: AxiosRequestHeaders | undefined = config.headers;

        if(headers) {
            headers.Authorization = `Bearer ${user.token}`;
        }
    }

    return config;
});