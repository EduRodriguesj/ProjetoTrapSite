import React from 'react';
import './Main.css';
import img1 from '../imagens/esqueletodisk2.gif';


function Home(){

    return(
        <>
        <label className='titulo'>Bem vindo se quiser pode escutar uma musiquinha enquanto olha o site kkk</label>
        <div><img src={img1} width = '500' height='300'></img></div>
        </>
    );

}

export default Home;