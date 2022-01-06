import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getOrders } from '../../../redux/actions';
import BillBar from '../../ChildrenComponents/BillBar.jsx';
import OrdersCarousel from '../../ChildrenComponents/OrdersCarousel.jsx';
import PayBar from '../../ChildrenComponents/PayBar.jsx';

const BillBoard = () => {

  const dispatch = useDispatch();
  const { idResto, idTable } = useParams();
  const [time, setTime] = useState(Date.now());
  // this is what makes the cart self update from the put of the waiter
  useEffect(() => {
    const interval = setInterval(() => setTime(Date.now()), 30000);
    dispatch(getOrders(idResto, idTable));
    return () => {
      clearInterval(interval);
    };
  }, [time, dispatch, idTable, idResto]);

  return (
    <div className='py-12 flex flex-col h-screen justify-between'>
      <BillBar />
      <OrdersCarousel />
      <PayBar />
    </div>
  );
}


export default BillBoard
