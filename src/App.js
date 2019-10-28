import React from 'react';

import PostList from './components/post-list/post-list.component';
import PostForm from './components/post-form/post-form.component';
import { PostProvider } from './contexts/PostContext';

import './App.css';

const App = () => {

  return (
    <PostProvider>
      <div className='App'>
        <PostList />
        <PostForm />
      </div>
    </PostProvider>
  );
}

export default App;
