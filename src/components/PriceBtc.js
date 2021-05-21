import React, { Component } from 'react'
import axios from 'axios'



export default class PriceBtc extends Component {
    constructor() {
        super();
        
        this.state = {
          baseUsd: 0,
          baseEur: 0,
        };
      }

    async componentDidMount() {
        const res = await axios.get("https://prices.mercury.cash/prices");
        
        var usdPrices = JSON.stringify(res.data.data.USD.BTC.base);
        this.setState({ baseUsd: usdPrices });
        var eurPrices = JSON.stringify(res.data.data.EUR.BTC.base);
        this.setState({ baseEur: eurPrices});
        console.log(this.state)
    };
    render() {
        return (
            <div className="container">
                <div className="brand m-5">
                    <h2>Precio del Bitcoin</h2>
                    </div>
                <div className="row">
                    <div className="col-sm-4">
                        <h3>PRECIO USD</h3> 
                    </div>
                    <div className="col-sm-8">
                        <li className="list-group-item">
                        <h3>$ {this.state.baseUsd}</h3>
                        </li>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-4">
                        <h3>PRECIO EUR</h3> 
                    </div>
                    <div className="col-sm-8">
                        <li className="list-group-item">
                        <h3>€ {this.state.baseEur}</h3>
                        </li>
                    </div>
                </div>
            </div>
        )
    }
}
