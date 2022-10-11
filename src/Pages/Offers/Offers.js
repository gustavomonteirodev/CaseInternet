import React from "react";
import "./OffersStyle.css"

const Offers = () => {

    const scrollHome = () =>{
        window.scrollTo({
          top: 0, 
          behavior: 'smooth'
        });
      };

    return (
        <>
            <div className="cards-pai">

            <section className="cards">
                    <h2 className="plano">20 Megas</h2>
                    <div className="Informacoes-plano">
                        <p>Upload</p>
                        <strong><p>15 Megas</p></strong>
                    </div>
                    <div className="Informacoes-plano">
                        <p>Trafego/mês</p>
                        <strong><p>Ilimitado</p></strong>
                        </div>
                        <div className="Informacoes-plano">
                        <p>Valor</p>
                        <strong><p>R$ 109,00</p></strong>
                        </div>
                        <button className="botoes" color="primary" variant="contained" disabled>Contrate</button>
                    </section>

                    <section className="cards">
                    <h2 className="plano">15 Megas</h2>
                    <div className="Informacoes-plano">
                        <p>Upload</p>
                        <strong><p>10 Megas</p></strong>
                    </div>
                    <div className="Informacoes-plano">
                        <p>Trafego/mês</p>
                        <strong><p>Ilimitado</p></strong>
                        </div>
                        <div className="Informacoes-plano">
                        <p>Valor</p>
                        <strong><p>R$ 99,00</p></strong>
                        </div>
                        <button className="botoes" color="primary" variant="contained" disabled>Contrate</button>
                    </section>

                <section className="cards">
                    <h2 className="plano">10 Megas</h2>
                    <div className="Informacoes-plano">
                        <p>Upload</p>
                        <strong><p>5 Megas</p></strong>
                    </div>
                    <div className="Informacoes-plano">
                        <p>Trafego/mês</p>
                        <strong><p>Ilimitado</p></strong>
                        </div>
                        <div className="Informacoes-plano">
                        <p>Valor</p>
                        <strong><p>R$ 80,00</p></strong>
                        </div>
                        <button className="botoes" color="primary" variant="contained" disabled>Contrate</button>
                    </section>

                    <section className="cards">
                    <h2 className="plano">5 Megas</h2>
                    <div className="Informacoes-plano">
                        <p>Upload</p>
                        <strong><p>1 Mega</p></strong>
                    </div>
                    <div className="Informacoes-plano">
                        <p>Trafego/mês</p>
                        <strong><p>150 Gigas</p></strong>
                        </div>
                        <div className="Informacoes-plano">
                        <p>Valor</p>
                        <strong><p>R$ 69,00</p></strong>
                        </div>
                        <button className="botoes" color="primary" variant="contained" disabled>Contrate</button>
                    </section>
            </div>
            <button id="botao-voltar" onClick={scrollHome}>Ops, errei meu cep!</button>
        </>
    );
}

export default Offers;
