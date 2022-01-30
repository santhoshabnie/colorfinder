const Card = ({ color }) => {
  return (
    <div
      className="card"
      style={{
        backgroundColor: color.hex,
        margin: "5px",
        textAlign: "center",
      }}
    >
      <div className="card-body">
        <h5 className="card-title">{color.hex}</h5>
        <h6 className="card-subtitle mb-2 text-muted">{color.name}</h6>
      </div>
    </div>
  );
};

export default Card;
