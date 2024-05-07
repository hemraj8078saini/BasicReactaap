import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import UseEffect from "./UseEffect";

function App() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("virat");
  function updatavalue() {
    setCount(count + 10);
  }

  return (
    <>
  <UseEffect/>
    </>
  );
}

export default App;
