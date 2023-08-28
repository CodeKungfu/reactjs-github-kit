import { useRef } from 'react';
import useIntersectionObserver from "@/hooks/useIntersectionObserver";

export function LazyLoadWithSrcSet({url, srcset}) {
    const imgRef = useRef<HTMLImageElement | null>();
    useIntersectionObserver({
        target: imgRef,
        onIntersect: () => {
            if (imgRef.current) {
                imgRef.current.src = url;
                imgRef.current.srcset = srcset;
            }
        },
    });
    return (
        <img
            ref={imgRef}
            width="100"
            height="100"
            alt=""
            className="w-[60%] mx-auto"
        />
    );
}