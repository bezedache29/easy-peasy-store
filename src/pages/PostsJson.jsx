import { useStoreActions, useStoreState } from 'easy-peasy';
import React from 'react'

export default function PostsJson() {
  const savePost = useStoreActions((actions) => actions.posts.savePost);
  const posts = useStoreState((state) => state.posts.posts)
  const [value, setValue] = React.useState('');

  console.log(posts)

  return (
    <>
      <input onChange={(e) => setValue(e.target.value)} value={value} />
      <button onClick={() => savePost(value)}>Add Post</button>
    </>
  );
}
