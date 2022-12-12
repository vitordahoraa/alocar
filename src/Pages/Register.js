import '../Style/FrontPage.css';
import {useState } from 'react';
import {useForm} from 'react-hook-form'

function FrontPage() {

    const {handleSubmit} = useForm()
    const [username, setUsername] = useState()
    const [Senha, setSenha] = useState()
    const [confirmSenha, setConfirmSenha] = useState()
    const [email, setEmail] = useState()
    const [cpf, setCpf] = useState()
    const [nome, setNome] = useState()

    const postUser = (data) =>{
        fetch('http://localhost:3001/users/',{
            method: 'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body:JSON.stringify(data)
        })
    }


    const getRecentlyCreatedUser = (username) => {
        fetch('http://localhost:3001/users/?username='+username,{
            method: 'GET',
            headers:{
                'Content-Type': 'application/json'
            }
        }).then((response)=>{
            console.log(response)
            if(!response.ok){
                console.log("Não foi possível criar o usuário. Já existente")
                return 
            }
            return response.body.id
        })
    }

    const postData = async () =>{

        if(Senha !== confirmSenha){
            alert("Confirmação de senha invalida. Favor, digitar sua senha novamente!")
            return
        }

        let data = {
            username:username,
            Senha:Senha
        }

        postUser(data)

        const user_id = getRecentlyCreatedUser(username)
        data ={
            nome:nome,
            cpf:cpf,
            email:email,
            user_id:user_id
        }

        fetch('http://localhost:3001/clientes/',{
            method: 'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body:JSON.stringify(data)
            }
        )
        .catch((err) =>{
            console.log(data)
            console.log(err)
            alert(err.message)
        })
    }
    


  return (
    <div className="Register">

        <form onSubmit={handleSubmit(postData)}>
            <h1>Nome de usu&aacute;rio</h1>
            <input id='username' type="text" onChange={(e) => setUsername(e.target.value)}/>
            <h1>Senha</h1>
            <input id='password' type="password" onChange={(e) => setSenha(e.target.value)}/>
            <h1>Confirmar Senha</h1>
            <input id='passwordConfirm' type="password" onChange={(e) => setConfirmSenha(e.target.value)}/>
            <h1>E-mail</h1>
            <input id='E-mail' type="email" onChange={(e) => setEmail(e.target.value)}/>
            <h1>CPF</h1>
            <input id='CPF' type="text" onChange={(e) => setCpf(e.target.value)}/>
            <h1>Nome Completo</h1>
            <input id='FullName' type="text" onChange={(e) => setNome(e.target.value)}/>
            <input type='submit' value='Enviar'/>
        </form>
    </div>
  );
}

export default FrontPage;
