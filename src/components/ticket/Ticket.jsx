import TicketNumber from "./TicketNumber";

export default function Ticket({ ticket }) {
  return (
    <>
      <div>
        {ticket.map((num, index) => (
          <TicketNumber key={index} num={num} />
        ))}
      </div>
    </>
  );
}
