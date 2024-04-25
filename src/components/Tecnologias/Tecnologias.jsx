import React from "react";
import style from './tecnologias.module.css'
import { SiNextdotjs, SiRedux,SiMongodb ,  SiDocker , SiTypescript , SiHtml5 , SiCss3 , SiJavascript , SiSequelize, SiPostgresql, SiExpress } from "react-icons/si";
import { FaReact } from "react-icons/fa";

const Tecnologias = () => {
    return (
      <>
        <div className={style.tecnologias}>
          <div className={style.container}>
            <h3 className={style.title}>Habilidades técnicas</h3>
            <div className={style.iconContainer}>
              <SiJavascript className={style.itemjs} />
              <SiCss3 className={style.itemcss} />
              <SiHtml5 className={style.itemhtml} />
              <FaReact className={style.itemrc} />
              <SiRedux className={style.itemrd} />
              <SiSequelize className={style.itemsq} />
              <SiPostgresql className={style.itemps} />
              <SiExpress className={style.itemex} />
              <SiNextdotjs className={style.itemnext} />
            </div>
          </div>

          <div className={style.container}>
            <h3 className={style.title}>Habilidades blandas</h3>
            <div className={style.iconContainer}>
              <ul>
                <li>Escucha activa</li>
                <li>Aprendizaje ágil</li>
                <li>Curiosidad</li>
                <li>Comunicativo</li>
                <li>Autónomo</li>
                <li>Liderazgo</li>
                <li>Multitarea</li>
              </ul>
            </div>
          </div>
        </div>
      </>
    );
}

export default Tecnologias;
