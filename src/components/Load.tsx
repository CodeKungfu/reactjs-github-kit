import {Icon} from '@/components/Icon';
export function Load({load}) {
    return (
        <>
            <div style={{ display: load ? 'block' : 'none' }} className='text-center'>
                <Icon className="fa-solid fa-spinner text-blue-600 text-5xl"></Icon>
            </div>
        </>
        
    )
}