import React from 'react';

import ClientList from './clientList.js';
import PricesList from './pricesList.js';

/*
* define basic component List
*/

export default class Basic extends React.Component {
  constructor(props) {
    super(props);
    this.state = { prices : [] };
  }


  componentWillMount() {
       this.setState({prices: this.props.allPrices});
       // this.setState({clients: this.props.allClients});
   }


  render() {
    return(
      <div className = "root">
        <PricesList allPrices = {this.state.prices}/>
        <ClientList/>
      </div>
    );
  }
}
