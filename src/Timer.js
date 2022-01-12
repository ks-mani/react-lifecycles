import React, { useState, useEffect, useRef, useCallback } from 'react';

export default function Timer() {
  let [count, setCount] = useState(0);
  let timer = useRef(null);

  useEffect(() => {
    console.log('setCount changed');
  }, [setCount]);

  useEffect(() => {
    console.log(count);
    timer.current = setInterval(() => {
      setCount((prev) => prev + 1);
    }, 1000);
    return () => {
      clearInterval(timer.current);
    };
  }, [setCount]);

  return (
    <div>
      <h1>{Math.floor(count / 60) + ':' + (count % 60)}</h1>
    </div>
  );
}
