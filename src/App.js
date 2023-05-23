import { lazy } from 'react';
import { useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { usersTweetsSelector } from './redux/users/selectors.js';
const HomePage = lazy(() => import('./component/pages/HomePage/HomePage.jsx'));
const CardPage = lazy(() => import('./component/pages/CardPage/CardPage.jsx'));

function App() {
  const tweets = useSelector(usersTweetsSelector);
  return (
    <>
      <Routes>
        <Route index element={<HomePage />} />
        {tweets ? (
          <Route path="/tweets" element={<CardPage />} />
        ) : (
          <Route path="/tweets" element={<CardPage />} />
        )}
        <Route path="*" element={<HomePage />} />
      </Routes>
    </>
  );
}

export default App;
