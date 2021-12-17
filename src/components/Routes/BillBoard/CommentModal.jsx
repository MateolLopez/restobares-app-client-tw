import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { addOrderToCart } from "../../../redux/actions";

const CommentModal = ({ showModal, setShowModal }) => {


	const {cart}= useSelector((state)=>state);

     const dispatch = useDispatch();

    const [input, setInput] = useState ({
        comment: ''
    })


    const pedir = () => {
      dispatch(addOrderToCart());
    };
    
    const changeModal = () => {
        setShowModal((prev) => !prev);
        pedir()
    };
    const handleSubmit = (e) => {
        e.preventDefault();
      };

    const handleChange = (e) => {
        setInput({
        	...input,
        	[e.target.name]: e.target.value
    	})
    }
  
    

  return (
    <>
      {showModal ? (
      <div className="fixed inset-0 bg-black bg-opacity-40 pt-60">
      <div className="w-8/12 mx-auto h-64 bg-pink-800  border-2 border-pink-900 rounded-3xl">
        <h1 className='my-4 text-white'>Desea añadir un comentario?</h1>
      <div className="mx-4">
        <label>
          <textarea onChange={(e)=>handleChange(e)} className="bg-pink-900 w-full h-40 rounded-xl text-white text-xl"></textarea>
        </label>
        <button onClick={changeModal} className="float-left bg-pink-900 text-white rounded-xl ml-2 px-4 mt-3">
          Enviar
        </button>
        <button onClick={changeModal} className="float-right bg-pink-900 text-white rounded-xl mr-2 px-4 mt-3">
          No
        </button>
      </div>
        </div>  
      </div>
      ) : null}
    </>
  );
};

export default CommentModal;
