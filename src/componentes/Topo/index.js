import React from "react";
import Logo from '../assets/imagens/logo.png'
import './style.css'

export default function Topo(){
    return(

        <header >
            <div className="limitar-secao">
                <img src={Logo} alt="Imagem de oculos" title="Imagem de óculos"/>
                 <nav>
                    <a href="#produtos">PRODUTOS</a>
                    <a href="#sobre">SOBRE</a>
                    <a href="#contato">CONTATO</a>
                 </nav>
            </div>
        </header>

    )
}