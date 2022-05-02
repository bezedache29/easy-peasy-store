import React from 'react'
import { NavLink } from 'react-router-dom'

export default function NavbarApp() {
  return (
    <nav>
      <ul>
        <NavLink to="/">Accueil</NavLink> | 
        <NavLink to="/books">Livres</NavLink>
      </ul>
    </nav>
  )
}
