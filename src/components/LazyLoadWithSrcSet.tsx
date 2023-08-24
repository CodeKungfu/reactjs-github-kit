import { useRef, useState, useEffect } from 'react';
export function LazyLoadWithSrcSet({url, srcset}) {
    const [isIntersecting, setIsIntersecting] = useState(false);
    const imgRef = useRef();
    const handleIntersection = (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
            setIsIntersecting(entry.isIntersecting);
        }
    };
    useEffect(() => {
        const observer = new IntersectionObserver(handleIntersection);
        if (imgRef.current) {
            observer.observe(imgRef.current);
        }
        return () => {
            if (imgRef.current) {
                observer.unobserve(imgRef.current);
            }
        };
    }, []);
    return (
        <img
            ref={imgRef}
            width="100"
            height="100"
            alt=""
            src={isIntersecting ? url : ''}
            srcSet={isIntersecting ? srcset : ''}
            className="w-[60%] mx-auto"
        />
    );
}