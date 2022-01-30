const Form = ({ getColors }) => {
  return (
    <form className="row g-3" onSubmit={(e) => {}}>
      <div className="col-md-12">
        <input
          type="text"
          className="form-control"
          placeholder="Enter color name"
          autoFocus
          onChange={(e) => getColors(e.target.value)}
        />
      </div>
    </form>
  );
};

export default Form;
