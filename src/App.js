import React from 'react';
import { Route, Routes } from 'react-router-dom';
import ProjectPage from './pages/ProjectPage';
import Main from './pages/Main';
import Blog from './pages/Blog';

const App = () => {
  return (
      <Routes>
        <Route path='/' element={<Main />} exact />
        <Route path='/projects' element={<ProjectPage />} exact />
      </Routes>
  );
}

export default App;
