import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'
const Footer = () => {
  return (
    <div className='footer' id= 'footer'>
        <div className="footer-content">
            <div className="footer-content-left">

            <img src={assets.eslogan} alt="" />
                <p>En "Delicias Latinas", cada plato es un viaje a través del tiempo y la cultura. Nuestras recetas se transmiten de generación en generación, cada una llevando consigo la esencia de nuestras raíces. Desde la vibrante salsa del ceviche hasta el calor acogedor de un arroz con pollo, cada bocado evoca recuerdos y tradiciones familiares. 
                    Creemos que la comida no solo nutre el cuerpo, sino también el alma, y cada receta es una historia que celebra la riqueza de la cocina latina. Ven y descubre cómo nuestros sabores pueden conectar generaciones y contar historias que perduran en el corazón.

.</p>
                <div className="footer-social-icons">
                    <img src={assets.facebook_icon} alt="" />
                    <img src={assets.twitter_icon} alt="" />
                    <img src={assets.linkedin_icon} alt="" />
            </div>
            <div className="footer-content-center">
                <h2>Compañia</h2>
                <ul>
                    <li>Home</li>
                    <li>Sobre Nosotros</li>
                    <li>Entrega a Domicilio</li>
                    <li>Politica de Privacidad</li>
                </ul>
                
                </div>
            </div>

            <div className="footer-content-rigth">
                <h2>CONTACTANOS</h2>
                <ul>
                    <li>57-317-813-18-64</li>
                    <li>contact@DeliciasLatinas.com</li>
                </ul>

            </div>
            
        </div>
         <hr/>
         <p className="footer-copyrigth">copyright 2024 Delicias latinas.com-All rigth reserved.</p>
    </div>
  )
}

export default Footer