import React from 'react';
import { Route, Routes } from 'react-router-dom';
import ProjectPage from './pages/ProjectPage';
import Main from './pages/Main';

import { SpeedInsights } from '@vercel/speed-insights/next';

const App = () => {
  return (
      <>
        <Routes>
          <Route path='/' element={<Main />} exact />
          <Route path='/projects' element={<ProjectPage />} exact />
        </Routes>
        <SpeedInsights/>
      </>
  );
}

export default App;
