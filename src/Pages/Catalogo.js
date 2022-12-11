import CarroComponent from '../components/CarroComponent'
import React, { useEffect, useState } from 'react'
import LoginComponent from '../components/LoginBarComponent'

function Catalogo() {


    const [carros, setCarro] = useState([])

    useEffect(function(){
        getCarros();
    },[])

    const getCarros = async ()=>{

        let result = await fetch('http://localhost:3001/carros/',{
            methon: 'GET',
            headers:{
                'Content-Type': 'application/json'
            }
        })
        result = await result.json()
        setCarro(result)
        
    } 

    return (
        <div className="front">
            
            <LoginComponent />
            {
            carros.map((item,index) =>
                <CarroComponent key={index} imageSrc= 'polo.png' CarModel= {item.modelo} CarPlaca= {item.placa} CarDailyPrice= {item.diaria} CarStatus={item.status} index={item.id} showStatus={true}/>
            )
            }
        </div>
  );
}

export default Catalogo;
