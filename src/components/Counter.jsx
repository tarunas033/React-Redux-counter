import React from 'react'
import {useDispatch, useSelector } from 'react-redux'
import { addAction ,reduceAction} from '../redux/action';

  export const Counter = () => {
    const counter  = useSelector((store) => store.counter);
    const dispatch = useDispatch();
    console.log(counter);

  const handleAdd = () => {
  dispatch(addAction(1))
  }
  const handleReduce = () => {
    dispatch(reduceAction(1))
    }
  
  return(
    <div>
       <h1>Counter:{counter}</h1>
       <button onClick={handleAdd}>Add</button>
       <button onClick={handleReduce}>Reduce</button>  
    </div>
  ) 
  
}

