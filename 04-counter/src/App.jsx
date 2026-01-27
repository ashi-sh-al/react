import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  function countIncreaseBy1() {
    setCount(count + 1);
  }
  function countDecreaseBy1() {
    setCount(count - 1);
  }
  function countIncreaseBy5() {
    setCount(count + 5);
  }

  return (
    <div className="flex flex-col justify-center items-center h-[100vh] gap-12 bg-[#666]">
      <h1 className="h-[30vh] bg-[#999] w-[80vw] flex items-center justify-center text-9xl font-bold font-mono shadow-2xl">
        Total Count : {count}
      </h1>
      <div className="w-80vw flex justify-center gap-5 font-mono ">
        <button
          onClick={countIncreaseBy1}
          className="w-[25vw] px-5 py-2 text-2xl bg-green-800 rounded-full shadow-2xl"
        >
          Increase Count by 1
        </button>
        <button
          onClick={countDecreaseBy1}
          className="w-[25vw] px-5 py-2 text-2xl bg-red-800 rounded-full shadow-2xl"
        >
          Decrease Count by 1
        </button>
        <button
          onClick={countIncreaseBy5}
          className="w-[25vw] px-5 py-2 text-2xl bg-blue-800 rounded-full shadow-2xl"
        >
          Increase Count by 5
        </button>
      </div>
    </div>
  );
}

export default App;
