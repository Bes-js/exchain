declare class Router {
    static request(method: 'GET' | 'POST' | 'PUT' | 'DELETE', url: string): Promise<any>;
}

export { Router as default };
