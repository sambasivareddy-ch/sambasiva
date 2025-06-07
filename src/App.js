import React from 'react';
import { Route, Routes } from 'react-router-dom';
import ProjectPage from './pages/ProjectPage';
import Main from './pages/Main';
import ProjectDetailsPage from './pages/ProjectDetailsPage';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Main />} exact />
      <Route path='/project/:id' element={<ProjectDetailsPage/>} exact />
      <Route path='/projects' element={<ProjectPage />} exact />
    </Routes>
  );
}

export default App;
