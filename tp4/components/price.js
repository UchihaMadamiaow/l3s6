import React from 'react';
import PropTypes from 'prop-types';


export default class Prices extends React.Component {
    constructor(props) {
        super(props);
    }

    getPri() {
        let newResource = this.inputResource.value;
        let newPrice = this.inputPrice.value;
        return {_id: this.props._id, resource: newResource, price: newPrice};
    }

    onClickModify(event) {
        this.props.modifyPri(this.getPri());
    }


    render() {
        return (
           <tr className="resourcePrice" id={this.props._id}>
              <td className ="resource" >{this.props.resource}</td>
              <td className = "price"><input ref={ input => this.inputPrice = input} defaultValue={this.props.price}/></td>
              <td>
                <button type="button" className="btn btn-primary center-block" onClick={this.onClickModify.bind(this)}>
                  Modifier
                </button>
              </td>
           </tr>
        );
    }
}

Prices.propTypes = {
    resource: PropTypes.string,
    price: PropTypes.number,
}
