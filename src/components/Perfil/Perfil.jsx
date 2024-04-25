import React, { useState, useEffect } from 'react';
import imagen from './Imagenes/foto.jpg';
import style from './Perfil.module.css';
import fondo from './Imagenes/fondo.jpg';

const Perfil = () => {

  return (
    <>
      <div className={style.profile}>
        <img src={fondo} className={style.background}/>
        <div className={style.content}>
          <img src={imagen} alt="Imagen not found" className={style.imagen} />
          <div className={style.title}>
            <h1>Alejo Borracci #ARG</h1>
          </div>
          <div className={style.description}>
            <p>Soy un apasionado <span className={style.span}>desarrollador web full stack</span> con un compromiso inquebrantable con la excelencia técnica y el aprendizaje continuo. Mi pasión por la programación se refleja en mi dedicación para explorar y dominar nuevas tecnologías.</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Perfil;
