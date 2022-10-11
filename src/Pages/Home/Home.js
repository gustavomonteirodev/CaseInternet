import React, { useState } from "react";
import api from "../../constants/api"
import { cepMask } from "../../components/Mask";
import "./HomeStyle.css";
import SendIcon from '@material-ui/icons/Send';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import netPlano from "../../assets/netPlano.png"
import Offers from "../../Pages/Offers/Offers";
import GlobalContext from '../../Global/GlobalContext'
import { useContext } from 'react'

const Home = () => {

    const { states, setters } = useContext(GlobalContext)
    
    const mostrarOuEsconder = () => {
        setters.setMostrarElement(true)}

        function atualizarPagina() {
            window.location.reload();
        }

    async function handleSubmit(event) {
        event.preventDefault();

        // validators client side
        if (states.cep.length < 9) {
            setters.setDados("");
            setters.setErrorDataCep("Por favor, digite um CEP válido");
            return
        }

        // request server side
        const response = await api.get(`/${states.cep}/json`);
        const data = response.data;
        setters.setDados(data);

        // errors server side
        if (data.erro) {
            setters.setDados("");
            setters.setErrorDataCep("Este CEP não está cadastrado em nossa Base de Dados");
            return
        }

        // ok !
        setters.setDados(data);
        setters.setErrorDataCep("");
    }

    function handleChange(event) {
        setters.setCep(cepMask(event.target.value));
    }

    function clearContent(event) {
        setters.setCep("");
        setters.setDados("");
        setters.setErrorDataCep("")
        atualizarPagina()
        ;
    }

    return (
        <div className="container">
            <img className="banner" src={netPlano} alt="banner-apresentacao-internet" />
            <h1 className="boas-vindas">Somos a líder em satisfação em pesquisa realizada pela Anatel. </h1>
            <div className="component-search">
                <form onSubmit={handleSubmit}>
                    <input
                        id="input-cep"
                        label="Consulte o CEP"
                        placeholder="Digite seu CEP:"
                        value={states.cep}
                        onChange={handleChange}
                        maxLength="9"
                        autoFocus
                    />
                    <button variant="contained" type="submit" className="btn-find" onClick={mostrarOuEsconder}>
                        <SendIcon className="icon-send" />
                    </button>
                    <button color="inherit" variant="contained" type="button" className="btn-clean" onClick={clearContent}>
                        <DeleteForeverIcon className="icon-clean" />
                    </button>
                </form>
            </div>

            <div className="component-response">
                {states.dados && (
                    <>
                        <span className="data-list">{states.dados.cep}</span>
                        <span className="data-list">{states.dados.logradouro}</span>
                        <span className="data-list">{states.dados.bairro}</span>
                        <span className="data-list">{states.dados.localidade}</span>
                        <span className="data-list">{states.dados.uf}</span>
                    </>
                )}
                {states.errorDataCep && (
                    <span className="data-list error-data-cep">
                        {states.errorDataCep}
                    </span>
                )}
            </div>
                {states.mostrarElement ? <Offers mostrarOuEsconder={mostrarOuEsconder} mostrarElement={states.mostrarElement} />: null}
        </div>
    );
}

export default Home;
