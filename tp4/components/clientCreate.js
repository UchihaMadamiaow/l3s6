import React from 'react';
import PropTypes from 'prop-types';


export default class ClientCreate extends React.Component {
    constructor(props) {
        super(props);
    }

    getNumByMonth(){
      var arr=[];
      for (var i = 0; i < 12; i++) {
        arr.push(Math.floor(Math.random()*100))
      }
      return arr;
    }

    getClient() {
        let newNom = this.inputNom.value;

        let newElectricite = this.getNumByMonth() ;
        let newGaz = this.getNumByMonth();
        let newEau = this.getNumByMonth();

        return {nom: newNom, electricite:newElectricite, gaz: newGaz,eau: newEau};
    }


    clearValues() {
     this.inputNom.value = "";
   }

    onClickCreate(event) {
        this.props.createClient(this.getClient());
    }


    render() {
        return (
            <tr className="etudiant active" id={this.props._id}>
                <td className="nom"><input placeholder="nom" ref={ input => this.inputNom = input} defaultValue ="Anonyme"/></td>
                <td className="electricite">{this.props.electricite}</td>
                <td className="gaz">{this.props.gaz}</td>
                <td className="eau">{this.props.eau}</td>
                <td>
                    <button type="button"  className="btn btn-success center-block"  onClick={this.onClickCreate.bind(this)}>Create</button>
                </td>

            </tr>
        );
    }
}

ClientCreate.propTypes = {
    nom: PropTypes.string,
    electricite: PropTypes.array,
    gaz: PropTypes.array,
    eau:PropTypes.array
}
