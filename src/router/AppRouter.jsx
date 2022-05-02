import React from 'react'
import { Route, Routes } from 'react-router-dom'
import NavbarApp from '../components/NavbarApp'
import Books from '../pages/Books'
import HomePage from '../pages/HomePage'

export default function AppRouter() {
  return (
    <>
        <NavbarApp />
      
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route element={<Books />} path="/books" />
        </Routes>

    </>
  )
}
