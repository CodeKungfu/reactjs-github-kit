import { useRef } from 'react';
import useIntersectionObserver from "@/hooks/useIntersectionObserver";
import {Icon} from '@/components/Icon';

export function InfinityLoad({load, loadMore}) {
    const loadingRef = useRef();

    useIntersectionObserver({
        target: loadingRef,
        onIntersect: () => {
          if (loadingRef.current && load) {
            loadMore();
          }
        },
    })
    return (
        <>
            <div ref={loadingRef} style={{ display: load ? 'block' : 'none' }} className='text-center'>
                <Icon className="fa-solid fa-spinner text-blue-600 text-5xl"></Icon>
            </div>
        </>
        
    )
}