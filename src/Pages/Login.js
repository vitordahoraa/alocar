import '../Style/FrontPage.css';
import {Link} from 'react-router-dom'

function FrontPage() {
  return (
    <div className="login">

        <form>
            <h1>Nome de usu&aacute;rio</h1>
            <input id='username' type="text"/>
            <h1>Senha</h1>
            <input id='password' type="password"/>
        <button type='submit' value="Submit">Submit</button>
        </form>
    </div>
  );
}

export default FrontPage;
