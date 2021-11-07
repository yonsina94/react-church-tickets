import { AxiosInstance } from "axios";

export function EndpointApi(controllerName: string){
    return class BaseEndpointApi{
        protected readonly controllerName = controllerName;
        constructor(protected instance: AxiosInstance){}
    }
}