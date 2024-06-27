import React from 'react'
import { useParams } from 'react-router-dom'

function ContactoDinamico() {

const {nombre, apellido} = useParams();
  return (
   <div>Hola {nombre} Y mi apellido es {apellido}</div>
  )
}

export default ContactoDinamico