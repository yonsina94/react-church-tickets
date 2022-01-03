import { Component } from "react";
import { Async } from "react-async";
import { ConectorApi } from "../../integrations/api/conector.api";
import { TokenCardDetails } from "../../integrations/api/endpoints/token-card/token-card.endpoint.interface";
import { TokenCard } from "../token-card/token-card";
import "./token-card-holder.scss";

export class TokenCardHolder extends Component<{ tokenMainCode: string }> {
  loadData = async (tokenMainCode: string) => {
    debugger;
    //const resp = await ConectorApi.Instance().TokenCard.getToken(tokenMainCode)
    const resp = {
      tokenName: "Boleto de prueba",
      tokenDescription: "Esto es un boleto de prueba",
      tokenMainCode: tokenMainCode,
      amount: 100,
    };

    if (/*resp.status >= 200 && resp.status < 300*/ resp) {
      const amount = /*resp.data.amount;*/ resp.amount;

      let codes: Array<string> = [];

      for (let i = 1; i <= amount; i++) {
        const sec = Array<string>(amount.toString().length).fill("0");

        for (let x = 0; x < i.toString().length; x++) {
          sec[sec.length - 1 - x] = `${Array.from(i.toString()).reverse()[x]}`;
        }

        codes.push(sec.reduce((prev, current) => prev + current));
      }
      return { codes, details: resp };
    } else {
      return { codes: [], details: resp };
    }
  };

  render() {
    const code = this.props.tokenMainCode;
    return (
      <div className="holder">
        <Async promise={this.loadData(code)}>
          <Async.Pending>Loading...</Async.Pending>
          <Async.Fulfilled<{ codes: string[]; details: TokenCardDetails }>>
            {(data) => (
              <div>
                {data.codes.map((v) => (
                  <div className="holder-container">
                    <TokenCard
                      tokenName={/*resp.data.tokenName*/ data.details.tokenName}
                      tokenDescription={
                        /*resp.data.tokenDescription*/ data.details
                          .tokenDescription
                      }
                      tokenCode={`${
                        /*resp.data.tokenMainCode*/ data.details.tokenMainCode
                      }-${v}`}
                    />
                  </div>
                ))}
              </div>
            )}
          </Async.Fulfilled>
          <Async.Rejected>
            {(error) => `Something went wrong: ${error.message}`}
          </Async.Rejected>
        </Async>
      </div>
    );
  }
}
