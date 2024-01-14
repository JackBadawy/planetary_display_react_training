import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import CardDisplay from "./components/CardDisplay";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <CardDisplay />
    </>
  );
}

export default App;
