import {defineStore} from 'pinia'
import {User} from '../common/types/userTypes'

export const useAuthStore = defineStore({
    id: 'auth',
    state: () => ({
        user: null as User | null,
        afterSuccessfulSignup: false as boolean,
    })
})