import React from 'react'
import { useGlobalContext } from './Context'

const Pagination = () => {
    const { page, nbPages } = useGlobalContext();
    return (
        <>
            <div className="pagination_btn"></div>
            {/* <button onClick={() => getPrevPage()}>Previous</button> */}
            <p>{page} of {nbPages} </p>
            {/* <button onClick={() => getNextPage()}>Next</button> */}
        </>
    )
}

export default Pagination