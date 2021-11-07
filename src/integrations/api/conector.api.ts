import Axios, { AxiosInstance } from "axios";
import { TokenCardEndpoint } from "./endpoints/token-card/token-card.endpoint";

export class ConectorApi{
    private instance: AxiosInstance;
    private constructor(){
        debugger;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   
        this.instance = Axios.create({baseURL: `${process.env.REACT_APP_API_URL}`});
        this.TokenCard = new TokenCardEndpoint(this.instance)
    }

    TokenCard: TokenCardEndpoint;

    public static Instance(){
        return new ConectorApi();
    }
}