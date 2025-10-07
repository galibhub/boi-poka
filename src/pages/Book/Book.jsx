import React, { use } from "react";
import { FaStarHalfAlt } from "react-icons/fa";
import { FcButtingIn } from "react-icons/fc";
import { Link } from "react-router";

// const Book = ({bookPromise}) => {
//     const data=use(bookPromise)
//     console.log(data);

const Book = ({ singleBook }) => {

    const {bookId,bookName,author,image,rating,category,tags,yearOfPublishing,
totalPages,publisher}=singleBook;

  return (
   <Link to={`/bookDetails/${bookId}`}>

     <div className="card bg-base-100  shadow border-2 p-6">
      <figure className="p-3 bg-gray-100 w-2/3 mx-auto rounded-xl">
        <img className="h-[166px]"
          src={image}
          alt="Books"
        />
      </figure>
      <div className="card-body">
        <div className="flex justify-center gap-3">
            {
                tags.map(tag=><button className="btn">{tag}</button>)
            }
        </div>
        <h2 className="card-title">
         {bookName}
          <div className="badge badge-secondary">{yearOfPublishing}</div>
        </h2>
        <p className="text-normal font-semibold">Book by:{publisher}</p>
        <div className="border-t-1 border-dashed"></div>
        <div className="card-actions justify-end">
          <div className="badge badge-outline">{category}</div>
          <div className="badge badge-outline">{rating}<FaStarHalfAlt /></div>
        </div>
      </div>
    </div>
   </Link>
  );
};

export default Book;
