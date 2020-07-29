import React from 'react'

export default function Hero({children,hero}) {
    return (
        <header className={hero} >{children} {/* il recupere dans ClassName son code Css qui utilise comme props children pour pouvoir le recuperer ou il vzux   */}
            
        </header>
    )
}
Hero.defaultProps={
    hero:"defaultHero"
};