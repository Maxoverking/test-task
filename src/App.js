import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
const HomePage = lazy(() => import('./component/pages/HomePage'));
const CardPage = lazy(() => import('./component/pages/CardPage'));

function App() {
  return (
    <>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/tweets" element={<CardPage />} />
        <Route path="*" element={<HomePage />} />
      </Routes>
    </>
  );
}

export default App;
