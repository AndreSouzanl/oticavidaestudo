import React from "react";
import ImagemLoja from '../assets/imagens/loja.png';
import ImagemAtendimento from '../assets/imagens/atendimento.png';
import './style.css';

export default function SecaoSobre (){
    return(
        <section className="secao-sobre" id="sobre">
            <div className="limitar-secao secao-sobre-container">
                <h3>QUEM SOMOS NÓS?</h3>
                <p>
                Fundada em 2001, em Nova Iguaçu - Rio de Janeiro, a Óticas vida iniciou suas 
                atividades focada no atendimento ao público de renda mais baixa, sempre com 
                o objetivo de proporcionar ao cliente bom atendimento,
                qualidade e preço baixo. 
                </p>
                <div className="box-card-container">
                    <img src={ImagemLoja} alt="imagem da loja" title="loja" />
                    <div className="card">
                       <h4>Nossas Filiais</h4>
                       <p>Hoje temos mais de 20 filiais pelo Brasil e na América</p>
                    </div>
                    <div className="card">
                        <h4>Atendimento flexível</h4>
                        <p>Nossa equipe possui é treinada para te atender</p>

                    </div>
                    <img src={ImagemAtendimento} alt="Imagem do atendimento da loja" title="Imagem do atendimento" />
                </div>
            </div>
        </section>
    );
}
