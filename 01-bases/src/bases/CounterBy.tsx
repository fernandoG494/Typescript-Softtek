import { useState } from "react";

interface Props {
  initialValue?: number;
}

interface CounterState {
  counter: number;
  clicks: number;
}

const CounterBy = ({ initialValue = 0 }: Props) => {
  const [counterState, setCounterState] = useState({
    counter: initialValue,
    clicks: 0,
  });

  const handleClick = (value: number) => {
    setCounterState((prev) => ({
      counter: prev.counter + value,
      clicks: prev.clicks + 1,
    }));
  };

  return (
    <>
      <h1>Counter by: {counterState.counter}</h1>
      <h1>Clicks: {counterState.clicks}</h1>

      <button onClick={() => handleClick(1)}>+1</button>
      <button onClick={() => handleClick(5)}>+1</button>
    </>
  );
};

export default CounterBy;
