import axios from 'axios';
import { action, thunk } from 'easy-peasy';

export const postsStore = {
  // Store
  posts: [],

  // Actions
  addPost: action((state, payload) => {
    state.posts.push(payload);
  }),
  savePost: thunk(async (actions, payload) => {
    const save = {
      userId: 1,
      title: payload,
      body: payload
    }
    const { data } = await axios.post('https://jsonplaceholder.typicode.com/posts', save);
    actions.addPost(data);
  }),
};