import React, { useState } from "react";
import Counter from "./Components/Counter";
import Stats from "./Components/Stats";

const initialState = [
  {
    id: 1,
    count: 0,
  },
  {
    id: 2,
    count: 0,
  },
];

const Home = () => {
  const [state, setState] = useState(initialState);

  //increment

  const increment = (id) => {
    const updatedCounter = state.map((c) => {
      if (c.id === id) {
        return {
          ...c,
          count: c.count + 1,
        };
      }
      return {
        ...c,
      };
    });
    setState(updatedCounter);
  };

  //decrement

  const decrement = (id) => {
    const updatedCounter = state.map((c) => {
      if (c.id === id) {
        return {
          ...c,
          count: c.count - 1,
        };
      }
      return {
        ...c,
      };
    });
    setState(updatedCounter);
  };

  //total count

  const totalCount = () => {
    return state.reduce((total, counter) => total + counter.count, 0);
  };

  return (
    <div className="w-screen h-screen p-10 bg-gray-100 text-slate-700">
      <h1 className="max-w-md mx-auto text-center text-2xl font-bold">
        Simple Counter Application
      </h1>

      <div className="max-w-md mx-auto mt-10 space-y-5">
        {state.map((count) => (
          <Counter
            key={count.id}
            id={count.id}
            count={count.count}
            increment={increment}
            decrement={decrement}
          />
        ))}

        <Stats count={totalCount()} />
      </div>
    </div>
  );
};

export default Home;
