import { useRef, useEffect } from 'react';
import {Icon} from '@/components/Icon';
export function Loading({load, loadMore}) {
    const loadingRef = useRef();
    const handleIntersection = (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
            if (loadMore) {
                loadMore()
            }
        }
    };
    useEffect(() => {
        const observer = new IntersectionObserver(handleIntersection);
        if (loadingRef.current) {
            observer.observe(loadingRef.current);
        }
        return () => {
            if (loadingRef.current) {
                observer.unobserve(loadingRef.current);
            }
        };
    }, []);
    return (
        <>
            <div ref={loadingRef} style={{ display: load ? 'block' : 'none' }} className='text-center'>
                <Icon className="fa-solid fa-spinner text-blue-600 text-5xl"></Icon>
            </div>
        </>
        
    )
}