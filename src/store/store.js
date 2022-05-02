// GlobalStore.js
import { createStore } from 'easy-peasy';

import { booksStore } from './books';
import { postsStore } from './posts';

const globalModel = {
  books: booksStore,
  posts: postsStore
};

const GlobalStore = createStore(globalModel);
export default GlobalStore;