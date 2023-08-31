import React from "react";
import Local from '../assets/imagens/local.png';
import Telefone from '../assets/imagens/telefone.png';
import Email from '../assets/imagens/email.png';
import IconeFacebook from '../assets/imagens/fb.png';
import IconeInstragan from '../assets/imagens/ig.png';
import IconeTwiter from '../assets/imagens/tt.png';
import './style.css';

export default function SecaoContato (){
    return(
        <section className="secao-contato" id="contato">
            <div className="limitar-secao">
                <h3>Fale conosco</h3>
                <p>
                    Não perca tempo, venha conhecer uma de nossas lojas ou entre em contato 
                    através de nossas 
                    redes sociais ou da central de atendimento.
                </p>
                <div className="secao-contato-container">
                    <div className="secao-container-conteudo">
                        <h4>Contato</h4>
                        <div>
                           <img src={Local} alt="Pino de localização" title="Ícone local"/>
                           <span>Nova Iguaçu, RJ</span> 
                        </div>
                        <div>
                           <img src={Telefone} alt="Ícone de um telefone" title="Ícone telefone"/>
                           <span>(21) 9999-9999</span> 
                        </div>
                        <div>
                           <img src={Email} alt="Ícone de uma carta" title="cone email"/>
                           <span>ontato@oticavida.com</span> 
                        </div>
                    </div>
                    <div className="secao-container-conteudo">
                        <h4>Nossas Redes Sociais</h4>
                        <div>
                           <img src={IconeFacebook} alt="logo do facebook" title="Logo do facebook"/>
                           <span>/OticaVida</span> 
                        </div>
                        <div>
                           <img src={IconeInstragan} alt="Logo do Instagran" title="Logo do Instagran"/>
                           <span>@oticavidarj</span> 
                        </div>
                        <div>
                           <img src={IconeTwiter} alt="Logo do Twitter" title="Logo do Twiter"/>
                           <span>@oticavidarj</span> 
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}