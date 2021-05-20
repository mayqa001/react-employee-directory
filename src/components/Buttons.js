const Buttons = ({ sortByName, sortByAge }) => {
  return (
    <div className="btn-group" role="group" aria-label="Basic example">
      <button
        type="button"
        className="btn btn-secondary"
        onClick={() => {
          sortByName();
        }}
      >
        sort by Name
      </button>
      <span> </span>
      <button
        type="button"
        className="btn btn-secondary"
        onClick={() => {
            sortByAge();
        }}
      >
        sort by age
      </button>
    </div>
  );
};

export default Buttons;
