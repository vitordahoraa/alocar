import CarroComponent from '../components/CarroComponent'
import React, { useEffect, useState } from 'react'
import LoginComponent from '../components/LoginBarComponent'
import { useParams } from 'react-router-dom'

function Catalogo() {

    const {id} = useParams();
    
    const [carros, setCarro] = useState([])

    useEffect(function(){
        getCarros();
    },[])

    const getCarros = async ()=>{

        let result = await fetch('http://localhost:3001/carros/'+id,{
            methon: 'GET',
            headers:{
                'Content-Type': 'application/json'
            }
        })
        result = await result.json()
        
        setCarro(result)
        
    } 
    console.log(carros)
    return (
        <div className="front">
            <LoginComponent />
            <CarroComponent  imageSrc= '/polo.png' CarModel= {carros.modelo} CarPlaca= {carros.placa} CarDailyPrice= {carros.diaria} CarStatus={carros.status} index={carros.id} showStatus={false}/>
            
            
            <h1>Você deseja alugar esse carro por quantos dias</h1>
            <form>
                <input></input>
            </form>
        </div>
  );
}

export default Catalogo;
