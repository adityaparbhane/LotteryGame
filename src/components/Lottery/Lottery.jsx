import React from "react";
import { useState } from "react";
import "./Lottery.css";
import { genTicket } from "../Helper/helper";
import { sum } from "../Helper/helper";
import Ticket from "../ticket/Ticket";

function Lottery({ n, winCondition }) {
  let [ticket, setTicket] = useState(genTicket(n));
  let buyTicket = () => {
    setTicket(genTicket(n));
  };
  let isWining = winCondition(ticket);
  return (
    <div>
      <h1>Lotery Game</h1>
      <Ticket ticket={[ticket]} />
      <br />
      <button onClick={buyTicket}>Buy Ticket</button>
      <h3>{isWining && "congratulations you won ! "}</h3>
    </div>
  );
}

export default Lottery;
