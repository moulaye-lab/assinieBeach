import React from 'react'
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import {Link} from 'react-router-dom'
export default function Errors() {
    return <Hero>
        
        
        
    <Banner title='ERREUR 404' subtitle="page non trouvée" >
        
        <Link to="/" className="btn-primary"> {/*   Ce genre de link "/" simple redirige vers la page d'acceuil*/}
          RETOURNER A L'ACCEUIL
        </Link>
        
    </Banner>   
        
        
        
        
       </Hero> ;

       
            
        
  
}
