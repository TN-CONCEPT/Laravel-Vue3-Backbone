import _ from 'lodash';
window._ = _;

/**
 * We'll load the axios HTTP library which allows us to easily issue requests
 * to our Laravel back-end. This library automatically handles sending the
 * CSRF token as a header based on the value of the "XSRF" token cookie.
 */

import axios from 'axios';
window.axios = axios;

/**
 * Global request axios configurations
 */
window.axios.defaults.withCredentials = true;
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
window.axios.defaults.headers.common['Accept'] = 'application/json';
window.axios.defaults.headers.common['X-CSRF-TOKEN'] = document.querySelector('meta[name="csrf-token"]').getAttribute('content');
window.axios.interceptors.response.use(null, error => {
    return Promise.reject(error); // <- important piece
});

/**
 * Automatically append the authorization token if the user is logged in
 */
window.axios.interceptors.request.use((config) => {
    let user = store.state.auth.user;

    if (user) {
        config.headers.Authorization = `Bearer ${user.token}`;
    }

    return config;
});