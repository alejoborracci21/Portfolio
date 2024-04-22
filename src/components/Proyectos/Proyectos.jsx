import React from "react";
import style from './proyectos.module.css'
import drivers from './Imagenes/drivers.png'
import wearfashion from './Imagenes/wearfashion.png'



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
                E-Commerce de ropa urbana. Este fue mi proyecto final en Henry,
                desarrollado con un grupo de 6 personas
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
          </div>

          <div className={style.proyectcard}>
            <img src={drivers} className={style.image} />
            <div className={style.container}>
              <h3 className={style.name}>Drivers</h3>
              <p className={style.description}>
                Este fue mi proyecto individual en Henry, donde tuve que realizar una SPA con diversas funcionalidades.
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
          </div>
        </div>
      </>
    );
}


export default Proyectos