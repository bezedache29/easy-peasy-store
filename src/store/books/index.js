import { action, createStore } from "easy-peasy";

export const booksStore = {

  books: [],
  book: {},

  addBook: action((state, payload) => {
    console.log(payload)
    state.books.push({title: payload});
  }),
  loadBook: action((state, payload) => {
    state.book = payload
  })

};
// import { action, createStore } from "easy-peasy";

// export const booksStore = createStore({

//   books: [],
//   book: {},

//   addBook: action((state, payload) => {
//     console.log(payload)
//     state.books.push({title: payload});
//   }),
//   loadBook: action((state, payload) => {
//     state.book = payload
//   })

// });