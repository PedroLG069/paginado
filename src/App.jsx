import React from 'react'
import { Routes,Route, NavLink } from 'react-router-dom'
import Index from './routes/Index'
import Contactos from './routes/Contactos'
import About from './routes/About'
import ContactoDinamico from './routes/ContactoDinamico'

const App = () => {
  return (
    <div className='mx-auto'>
      <nav>
        <NavLink to ="/">Inicio</NavLink>
        <NavLink to ="/Contactos">Contactos</NavLink>
        <NavLink to ="/about">Acerca de nosotros</NavLink>
    </nav>

  <Routes>
    <Route path='/' index element={<Index />} />
    <Route path='/Contactos' element={<Contactos />} />
    <Route path='/About' element={<About />} />
    <Route path='/Contacto/:nombre' element={<ContactoDinamico />}/>
  </Routes>
    </div>
  )
}

export default App;