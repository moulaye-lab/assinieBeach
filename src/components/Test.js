import React, { Component } from 'react'

export default class Test extends Component {
   state={
  clients:[
 {id:1,nom:"moulo"}
  ]
   };
/*  handleClick = () =>{
const clientele =this.state.slice();
clients.push({id:1,nom:"moulaye"});
this.setState({clients:clientele});
  } ;*/

/*  handleDelete= (id) => {
    const clientele =this.state.clients.slice();
    const index = clientele.findIndex(function(client){
    return client.id === id
    
    });
    clientele.splice(index,1);
    this.setState({clients : clientele});
      } */
   
   
    render() {
        return (
            <div>
               <ul>
               {this.state.clients.map(client => (
                <li>
                  
                  {client.nom} {client.id}

                </li>
                
                
                
                ))}


                </ul>
            </div>
        )
    
               }}
