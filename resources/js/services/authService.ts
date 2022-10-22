import {User, UserCredentials} from '../common/types/userTypes';
import axios from "axios";
import {Responses, Urls} from "../common/constants";
import {useAuthStore} from "../store/authStore";
import router from "../router";

export async function login(userCredentials: UserCredentials) {
    let res = await axios.post(`${Urls.auth}/login`, userCredentials)
        .then(r => r)
        .catch(err => err.response);

    let user: User = res.data.user;

    if (res.status === Responses.SUCCESS && res.data.user) {
        const authStore = useAuthStore();

        authStore.$patch({user: user, afterSuccessfulSignup: true});
    } else if (res.status === Responses.SERVER_ERROR) {
        //TODO: Error handling
    }
}

export async function logout() {
    //logout user on the backend
    let result = await axios.post(`${Urls.auth}/logout`)
        .then(res => res.status)
        .catch(error => error.response);

    //logout user on the frontend
    let authStore = useAuthStore();
    authStore.$patch({user: null});

    await router.push(result === 200 ? '/' : '/error/server');
}