import React from "react";
import "./OffersStyle.css"
import Button from '@mui/material/Button';

import theme from "../../constants/theme"
const Offers = () => {
    return (
        <>
            <div className="cards-pai">

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
                        <Button className="botoes" color="primary" variant="outlined">Contrate</Button>
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
                        <Button className="botoes" color="primary" variant="outlined">Contrate</Button>
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
                        <Button className="botoes" color="primary" variant="outlined">Contrate</Button>
                    </section>
            </div>
        </>
    );
}

export default Offers;
