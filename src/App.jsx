import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Lottery from "./components/Lottery/Lottery";
import Ticket from "./components/ticket/Ticket";
import { sum } from "./components/Helper/helper";
function App() {
  const [count, setCount] = useState(0);

  let winCondition = (ticket) => {
    return sum(ticket) === 15;
  };

  return (
    <>
      <Lottery n={3} winCondition={winCondition} />
      {/* <Ticket ticket={[0, 1, 3]} /> */}
    </>
  );
}

export default App;
