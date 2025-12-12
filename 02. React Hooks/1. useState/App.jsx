import { useState } from "react";

const App = () => {
  // --------------------------------------------
  // const [initialValue, setInitialValue] = useState(0);
  // const [initialValue, setInitialValue] = useState("sagar");
  // const [initialValue, setInitialValue] = useState(["one", "two", "three"]);
  // const [initialValue, setInitialValue] = useState({
  //   one: "sachin",
  //   two: "mohan",
  //   three: "sagar",
  // });
  // --------------------------------------------

  const [counter, setCounter] = useState(0);

  const increment = () => setCounter(counter + 1);
  const decrement = () => setCounter(counter - 1);

  return (
    <section>
      <h1>{counter}</h1>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </section>
  );
};

export default App;
