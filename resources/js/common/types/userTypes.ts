type User = {
    id: number
    username: string
    email: string
    token: string
    roles: [string]
}

type UserCredentials = {
    email: string
    password: string
}

export type { User, UserCredentials }
