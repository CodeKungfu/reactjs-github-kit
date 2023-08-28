import { Suspense, lazy } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
const Home = lazy(() => import(/*webpackChunkName: 'home-page' */ '@/pages/home/index'));
const Battle = lazy(() => import(/*webpackChunkName: 'battle-page' */ '@/pages/battle/index'));

export default function App() {
    const isHome = !(window.location.href.lastIndexOf('/battle') > -1);
    const goBattle = () => {
        const userOne = localStorage.getItem('battle-userOne');
        const userTwo = localStorage.getItem('battle-userTwo');
        if (userOne)
            localStorage.removeItem(`${userOne}`);
            localStorage.removeItem('battle-userOne');
        if (userTwo)
            localStorage.removeItem(`${userTwo}`);
            localStorage.removeItem('battle-userTwo');
    }
    return (
        <BrowserRouter basename="/reactjs-github-kit">
            <Suspense fallback={<></>}>
                <div className='py-3'>
                    <a href="/" className={`mx-8 ${ isHome ? "text-orange-500" : ""}`}>Home</a>
                    <a href="/battle" onClick={goBattle} className={`mx-8 ${!isHome ? "text-orange-500" : ""}`}>Battle</a>
                </div>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/battle" element={<Battle />} />
                </Routes>
            </Suspense>
        </BrowserRouter>
    )
}