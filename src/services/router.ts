import nyro, { ResponseType } from 'nyro';

export default class Router {
    static async request(
        method: 'GET' | 'POST' | 'PUT' | 'DELETE',
        url: string,
    ) {
       return (nyro({
            method,
            url,
            responseType: ResponseType.Json
        }).then((response) => {
            return response.body;
        }).catch((error) => {
            throw new Error(error);
        })) as Promise<any>;
    }
};
