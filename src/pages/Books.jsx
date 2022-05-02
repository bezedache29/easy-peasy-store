import { useStoreActions, useStoreState } from 'easy-peasy'
import React, { useCallback, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Books() {

  const books = useStoreState((state) => state.books)
  const addBook = useStoreActions((actions) => actions.addBook)
  const loadBook = useStoreActions((actions => actions.loadBook))

  const navigate = useNavigate()

  const [title, setTitle] = useState('')
  const [load, setLoad] = useState(false)

  useEffect(() => {
    if (load) {
      setLoad(false)
    }
  }, [load])

  const handleSubmit = (e) => {
    e.preventDefault()
    addBook(title)
    setLoad(true)
  }

  const goToBook = useCallback((book) => {
    loadBook(book)
    // navigate(`/books/${book.title}`)
    navigate(`/books/show`)
  });

  return (
    <div>
      <div>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={(e) => setTitle(e.target.value)} value={title} />
        <button>Ajouter un livre</button>
      </form>
      </div>
      <div>
        <h1>Liste des livres</h1>
      </div>
      <div>
        <ul>
          {books.map((book, index) => (
            <li key={index} onClick={() => goToBook(book)}>{book.title}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}
