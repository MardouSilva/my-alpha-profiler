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
                <Link to='/editprofile'><button id='perfil'  onClick={ (e) => {
                    trocarBackground('perfil')
                }}> Editar Perfil </button></Link>

                <Link to='/signin'><button id='logar' onClick={ (e) => {
                    trocarBackground('logar'); 
                }}> Logar </button></Link>

                <Link to='/signup'><button id='cadastrar' onClick={ (e) => {
                    trocarBackground('cadastrar');
                }}> Cadastrar </button></Link>

                <Link to='/home'><button id='home' onClick={ (e) => {
                    trocarBackground('home');
                }}> Home </button></Link>
            </nav>
        </header>
    )
}

export default Header