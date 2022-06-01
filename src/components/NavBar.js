import React from 'react'
import { Link, useNavigate} from 'react-router-dom'
import { useState } from 'react'
import { auth } from '../firebase'
import logoReact  from './img/logo192.png'


const NavBar = ( {autenticacionUser} ) => {

  const navigate= useNavigate()

  const cerrarSesion=()=>{
    auth.signOut()
    .then(()=>{
      navigate('/login')
    })
  }

  return (
  <header className='navbar navbar-dark bg-primary px-3'>
      <Link to='/' className='navbar-brand'>{<img src={logoReact} className='w-25' alt='Logo de react'></img>}</Link>
      <nav className='d-flex'>
        <Link to='/' className='btn btn-primary '>Inicio</Link>
        {
          autenticacionUser === false ?  (<Link to='/login' className='btn btn-primary '>Login</Link>): (<Link to='/admin' className='btn btn-primary '>Admin</Link>)
        }
        {
          autenticacionUser !== false ? (<button className='btn btn-primary'
          onClick={()=>cerrarSesion()}>Salir</button>):null
        }
      </nav>
  </header>
  )
}

export default NavBar