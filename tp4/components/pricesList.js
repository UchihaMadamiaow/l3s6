import React from 'react';
import Prices from './price.js';

export default class PricesList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {prices: []};
    }

    componentWillMount() {
       this.setState({prices: this.props.allPrices});
   }

    modifyPri(pri) {
        console.log("received modify req for id :" + pri._id);

        let body = JSON.stringify(pri);
        let requestOptions = {method: 'PUT', headers: {"Content-Type": "application/json"}, body: body};
        fetch(`http://127.0.0.1:3000/pricesrest/${pri._id}`, requestOptions)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`update failed  : ${response.json.message}`);
                }
            })
            .catch(error => window.alert(error.message));
    }

    componentWillReceiveProps(nextProps) {
       this.setState({prices: nextProps.allPrices});
   }

    render() {

      let allPrices = this.state.prices;

      allPrices = allPrices.map(
          pri =>
              <Prices
                  {...pri}
                  modifyPri={(id) => this.modifyPri(id)}
                  key={pri._id}
              />
      )

      return(
        <div className = "priceList">
          <div className="text">
            Price de resource
            <table border = "1">
              <tr>
                 <th>Resource</th>
                 <th>Price</th>
               </tr>
              {allPrices}
            </table>

          </div>
        </div>
      );
    }
}
