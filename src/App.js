import React from 'react';
import { Route, Routes } from 'react-router-dom';
import ProjectPage from './pages/ProjectPage';
import Main from './pages/Main';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Main />} exact />
        <Route path='/projects' element={<ProjectPage />} exact />
      </Routes>
    </div>
  );
}

export default App;
