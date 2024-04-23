import React, { useState, useEffect } from 'react';
import imagen from './Imagenes/foto.jpg';
import style from './Perfil.module.css';
import fondo from './Imagenes/fondo.jpg';

const Perfil = () => {
  const [descriptionText, setDescriptionText] = useState('');
  
  useEffect(() => {
    const originalText = "Soy un apasionado desarrollador web full stack con un compromiso inquebrantable con la excelencia técnica y el aprendizaje continuo. Mi pasión por la programación se refleja en mi dedicación para explorar y dominar nuevas tecnologías.";
    let currentIndex = 0;
    
    const intervalId = setInterval(() => {
      if (currentIndex <= originalText.length) {
        setDescriptionText(originalText.substring(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(intervalId);
      }
    }, 50);

    return () => clearInterval(intervalId);
  }, []);

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
            <p>{descriptionText}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Perfil;
