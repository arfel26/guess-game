import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import HangmanGame from "./HangmanGame";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="bg-gray-900">
      <HangmanGame />
    </div>
  );
}

export default App;
