import React from "react";
import { useLoaderData, useParams } from "react-router";
import { addToStoredDB } from "../../utility/addToDB";

const BookDetails = () => {
  const { id } = useParams();
  const bookId = parseInt(id);
  const data = useLoaderData();
  const singleBook = data.find((book) => book.bookId === bookId);

  const { bookName, image } = singleBook;

const handleMarkAsread=id=>{
    //store with id
    //where to store
    //array or collection
    //if book is exist already the alert
    //if book not exist then push in the collection or arraty
    addToStoredDB(id)

}


  return (
    <div className=" w-2/3 mx-auto">
      <img className="w-50" src={image} alt="" />
      <h5>{bookName}</h5>

      <button onClick={()=>handleMarkAsread(bookId)} className="btn btn-accent m-2">Mark as Read</button>
      <button className="btn btn-info m-2">Add To WishList</button>
    </div>
  );
};

export default BookDetails;
