import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class Carro extends Component{

    constructor(props){
        super(props);

        this.state = {
            imageSrc: "",
            CarModel: "",
            CarPlaca:"",
            CarDailyPrice: 0.0,
            CarStatus:0,
            index:0,
            showStatus:true
        }
    }

    isCarroDisponivel(props){
        const statusCar = props.carStatus
        const indexCar = props.index
        const showStatusCar = props.showStatus
        if(!showStatusCar)
            return

        if(statusCar){
            return <Link className="Status" to={"../carros/"+indexCar}>Disponível</Link>
        }
        return <h1 className='Status'>Indisponível</h1>
    }

    render(){
        let image = this.props.imageSrc
        
        return(
            <div className='Carro'>
                <img src={image} alt="Meaningful Text"></img>
                <h1 className='Modelo'>Modelo: {this.props.CarModel}</h1>
                <h1 className='Placa'>Placa: {this.props.CarPlaca}</h1>
                <h1 className='Preço'>Diária: R$ {this.props.CarDailyPrice}</h1>
                <this.isCarroDisponivel carStatus={this.props.CarStatus} index={this.props.index} showStatus={this.props.showStatus}/>
            </div>
        )
    }
}