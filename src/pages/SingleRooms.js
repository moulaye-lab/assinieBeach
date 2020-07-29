import React, { Component } from 'react'
import defaultBcg from '../images/room-1.jpeg';
 import Banner from '../components/Banner';
import {Link} from 'react-router-dom';
import {RoomContext} from '../context';
import StyledHero from '../components/StyledHero';


export default class SingleRooms extends Component {
    constructor(props){
     super(props);
     this.state={
        slug:this.props.match.params.slug,defaultBcg

     };
    }
static contextType =RoomContext;
//componentDidMount(){}
    
    
    render() {
        const {getRoom}= this.context;
        const room =getRoom (this.state.slug);
         if(!room){
             return <div className="Error">
             
             <h3>Chambre non trouvée</h3>
            <Link to ="/rooms" className="btn-primary">
                RETOUR AUX CHAMBRES
            </Link>
             </div>

         }
        const{name,description,capacity,size,price,extras,breakfast,pets,images}=room
        const[mainImg,...defaultImg]=images;
        return (
            <>
        <StyledHero img={images[0]}> {/* il recupere directement l'image affilié a la categories de chambres */}
<Banner title={`${name}`}>
<Link to='/rooms' className="btn-primary">
RETOUR AUX CHAMBRES
</Link>

</Banner>


        </StyledHero>
        <section className="single-room">
          <div className="single-room-images">
            {defaultImg.map((item, index) => (
              <img key={index} src={item} alt={name} />
            ))}
          </div>
          <div className="single-room-info">
            <article className="desc">
              <h3>details</h3>
              <p>{description}</p>
            </article>
            <article className="info">
              <h3>informations</h3>
              <h6>Prix : Fcfa{price}</h6>
              <h6>Taille : {size} SQFT</h6>
              <h6>
                capacité maximum :
                {capacity > 1 ? `${capacity} people` : `${capacity} person`}
              </h6>
              <h6>{pets ? "pets allowed" : "no pets allowed"}</h6>
              <h6>{breakfast && "free breakfast included"}</h6>
            </article>
          </div>
        </section>
        <section className="room-extras">
          <h6>Suppléments</h6>
          <ul className="extras">
            {extras.map((item, index) => (
              <li key={index}>- {item}</li>
            ))}
          </ul>
        </section>
      </>
    );
  }
}
