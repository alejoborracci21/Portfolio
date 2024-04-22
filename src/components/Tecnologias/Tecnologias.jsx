import React from "react";
import style from './tecnologias.module.css'



const Tecnologias = () => {


    return (
      <>
        <div className={style.tecnologias}>

          <div className={style.container}>
            <h1 className={style.title}>Lenguajes</h1>
            <h4 className={style.item}>Javascript</h4>
            <h4 className={style.item}>CSS3</h4>
            <h4 className={style.item}>HTML</h4>
          </div>

          <div className={style.container}>
            <h1 className={style.title}>Tecnologias</h1>
            <h4 className={style.item}>React</h4>
            <h4 className={style.item}>Redux</h4>
            <h4 className={style.item}>Sequelize</h4>
            <h4 className={style.item}>PostgreSQL</h4>
            <h4 className={style.item}>Express</h4>


          </div>

          <div className={style.container}>
            <h1 className={style.title}>Aprendiendo...</h1>
            <h4 className={style.item}>Typescript</h4>
            <h4 className={style.item}>Docker</h4>
            <h4 className={style.item}>MongoDB</h4>
          </div>


        </div>
      </>
    );
}

export default Tecnologias;