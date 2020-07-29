import React from 'react'

export default function Banner({children,title,subtitle}) {
    return (
        <div className="banner">
         <h1>{title}</h1>   
        <div></div>
    <p>{subtitle}</p>
        {children} {/* le fait de mettre title et subtiltle en children ici va permerttre de leurs ajouter la valeur qu'on voudra dans les pages ou on les appelera */}
        
        </div>
    )
}
