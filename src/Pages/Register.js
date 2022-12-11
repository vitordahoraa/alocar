import '../Style/FrontPage.css';
import {Link} from 'react-router-dom'

function FrontPage() {
  return (
    <div className="Register">

        <form>
            <h1>Nome de usu&aacute;rio</h1>
            <input id='username' type="text"/>
            <h1>Senha</h1>
            <input id='password' type="password"/>
            <h1>Confirmar Senha</h1>
            <input id='passwordConfirm' type="password"/>
            <h1>E-mail</h1>
            <input id='E-mail' type="email"/>
            <h1>CPF</h1>
            <input id='CPF' type="text"/>
            <h1>Nome Completo</h1>
            <input id='FullName' type="text"/>
        <button type='submit' value="Submit">Submit</button>
        </form>
    </div>
  );
}

export default FrontPage;
