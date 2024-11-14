import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <div className='header'>
       <div className="header-contents">
        <h2>¡Tu Orden Favorita de Comida está aquí!</h2>
        <p> 
        Elige de un menú variado con deliciosos platos hechos con los mejores ingredientes,
         diseñado para satisfacer tus antojos y mejorar tu experiencia gastronómica
        </p>
        <button>View Menu</button>
      </div> 
    </div>
  )
}

export default Header
