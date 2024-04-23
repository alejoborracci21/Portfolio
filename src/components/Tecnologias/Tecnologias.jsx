import React from "react";
import style from './tecnologias.module.css'
import { SiRedux,SiMongodb ,  SiDocker , SiTypescript , SiHtml5 , SiCss3 , SiJavascript , SiSequelize, SiPostgresql, SiExpress } from "react-icons/si";
import { FaReact } from "react-icons/fa";

const Tecnologias = () => {
    return (
      <>
        <div className={style.tecnologias}>
          <div className={style.container}>
            <h1 className={style.title}>Lenguajes</h1>
            <div className={style.iconContainer}>
              <SiJavascript className={style.item}/>
              <SiCss3 className={style.item}/>
              <SiHtml5 className={style.item}/>
            </div>
          </div>

          <div className={style.container}>
            <h1 className={style.title}>Tecnologias</h1>
            <div className={style.iconContainer}>
              <FaReact className={style.item}/>
              <SiRedux className={style.item}/>
              <SiSequelize className={style.item}/>
              <SiPostgresql className={style.item}/>
              <SiExpress className={style.item}/>
            </div>
          </div>

          <div className={style.container}>
            <h1 className={style.title}>Aprendiendo...</h1>
            <div className={style.iconContainer}>
              <SiTypescript  className={style.item} />
              <SiDocker className={style.item} />
              <SiMongodb className={style.item} />
            </div>
          </div>
        </div>
      </>
    );
}

export default Tecnologias;
