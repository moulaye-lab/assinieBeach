import React, { Component } from "react";
import sports from '../images/sports.jpg';
import jetski from '../images/jetski.jpg';
import traverser from '../images/traverser.jpg';
import decouverte from '../images/decouverte.jpg';
import jogging from '../images/jogging.jpg';
import visite from '../images/visite.jpg';
import natation from '../images/natation.jpg';

import Title from "./Title";
export default class Services extends Component {
  state = {
    services: [
      {
        icon: <img src = {traverser} alt="image sport nautique" />,
        title: "Traversée lagune",
        info:
          "Une traversée par jour de la lagune entre notre site côté lagune et celui situé au bord de la mer est offerte aux clients."
      },
      {
        icon: <img src = {decouverte} alt="image sport nautique" />,
        title: "Balade decouverte",
        info:
          "Pour une expérience particulièrement agréable, en famille ou avec des amis, montez à bord de notre bateau. Vous pourrez découvrir le plan lagunaire et visiter ainsi les merveilles d'Assinie."
      },
      {
        icon: <img src = {jetski} alt="image sport nautique" />,
        title: "Jet ski",
        info:
          "Pour ceux qui aiment les défis, faites vrombir les moteurs des jetskis et aventurez-vous sur le plan lagunaire."
      },
      {
        icon: <img src = {natation} alt="image sport nautique" />,
        title: "Natation",
        info:
          "Pour piquer une tête vous avez une magnifique piscine avec jacuzzi côté lagune, une lagune préservée de la pollution et bien sûr la mer à 2 minutes en bateau."
      },
      {
        icon: <img src = {jogging} alt="image sport nautique" />,
        title: "Jogging surveillé",
        info:
          "Vous pourrez enfin simplement marcher ou faire du jogging sur les 20 kilomètres de plage le long de l'océan Atlantique côté mer."
      },
      {
        icon: <img src = {decouverte} alt="image sport nautique" />,
        title: "Decouverte de l'embouchure",
        info:
          "Vous pourrez profiter d'une mini croisière en groupe ou en amoureux pour la visite de l'embouchure (La Passe) où vous ferez une halte sur la plage entre les deux eaux (lagune et océan) Départ tous les samedis à 11h. Retour à 16h"
      }
      
    ]
  };
  render() {
    return (
      <section className="services">
        <Title title="NOS ACTIVITES" />
        <div className="services-center">
          {this.state.services.map(item => {
            return (
              <article key={`item-${item.title}`} className="service">
                <span>{item.icon}</span>
                <h5>{item.title}</h5>
                <p>{item.info}</p>
            </article>                          // /*dans cette section il recupere le state plus haut grace a la fonction map */
            );
          })}
        </div>
      </section>
    );
  }
}
