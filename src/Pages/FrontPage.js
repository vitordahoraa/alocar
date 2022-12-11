import '../Style/FrontPage.css';
import {Link} from 'react-router-dom'
import LoginComponent from '../components/LoginBarComponent'

function FrontPage() {
  return (
    <div className="front">
        <LoginComponent/ >
        <div id="Greetings">
            <h1>
                Bem Vindo a Alocar, a sua locadora de carros!
            </h1>
        </div>
        <div id="Alocar">
            <Link to="/catalogo">Olhar nosso catálogo</Link>
        </div>
    </div>
  );
}

export default FrontPage;
