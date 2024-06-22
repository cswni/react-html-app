import React from 'react'
import { Link } from 'react-router-dom'

const MenuLateral = () => {
  return (
    <nav>
        <ul id="menu_principal">
        
        <li>
            <Link to="/"><i className="material-icons-outlined">home</i> Inicio</Link>
        </li>
        
        <li>
            <Link to="/productos"><i className="material-icons-outlined">local_grocery_store</i> Productos</Link>
         </li>
        <li>
            <Link to="/clientes"><i className="material-icons-outlined">groups</i> Clientes</Link>
        </li>
        
        <li>
         <Link to="/ventas"><i className="material-icons-outlined">home</i> Ventas</Link>
        </li>

         </ul>
    </nav>
  )
} 

export default MenuLateral