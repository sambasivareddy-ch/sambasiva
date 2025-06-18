import React from 'react';
import { Route, Routes } from 'react-router-dom';
import ProjectPage from './pages/ProjectPage';
import Main from './pages/Main';
import ProjectDetailsPage from './pages/ProjectDetailsPage';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Main />} exact />
      <Route path='/project/:id' element={<ProjectDetailsPage/>} exact />
      <Route path='/projects' element={<ProjectPage />} exact />
      <Route path="/blog/:slug" element={<BlogPost />} exact />
      <Route path="/blog" element={<Blog />} exact />
      <Route path='*' element={<Main />} />
    </Routes>
  );
}

export default App;
