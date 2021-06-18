import React from 'react';
import '../App.css'
import './HerroSection.css';
import {Button} from 'react-bootstrap';

function HeroSection() {
    return (
        <div className='hero-container'>
        <br></br>
        <div className="quadro">
           <div className="hero-text">
            <h1>Seja Você Também Um Membro do Clube de Tiro Membeca Barão</h1>  
            </div>
                
            <div className="hero-btns">
            <Button variant="secondary">Filie-se</Button>{' '}
            </div>
            </div>
        </div>
    );
}

export default HeroSection;
