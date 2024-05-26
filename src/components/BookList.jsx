import React, { useEffect, useState } from 'react'
import book from '../assets/book.png';
import { Link, useLocation } from 'react-router-dom';
import useTheme from '../hooks/useTheme';

import trash from '../assets/trash.svg';
import pencil from '../assets/pencil.svg';
import useFireStore from '../hooks/useFireStore';

export default function BookList() {

    let location = useLocation();
    let params = new URLSearchParams(location.search);
    let search = params.get('search')

    const {getCollection,deleDocument} = useFireStore()
    let  {error,data,loading} = getCollection("books")

    let deleteBook =  async (e, id) => {
        e.preventDefault();
       
        await   deleDocument("books",id)
      
    }

    

    if (error) {
        return <p className=' text-center mt-10'>{error}</p>
    }

    let { isDark } = useTheme();

    return (
        <div>
            {loading && <p>loading ... </p>}
            {/* book list */}
            {!!data && (
                <div className='grid grid-cols-2 md:grid-cols-4 gap-4 my-3'>
                    {data.map((b) => (
                        <Link to={`/books/${b.id}`} key={b.id}>
                            <div className={`p-4 border border-1 min-h-[420px] ${isDark ? 'text-white bg-dcard border-primary' : ''}`}>
                                <img src={book} alt="" />
                                <div className='text-center space-y-2 mt-3'>
                                    <h1>{b.title}</h1>
                                    <p>{b.description}</p>
                                    {/* genres */}
                                    <div className='flex flex-wrap justify-between items-center'>
                                        <div>
                                            {b.categories.map(c => (
                                                <span key={c} className='mx-1 my-1 text-white rounded-full px-2 py-1 text-sm bg-blue-500'> {c}</span>
                                            ))}
                                        </div>
                                        <div className='flex space-x-5 items-center' >
                                            <Link to={`/edit/${b.id}`}>
                                                <img src={pencil} alt="" />
                                            </Link>
                                            <img src={trash} alt="" onClick={(e) => deleteBook(e, b.id)} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            )}
            {data && !data.length && <p className='text-center text-xl text-gray-500'>No Search Results Found</p>}
        </div>
    )
}
