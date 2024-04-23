import React from "react";
import style from './proyectos.module.css'
import drivers from './Imagenes/drivers.png'
import wearfashion from './Imagenes/wearfashion.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';


const Proyectos = () => {

  
    return (
      <>
        <div className={style.proyects}>
          <h1 className={style.title}>Mis Proyectos</h1>

          <div className={style.proyectcard}>
            <img src={wearfashion} className={style.image} />
            <div className={style.container}>
              <h3 className={style.name}>WearFashion</h3>
              <p className={style.description}>
                WearFashion es un E-Commerce de ropa urbana que desarrollamos
                con mi equipo para nuestro proyecto final en SoyHenry. En la web
                podemos ver las diferentes prendas disponibles que tenemos en
                stock, filtrarlas para ver solo las caracteristicas que estamos
                buscando y si queremos realizar una compra tenemos la opcion de
                registrarnos para poder acceder a una pasarela de pagos y
                realizar la compra deseada.
              </p>

              <div className={style.technologies}>
                <a className={style.tech}>Javscript</a>
                <a className={style.tech}>React</a>
                <a className={style.tech}>Redux</a>
                <a className={style.tech}>Sequelize</a>
                <a className={style.tech}>PostgreSQL</a>
                <a className={style.tech}>Express</a>
                <a className={style.tech}>CSS3</a>
              </div>
            </div>

            <a href="https://github.com/DanielJulianCardenasMora/proyecto_grupal_henry">
              <button className={style.buttonrp}>
                <FontAwesomeIcon className={style.icons} icon={faGithub}>
                  Repositorio
                </FontAwesomeIcon>
              </button>
            </a>
          </div>

          <div className={style.proyectcard}>
            <img src={drivers} className={style.image} />
            <div className={style.container}>
              <h3 className={style.name}>Drivers</h3>
              <p className={style.description}>
                Mi proyecto individual en SoyHenry se centró en el desarrollo de
                una aplicación utilizando tecnologías clave como Javascript,
                HTML y CSS. Para la construcción del frontend, opté por React y
                empleé Redux para establecer un estado global coherente. En el
                backend, creé el servidor utilizando Express y configuré una
                base de datos con Sequelize. Esta base de datos fue diseñada
                para almacenar los conductores que los usuarios registran a
                través de la aplicación.
              </p>

              <div className={style.technologies}>
                <a className={style.tech}>Javscript</a>
                <a className={style.tech}>React</a>
                <a className={style.tech}>Redux</a>
                <a className={style.tech}>Sequelize</a>
                <a className={style.tech}>PostgreSQL</a>
                <a className={style.tech}>Express</a>
                <a className={style.tech}>CSS3</a>
              </div>
            </div>

            <a href="https://github.com/alejoborracci21/PI-Drivers">
              <button className={style.buttonrp}>
                <FontAwesomeIcon className={style.icons} icon={faGithub}>
                  Repositorio
                </FontAwesomeIcon>
              </button>
            </a>
          </div>
        </div>
      </>
    );
}


export default Proyectos