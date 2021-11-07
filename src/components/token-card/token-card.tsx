import {Component} from 'react'
import QrCode from 'qrcode.react'
import './token-card.scss'
import { ConectorApi } from '../../integrations/api/conector.api'

export class TokenCard extends Component<{tokenName: string, tokenDescription: string,tokenCode: string}>{

    

    async processPayment(tokenCode: string){
        //ConectorApi.Instance().TokenCard.processPayment(tokenCode)
        alert(`Usted seleciono el ticket #${tokenCode}`)
    }

    render(){
        return(
            <div className='token-card'>
                <span>{this.props.tokenCode}</span>
                <QrCode className="card-img-top" value={this.props.tokenCode} renderAs='svg'/>
                <div className="details">
                <div className="details-name">
                    <p className='card-title'>Nombre</p>
                    <span className="card-text">{this.props.tokenName}</span>
                </div>
                <div className="details-description">
                    <p>Descripcion</p>
                    <span>{this.props.tokenDescription}</span>
                </div>
                </div>
                <button className="btn btn-outline-success" onClick={async (e)=>this.processPayment(this.props.tokenCode)}>Comprar</button>
            </div>
        )
    }
}