import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "../Redux/Counter/actions";

export const HooksCounter = () => {
  const count = useSelector((state) => state.value);
  const dispatch = useDispatch();
  const incrementHandler = () => {
    dispatch(increment());
  };
  const decrementHandler = () => {
    dispatch(decrement());
  };
  return (
    <div className="p-4 h-auto flex flex-col items-center justify-center space-y-5 bg-white rounded shadow">
      <div className="text-2xl font-semibold">{count}</div>
      <div className="flex space-x-3">
        <button
          className="bg-indigo-400 text-white px-3 py-2 rounded shadow"
          onClick={() => incrementHandler(3)}
        >
          Increment
        </button>
        <button
          className="bg-red-400 text-white px-3 py-2 rounded shadow"
          onClick={() => decrementHandler(2)}
        >
          Decrement
        </button>
      </div>
    </div>
  );
};
