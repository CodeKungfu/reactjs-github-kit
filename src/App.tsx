import { Suspense, lazy } from 'react';
import { BrowserRouter, Route, Link, Routes } from 'react-router-dom';
const Home = lazy(() => import(/*webpackChunkName: 'home-page' */ '@/pages/home/index'));
const Battle = lazy(() => import(/*webpackChunkName: 'battle-page' */ '@/pages/battle/index'));

export default function App() {
    return (
        <BrowserRouter basename="/reactjs-github-kit">
            <Suspense fallback={<></>}>
                <div className='py-3'>
                    <Link to="/" className='mx-8'>Home</Link>
                    <Link to="/battle" className='mx-8'>Battle</Link>
                </div>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/battle" element={<Battle />} />
                </Routes>
            </Suspense>
        </BrowserRouter>
    )
}