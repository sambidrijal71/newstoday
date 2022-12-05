import React from 'react';
import Pagination from './Pagination';
import Search from './Search';
import Stories from './Stories';

const App = () => {
    return (
        <>
            <div>News Today</div>
            <Search />
            <Pagination />
            <Stories />
        </>
    )
}

export default App