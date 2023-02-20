import React from 'react';
import { Route, Routes } from 'react-router';
import Layout from './components/Layout';

// pages
import Example from './pages/Example';

function App() {
  return (
    <div>
      <Routes>
        <Route element={<Layout />}>
          <Route exact path="/" element={<Example />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
