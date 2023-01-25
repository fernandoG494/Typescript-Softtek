import { useEffect, useState } from "react";
import { gsap } from "gsap";

interface Props {
  initialValue?: number;
}

const MAXIMUM_VALUE = 10;

const CounterEffect = ({ initialValue = 5 }: Props) => {
  const [counter, setCounter] = useState(initialValue);

  const handleClick = () => {
    setCounter((prev) => Math.min(prev + 1, MAXIMUM_VALUE));
  };

  useEffect(() => {
    if (counter < 10) return;
    gsap.to("h2", { y: -10, duration: 0.2, ease: "ease.out" }).then(() => {
      gsap.to("h2", { y: 0, duration: 1, ease: "bounce.out" });
    });
  }, [counter]);

  return (
    <>
      <h1>Counter Effect:</h1>
      <h2>{counter}</h2>
      <button onClick={handleClick}>+1</button>
    </>
  );
};

export default CounterEffect;
