import React from 'react';
import './Main.css';
import img1 from '../imagens/snoop.gif';

function Historia(){
    return( 
    <>
    <img src={img1} width = '400' height='300'></img>  
     <p>Nascido em meados dos anos 1990, nos EUA, o trap é filho de guetos formados a partir da gentrificação da população mais pobre da cidade de Atlanta, na Georgia. Por conta dos Jogos Olímpicos de Verão de 1996, essas pessoas foram removidas de suas moradias e sofreram grande repressão policial, o que, aos poucos, contribuiu para o surgimento das "trap houses" ("casas-armadilhas", em tradução livre). Esses locais serviam não só como boate e ambiente para venda e consumo de drogas, mas também como palco para apresentações e experimentações de</p>
     <p>Mais afastado do contexto inicial e, agora, cercado por rios de dinheiro, o trap tem participado em peso de composições de grandes nomes da indústria musical como Beyoncé, Rihanna, Justin Timberlake, Post Malone e muitos, muitos outros. Para reconhecer se uma faixa tem um pezinho no ritmo, basta se atentar aos samples eletrônicos de chimbau (contratempo ou hi-hat) — instrumento que une dois pratos de bateria, um sobre o outro — sempre presentes ao fundo.</p>
    </>
    );
}

export default Historia;