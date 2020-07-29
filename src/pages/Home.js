import React from 'react'
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import {Link} from 'react-router-dom';
import Services from "../components/Services";
import FeaturedRooms from "../components/FeaturedRooms";
import RoomsContainer from '../components/RoomsContainer';

export default function Home() {
    return (
    
    <>
    <Hero>
    
<Banner title="ASSINIE BEACH" subtitle="des chambres a partir de 45000Fcfa">

<Link to ="/rooms" className="btn-primary">VOS CHAMBRES</Link>
</Banner>


    </Hero>
    
     <Services />   
      <FeaturedRooms /> 
     
   </>
    );
}

