import React from 'react'
import * as BiIcons from 'react-icons/bi'
import '../styles/Feed.css'

function TareaCard(props) {
    return (
        <div className = "card">
        <BiIcons.BiTask className = "card-icon"/>
        <div class = "card-information">
            <h3>Actividad: {props.tarea.nombreAct}</h3>
            <h3>Materia: {props.tarea.materia}</h3>
            <h3>Grupo: {props.tarea.grupo}</h3>
            <h3>Fecha de entrega: {props.tarea.fecha}</h3>
        </div>
        </div>
    )
}

export default TareaCard

