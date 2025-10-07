import React from 'react';
import bookimage from "../../assets/books.jpg"

const Banner = () => {
    return (
       <div className='flex justify-between items-center p-10 min-h-[400px] max-w-7xl mx-auto'>
    <div className='flex-1 pr-8'>
        <h1 className='text-4xl font-bold mb-6'>Discover Your Next Favorite Book</h1>
        <button className='btn btn-primary'>Browse Books</button>
    </div>
    <div className='flex-1 flex justify-end'>
        <img className='w-full max-w-md h-auto rounded-xl shadow-lg' src={bookimage} alt="Books collection" />
    </div>
</div>
    );
};

export default Banner;