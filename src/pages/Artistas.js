import React,  {useState} from 'react';
import Geral from '../components/Geral';



function Artistas(){
    const [lilpeep, setPeep] = useState(false);
    const [travis, setTravis] = useState(false);
    const [future, setFuture] = useState(false);
    return(
     
        <>
        <h1>Artistas
            <div className="Links"><h6  onClick={()=> {setPeep(!lilpeep)}}>Lil Peep</h6></div>
            <div className="Links"><h6  onClick={()=> {setTravis(!travis)}}>Travis Scoot</h6></div>
            <div className="Links"><h6  onClick={()=> {setFuture(!future)}}>Future</h6></div>
        </h1>
        <hr/>
        { lilpeep && <Geral titulo="Lil Peep"/>}
        { travis && <Geral titulo="Travis Scoot"/>}
        { future && <Geral titulo="Future"/>}
        </>
    );
}

export default Artistas;