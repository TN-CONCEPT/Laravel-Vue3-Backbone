import axios, {AxiosResponse} from 'axios'
import {Responses, Urls} from '../common/constants'
import {IEntity} from "../common/interfaces";
import router from "../router";
import toastService from "./toastService";
import {ServerErrorException, UnauthenticatedException, UnauthorizedException} from "../common/types/exceptions";

class Requests {
    url: string;

    constructor(url: string) {
        this.url = url;
    }

    async findAll(page: number = 0) {
        let response = await axios.get(`${this.url}?${page === 0 ? 'pagination' : 'page'}=${page}`)
            .then(result => result)
            .catch(err => err.response);

        return this.handleErrors(response);
    }

    async find(entityId: number) {
        let response = await axios.get(`${this.url}/${entityId}`)
            .then(result => result)
            .catch(err => err.response);

        return this.handleErrors(response);
    }

    async save(model: IEntity, config = {}) {
        let response = await axios.post(`${this.url}`, model, config)
            .then(result => result)
            .catch(err => err.response);

        return this.handleErrors(response);
    }

    async update(model: IEntity) {
        let response = await axios.put(`${this.url}/${model.id}`, model)
            .then(result => result)
            .catch(err => err.response);

        return this.handleErrors(response);
    }

    async delete(entityId: number) {
        let response = await axios.delete(`${this.url}/${entityId}`)
            .then(result => result)
            .catch(err => err.response);

        return this.handleErrors(response);
    }

    async sendCustomRequest({params = {}, config = {}, path = '', type = 'POST'} = {}) {
        const finalUrl = `${this.url}${path}`;
        let response = undefined;
        switch (type) {
            case 'POST':
                response = await axios.post(finalUrl, params, config)
                    .then(result => result)
                    .catch(err => err.response);
                break;
            case 'GET':
                response = await axios.get(finalUrl, config)
                    .then(result => result)
                    .catch(err => err.response);
                break;
            case 'PUT':
                response = await axios.put(finalUrl, params, config)
                    .then(result => result)
                    .catch(err => err.response);
                break;
            case 'DELETE':
                response = await axios.delete(finalUrl, config)
                    .then(result => result)
                    .catch(err => err.response);
                break;
            default:
                break;
        }

        return this.handleErrors(response);
    }

    private handleErrors(response: AxiosResponse) {
        try {
            if (response.status === Responses.UNAUTHORIZED) {
                switch (response.data.message) {
                    case 'Unauthenticated.':
                        throw new UnauthenticatedException();
                    case "Unauthorized.":
                        throw new UnauthorizedException();
                    default:
                        break;
                }
            } else if (response.status === Responses.SERVER_ERROR) {
                throw new ServerErrorException();
            }

            return response;
        } catch (e) {
            if (e instanceof UnauthorizedException) {
                //Refresh user info
                router.push('/');
            } else if (e instanceof UnauthenticatedException) {
                // logout user and redirect to homepage
            } else if (e instanceof ServerErrorException) {
                //TODO: add server error text
                toastService.error({title: '', subtitle: ''});

                return response;
            }
        }
    }

    private createUrl(entityId: number | undefined, page: number | undefined) {
        if (!entityId) {
            return this.url;
        }

        return
    }
}

export const requests = {
    users: new Requests(Urls.users),
    auth: new Requests(Urls.auth)
}