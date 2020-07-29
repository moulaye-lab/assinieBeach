import React, { Component } from 'react'
import logo from '../images/logo.svg';
import {FaAlignRight} from 'react-icons/fa'
import{Link} from 'react-router-dom'



export default class Navbar extends Component {
state={

    isOpen:false
};
 handleToggle = () =>{
this.setState({isOpen:!this.state.isOpen});


 };
    render() {
        return (
            <nav className="navbar">
<div className="nav-center">
<div className="nav-header">

<Link to="/"> 
<img src={logo}/>
</Link>

<button 
type="button" 
className="nav-btn" 
onClick={this.handleToggle}>
<FaAlignRight className="nav-icon" />{/* il provient du react icons cest le menu burger */}
</button>
</div>



<ul className={this.state.isOpen?"nav-links show-nav":"nav-links"}> {/*permet de gerer le menu burger quand on diminue la taille du navigateur ps:voir les state ouvert plus haut*/}

<li>
<Link to="/">Acceuil</Link>
</li>
<li>
<Link to="/rooms">Chambres</Link>
</li>
</ul>

</div>

            </nav>
        )
        }  
}
