import React from 'react';
import '../pages/Artistas.css';
import profile1 from '../imagens/peep.png';
import profile2 from '../imagens/travis.png';
import profile3 from '../imagens/future.png';


function Geral(props){

    if(props.titulo === "Lil Peep"){
        var imagem = <img className='imgPerfil' src={profile1} alt=""/> 
        var legenda = "Gustav Åhr nasceu em 1 de novembro de 1996, em Long Island, Nova Iorque, tendo crescido em Long Beach. A mãe, Liza, era professora da primeira série em Long Island e tem ascendência alemã e irlandesa, enquanto o pai é de origem alemã e sueca. Após abandonar a Long Beach High School, Åhr começou a fazer cursos on-line de informática, vindo a obter um diploma.[2] Pouco depois começou a fazer música sob o nome de ''Lil Peep'', e a postá-la no YouTube e SoundCloud, ele dizia fazer a maioria de suas músicas em menos de 5 minutos."
    }else if(props.titulo ==="Travis Scoot"){
        var imagem = <img className='imgPerfil' src={profile2} alt=""/>
        var legenda = "Jacques Berman Webster II (Houston, 30 de abril de 1992), mais conhecido como Travis Scott (por vezes estilizado como Travi$ Scott), é um rapper, cantor, compositor e produtor musical americano. Em 2012, Scott assinou seu primeiro grande contrato com a gravadora Epic Records. Em novembro do mesmo ano, Scott assinou um contrato com a GOOD Music, gravadora de Kanye West, como parte da sua produção no álbum colaborativo Cruel Summer. Em abril de 2013, Travis Scott assinou um contrato com a Grand Hustle Records, do rapper T. I."

    }else if(props.titulo ==="Future"){
        var imagem = <img className='imgPerfil' src={profile3} alt=""/>
        var legenda =  "Nayvadius DeMun Wilburn (nascido em 20 de novembro de 1983), mais conhecido por seu nome artístico Future , é um rapper, cantor, compositor e produtor musical americano. Nascido e criado em Atlanta, na Geórgia , ele se envolveu com música como parte do coletivo Dungeon Family , onde foi apelidado de 'future'. Após acumular uma série de mixtapes entre 2010 e 2011, a Future assinou um grande contrato com a Epic Records e a A1 Recordings do Rocko , que ajudaram a lançar a gravadora da Future, Freebandz . Posteriormente, lançou seu álbum de estréia, Pluto, em abril de 2012, a críticas positivas. O segundo álbum do Future, Honest , foi lançado em abril de 2014, superando sua estréia nas paradas de álbuns."
    }else{
        
    }    
    return(
        <>

            <h1 className= 'titulo'>{props.titulo}</h1>
            {imagem}
            <p>{legenda}</p>
           
        </>


    );
       
  

}

export default Geral;