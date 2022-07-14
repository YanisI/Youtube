import React from 'react'
import { ReactComponent as Accueil } from '../images/sidebar/premier/accueil.svg';
import { ReactComponent as Abonnement } from '../images/sidebar/premier/abonnement.svg';
import { ReactComponent as Explorer } from '../images/sidebar/premier/explorer.svg';
import { ReactComponent as Short } from '../images/sidebar/premier/short.svg';
import { ReactComponent as Bibliotheque } from '../images/sidebar/second/bibliotheque.svg';
import { ReactComponent as Historique } from '../images/sidebar/second/historique.svg';
import { ReactComponent as VosVideos } from '../images/sidebar/second/vosvideos.svg';
import { ReactComponent as WatchLater } from '../images/sidebar/second/watchLater.svg';
import { ReactComponent as Likes } from '../images/sidebar/second/likes.svg';


import { ReactComponent as Premium } from '../images/sidebar/third/premium.svg';
import { ReactComponent as Film } from '../images/sidebar/third/film.svg';
import { ReactComponent as Game } from '../images/sidebar/third/game.svg';
import { ReactComponent as Live } from '../images/sidebar/third/live.svg';
import { ReactComponent as Mode } from '../images/sidebar/third/mode.svg';
import { ReactComponent as Savoir } from '../images/sidebar/third/savoir.svg';
import { ReactComponent as Sport } from '../images/sidebar/third/sport.svg';

import { ReactComponent as Parametre } from '../images/sidebar/fourth/parametre.svg';
import { ReactComponent as Signaler } from '../images/sidebar/fourth/signaler.svg';
import { ReactComponent as Aide } from '../images/sidebar/fourth/aide.svg';
import { ReactComponent as Commentaire } from '../images/sidebar/fourth/commentaire.svg';

import { NavLink } from "react-router-dom"


const Sidebar = () => {
    return (
        <>
            <div className='sidebar'>
                <div className="navSide">
                    <div className="first">
                        <NavLink
                            to="/"
                            className={(nav) => (nav.isActive ? "nav active" : "nav")}
                        >
                            <div className="container">
                                <div className="icon">

                                    <Accueil />
                                </div>
                                <span className='titre'>
                                    Accueil
                                </span>
                            </div>
                        </NavLink>
                        <div className="container">
                            <div className="icon">
                                <Explorer />
                            </div>
                            <span className='titre'>
                                Explorer
                            </span>
                        </div>
                        <div className="container">
                            <div className="icon">
                                <Short />
                            </div>
                            <span className='titre'>
                                Shorts
                            </span>
                        </div>
                        <div className="container">
                            <div className="icon">
                                <Abonnement />
                            </div>
                            <span className='titre'>
                                Abonnement
                            </span>
                        </div>
                    </div>
                    <div className="second">
                        <div className="container">
                            <div className="icon">
                                <Bibliotheque />
                            </div>
                            <span className='titre'>
                                Bibliothèque
                            </span>
                        </div>
                        <div className="container">
                            <div className="icon">
                                <Historique />
                            </div>
                            <span className='titre'>
                                Historique
                            </span>
                        </div>
                        <div className="container">
                            <div className="icon">
                                <VosVideos />
                            </div>
                            <span className='titre'>
                                Vos Videos
                            </span>
                        </div>
                        <div className="container">
                            <div className="icon">
                                <WatchLater />
                            </div>
                            <span className='titre'>
                                Watch Later
                            </span>
                        </div>
                        <div className="container">
                            <div className="icon">
                                <Likes />
                            </div>
                            <span className='titre'>
                                Likes
                            </span>
                        </div>
                    </div>
                </div>
                <div className="abonnements">
                    <div className="first">
                        <div className="container">
                            ABONNEMENTS
                        </div>
                    </div>
                </div>
                <div className="navSide">
                    <div className="first">
                        <div className="info">
                            AUTRES CONTENUS YOUTUBE
                        </div>
                        <div className="container">
                            <div className="icon">
                                <Premium />
                            </div>
                            <span className='titre'>
                                YouTube Premium
                            </span>
                        </div>
                        <div className="container">
                            <div className="icon">
                                <Film />
                            </div>
                            <span className='titre'>
                                Films et TV
                            </span>
                        </div>
                        <div className="container">
                            <div className="icon">
                                <Game />
                            </div>
                            <span className='titre'>
                                Jeux vidéo
                            </span>
                        </div>
                        <div className="container">
                            <div className="icon">
                                <Live />
                            </div>
                            <span className='titre'>
                                En direct
                            </span>
                        </div>
                        <div className="container">
                            <div className="icon">
                                <Mode />
                            </div>
                            <span className='titre'>
                                Mode et beauté
                            </span>
                        </div>
                        <div className="container">
                            <div className="icon">
                                <Savoir />
                            </div>
                            <span className='titre'>
                                Savoirs & Cultures
                            </span>
                        </div>
                        <div className="container">
                            <div className="icon">
                                <Sport />
                            </div>
                            <span className='titre'>
                                Sport
                            </span>
                        </div>
                    </div>
                    <div className="second">
                        <div className="container">
                            <div className="icon">
                                <Parametre />
                            </div>
                            <span className='titre'>
                                Paramètre
                            </span>
                        </div>
                        <div className="container">
                            <div className="icone">
                                <Signaler />
                            </div>
                            <span className='titre'>
                                Historique des signalements
                            </span>
                        </div>
                        <div className="container">
                            <div className="icon">
                                <Aide />
                            </div>
                            <span className='titre'>
                                Aide
                            </span>
                        </div>
                        <div className="container">
                            <div className="icone">
                                <Commentaire />
                            </div>
                            <span className='titre'>
                                Envoyer des commentaires
                            </span>
                        </div>
                    </div>
                </div>

            </div>
            <div className='sidebarSecondary'>
                    <NavLink
                        to="/"
                        className={(nav) => (nav.isActive ? "nav active" : "nav")}
                    >
                        <div className="container">
                            <div className="icon">

                                <Accueil />
                            </div>
                        </div>
                    </NavLink>
                    <div className="container">
                        <div className="icon">
                            <Explorer />
                        </div>
                    </div>
                    <div className="container">
                        <div className="icon">
                            <Short />
                        </div>
                    </div>
                    <div className="container">
                        <div className="icon">
                            <Abonnement />
                        </div>
                    </div>
                
                <div className="container">
                    <div className="icon">
                        <Bibliotheque />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Sidebar