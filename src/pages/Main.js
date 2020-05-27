import React from 'react';
import {BrowserRouter, Link, Route} from 'react-router-dom';
import Footer from '../components/Footer';
import './Main.css';
import Icone from '../imagens/icone.png';
import Artistas from './Artistas';
import Home from './Home';
import Historia from './Historia';
import Lean from './Lean';
import fundo from '../imagens/fundo.png';




function Main(){

    return(
        <>
    <BrowserRouter>
        <header >
        
                <input type='checkbox' id='check'></input>
                <label id='icone' for='check'><img src ={Icone}></img></label>
                <div className= 'barra'>

                    <nav className='containerMenu'>
                        <Link to ='/'><div className = 'link'>Home</div></Link>
                        <Link to ='/Historia'><div className = 'link'>Historia</div></Link>
                        <Link to ='/Artistas'><div className = 'link'>Artistas</div></Link>
                        <Link to ='/Lean'><div className = 'link'>Lean</div></Link>
                    </nav>

                </div> 
                <iframe src="https://open.spotify.com/embed/playlist/5kpg4mTcN2x5hof2ME11ym" width="500" height="100" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>   
        </header>
        <hr/>
        <main>
                <div className= 'containerMain'>    
                    <Route path='/' exact component={Home}/>
                    <Route path='/Historia'  component={Historia}/>
                    <Route path='/Artistas'  component={Artistas}/>
                    <Route path='/Lean' component={Lean}/>
                </div>
        </main>
      
        <hr/>
        <Footer/>
    </BrowserRouter>    
        </>

    );

}

export default Main;