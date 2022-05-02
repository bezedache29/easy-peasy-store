import { useStoreState } from 'easy-peasy';
import React from 'react'
// import { useParams } from 'react-router-dom';

export default function Book() {

  // const { title } = useParams();

  const book = useStoreState((state) => state.books.book)

  console.log(book)


  return (
    <div>Book {book.title}</div>
  )
}
