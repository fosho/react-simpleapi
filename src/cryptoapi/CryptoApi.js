import React, { Component } from 'react';
import axios from 'axios';
import './CryptoApi.css';

var NumberFormat = require('react-number-format');

class CryptoApi extends Component {
    constructor(props) {
        super(props);

        this.state = {
            tickerInput: [],
            // tickerOutput: [],
        }
    }

    onChange = (event) => {
        // this.setState({ tickerInput: event.target.value });
        alert("This button doesn't do anything.")
    }

    // handleSubmit = (event) => {
    //     axios.get(`https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC&tsyms=USD`)
    //         .then(res => {
    //             const tickerInput = res.data;
    //             // const tickerOutput = res.data;
    //             console.log(tickerInput);
    //             this.setState({ tickerInput: tickerInput });
    //         })
    // }

    componentDidMount() {
        axios.get(`https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC&tsyms=USD`)
            .then(res => {
                const tickerInput = res.data;
                console.log(tickerInput);
                this.setState({ tickerInput: tickerInput });
            });
    }

    render() {
        // const { tickerInput, tickerOutput } = this.state;
        return (
            <div id="CryptoApi">
                <h4>Bitcoin's Current Price</h4>

                {/* <form onSubmit={this.handleSubmit}>
                    <input onChange={this.onChange} />
                    <br></br>
                    <button>Submit</button>
                </form> */}

                {Object.keys(this.state.tickerInput).map((key) => (
                    <div id="crypto-container">
                        <span>{key}</span>
                        <span> <NumberFormat value={this.state.tickerInput[key].USD} displayType={'text'} decimalprecision={0} thousandSeparator={true} prefix={'$'} /> </span>
                    </div>
                ))}

            </div>
        );
    }
}

export default CryptoApi;