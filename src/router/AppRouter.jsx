import React from 'react'
import { Route, Routes } from 'react-router-dom'
import NavbarApp from '../components/NavbarApp'
import Book from '../pages/Book'
import Books from '../pages/Books'
import HomePage from '../pages/HomePage'
import PostsJson from '../pages/PostsJson'

export default function AppRouter() {
  return (
    <>
        <NavbarApp />
      
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/books" element={<Books />} />
          <Route path="/books/:title" element={<Book />} />
          <Route path="/books/show" element={<Book />} />
          <Route path="/posts" element={<PostsJson />} />
        </Routes>

    </>
  )
}
