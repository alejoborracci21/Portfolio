import React from 'react'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesUp, faEnvelope, faFile, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import style from './footer.module.css'



function Footer() {



    return (

        <footer className={style.footer} >

            <div className={style.ubi}>
                <h2>Ubicacion</h2>
                <p><FontAwesomeIcon  className={style.stylosIcons}icon={faLocationDot} />Rosario, Santa Fe. Argentina</p>

            </div>
            <div className={style.list}>
                <h3>Contactame</h3>
                <br></br>
                <ul className={style.redes}>
                    <li>
                        <a target="_blank" href="https://www.linkedin.com/in/alejo-borracci-2323a6199/" ><FontAwesomeIcon className={style.stylosIcons} icon={faLinkedin} />LinkedIn</a>
                    </li>
                    <li>
                        <a target="_blank" href="https://github.com/alejoborracci21" ><FontAwesomeIcon className={style.stylosIcons} icon={faGithub}/>Github</a>
                    </li>
                    <li>
                        <a target="_blank" ><FontAwesomeIcon className={style.stylosIcons} icon={faEnvelope} />Email: alejotrabajo2001@hotmail.com</a>
                    </li>
                </ul>
            </div>


        </footer>






    )
}

export default Footer