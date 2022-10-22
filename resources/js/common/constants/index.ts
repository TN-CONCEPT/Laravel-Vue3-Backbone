const apiRoot = "/api"

export const Urls = {
    users: `${apiRoot}/users`,
    auth: `${apiRoot}/auth`,
}

export const Responses = {
    SUCCESS: 200,
    SUCCESSFULLY_CREATED: 201,
    UNAUTHORIZED: 401,
    NOT_FOUND: 404,
    SERVER_ERROR: 500,
    BAD_REQUEST: 422,
}
