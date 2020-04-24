import React from 'react';
import PropTypes from 'prop-types';


export default class Client extends React.Component {
    constructor(props) {
        super(props);
    }

    onClickDelete(event) {
        this.props.deleteClient(this.props._id);
    }

    onClickParMoi(event){
       //this.props.showDetail(this.props.id);
    }

    getsum(arr){
      let ar = arr;
      let sum =0;
      for (var i = 0; i < ar.length; i++) {
        sum += ar[i];
      }
      return sum;
    }

    render() {

        return (


            <tr className="client" id={this.props._id}>
                <td className="nom">{this.props.nom}</td>
                <td className="electricite">{this.getsum(this.props.electricite)*5}</td>
                <td className="gaz">{this.getsum(this.props.gaz)*5}</td>
                <td className="eau">{this.getsum(this.props.eau)*5}</td>
                <td>
                    <button type="button"  className="btn btn-danger center-block" onClick={this.onClickDelete.bind(this)}>Supprimer</button>
                </td>

                <td>
                    <button type ="button" className ="btn btn-danger center-block" onClick ={this.onClickParMoi.bind(this)}>Par Moi</button>
                </td>
            </tr>
        );
    }
}

Client.propTypes = {
    nom: PropTypes.string,
    electricite: PropTypes.array,
    gaz: PropTypes.array,
    eau:PropTypes.array
}
