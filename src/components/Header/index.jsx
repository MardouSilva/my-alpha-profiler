import { useState } from 'react';
import './styles.css';
import { Link } from 'react-router-dom';

const Header = () => {
    function trocarBackground (id){
        const classSelected = document.querySelector(".button-selected")
        if(classSelected) {
            classSelected.classList.remove("button-selected");
        }
        document.getElementById(id).classList.add("button-selected");
        return;
    }

    return(
        <header>
            <nav>
                <button id='perfil'  onClick={ (e) => {
                    trocarBackground('perfil')
                }}> <Link to='/editprofile'>Perfil</Link></button>

                <button id='cadastrar' onClick={ (e) => {
                    trocarBackground('cadastrar');
                }}> <Link to='/signup'>Cadastrar</Link> </button>

                <button id='logar' onClick={ (e) => {
                    trocarBackground('logar'); 
                }}> <Link to='/signin'>Logar</Link> </button>

                <button id='home' onClick={ (e) => {
                    trocarBackground('home');
                }}> <Link to='/home'>Home</Link> </button>
            </nav>
        </header>
    )
}

export default Header