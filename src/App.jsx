import React from 'react';
import Perfil from './components/Perfil/Perfil';
import Proyectos from './components/Proyectos/Proyectos';
import styles from './app.module.css'
import Tecnologias from './components/Tecnologias/Tecnologias';


function App() {
  return (
    <>
    <div className={styles.container}>
       <Perfil />
      <Proyectos/>
      <Tecnologias/>
    </div>
     
    </>
  );
}

export default App;
