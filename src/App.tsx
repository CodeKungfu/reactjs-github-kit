import React from 'react';
import { BrowserRouter, Outlet, Route, Routes, useLocation, useNavigate } from "react-router-dom";
const Home = React.lazy(() => import(/*webpackChunkName: 'home-page' */ '@/pages/home/index'));
const Battle = React.lazy(() => import(/*webpackChunkName: 'battle-page' */ '@/pages/battle/index'));
const Result = React.lazy(() => import(/*webpackChunkName: 'result-page' */ '@/pages/result/index'));

const Layout = () => {
    const navigate = useNavigate();
    const { pathname } = useLocation();
  
    const isBattlePage = pathname.includes("/battle") || pathname.includes("/result");
    const goBattle = () => {
        navigate('/battle');
    };
    return (
      <div className="mx-8 px-4 flex flex-col h-screen">
        <div className="py-4">
          <button
            className={`mr-4 ${!isBattlePage ? 'text-orange-500' : ''}`}
            onClick={() => navigate('/')}
          >
            Home
          </button>
          <button
            className={`mr-4 ${isBattlePage ? 'text-orange-500' : ''}`}
            onClick={goBattle}
          >
            Battle
          </button>
        </div>
        <div className="h-full flex-auto">
          <Outlet />
        </div>
      </div>
    );
  }

export default function App() {
    return (
        // <BrowserRouter basename="/reactjs-github-kit"></BrowserRouter>
        <BrowserRouter>
            <React.Suspense fallback={<></>}>
                <Routes>
                <Route path="/" element={<Layout />}>
                    <Route path="/" element={<Home />} />
                    <Route path="/battle" element={<Battle />} />
                    <Route path="/result" element={<Result />} />
                </Route>
                    
                </Routes>
            </React.Suspense>
        </BrowserRouter>
    )
}