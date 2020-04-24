import React from 'react';

import Client from '../components/client.js';
import ClientCreate from '../components/clientCreate.js';


export default class ClientList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {clients: [] };
    }


    //
    createClient(newClient) {

        let body = JSON.stringify(newClient);
        let requestOptions = {method: 'POST', headers: {"Content-Type": "application/json"}, body: body};
        fetch(`http://127.0.0.1:3000/clientsRest/`, requestOptions)
            .then(response => {
                this.clientCreate.clearValues();
                if (!response.ok) {
                    throw new Error(`create failed  : ${response.json.message}`);
                } else {
                  response.json()
                    .then(json => {
                      let newList = this.state.clients;
                      newList.push(json);
                      this.setState({clients: newList});
                    })
                }
            })
            .catch(error => window.alert(error.message));
    }




    deleteClient(clientId) {
        console.log("received del req for id :" + clientId);

        let requestOptions = {method: 'DELETE'};
        fetch(`http://127.0.0.1:3000/clientsRest/${clientId}`, requestOptions)
            .then(response => {
                if (response.ok) {
                    let newList = this.state.clients;
                    newList = newList.filter(client => client._id !== clientId);
                    this.setState({clients: newList});
                } else {
                    throw new Error(` delete failed  : ${response.json.message}`);
                }
            })
            .catch(error => window.alert(error.message));
    }



    render() {
        let allClients = this.state.clients;
        let allPrices = this.state.prices;

        allClients = allClients.map(
          client =>
              <Client
                  {...client}
                  // allprices = allPrices
                  deleteClient={(id) => this.deleteClient(id)}
                  key={client._id}
              />
        )



        return (
          <div className = "clientList">
            <div className="text">
              Information de Client
              <table border ="1">
                <tr>
                  <th>Client</th>
                  <th>Electricite</th>
                  <th>Gaz</th>
                  <th>Eau</th>
                </tr>
                  <ClientCreate
                      ref={clientCreate => this.clientCreate = clientCreate}
                      createClient={(client)=> this.createClient(client)}

                  />
                  {allClients}
              </table>


            </div>
          </div>
        );
    }
}
