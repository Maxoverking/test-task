import { lazy } from 'react';
// import { useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
const Layout = lazy(() => import('./component/pages/Layout/Layout.jsx'));
// import { usersTweetsSelector } from './redux/users/selectors.js';
const HomePage = lazy(() => import('./component/pages/HomePage/HomePage.jsx'));
const CardPage = lazy(() => import('./component/pages/CardPage/CardPage.jsx'));

function App() {
  // const tweets = useSelector(usersTweetsSelector);
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/tweets" element={<CardPage />} />
          <Route path="*" element={<HomePage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
