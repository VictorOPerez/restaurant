import "./reservar.css";

const Reservar = () => {
  return (
    <div className="ContainResev">
      <div className="constaiReserText">
        <p className="reserv">Reservation</p>
        <h3 className="Book">Book Your Table</h3>
        <button>Reser Now</button>
      </div>
      <img src="./mesa.jpg" alt="" />
    </div>
  );
};

export default Reservar;
