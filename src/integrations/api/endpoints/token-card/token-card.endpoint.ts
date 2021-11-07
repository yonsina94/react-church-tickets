import { AxiosInstance } from "axios";
import { EndpointApi } from "../../conector.api.abstract";
import { TokenCardDetails, TokenCardPaymentResponse } from "./token-card.endpoint.interface";

export class TokenCardEndpoint extends EndpointApi('/token-cards') {

    public async getToken(tokenMainCode: string){
        return await this.instance.get<TokenCardDetails>(`${this.controllerName}/byCode/${tokenMainCode}`)
    }

    public async setToken(details: TokenCardDetails){
        return await this.instance.post<{success: true, data: TokenCardDetails & {id:string}} | {success: false, message: string} >(`${this.controllerName}/`,details)
    }

    public async processPayment(tokenCode: string){
        return await this.instance.post<TokenCardPaymentResponse>(`${this.controllerName}/process-payment`,{tokenCode})
    }
}