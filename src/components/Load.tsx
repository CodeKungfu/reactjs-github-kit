export function Load({load}) {
    return (
        <>
            <div style={{ display: load ? 'block' : 'none' }} className='text-center'>
                <i className="fa-solid fa-spinner text-blue-600 text-5xl"></i>
            </div>
        </>
        
    )
}