const style = {
  marginLeft: 20,
  flexGrow: 1,
};

const Income = ({ incomes, deleteIncome }) => {
  const list = incomes.map((e) => (
    <li key={e.id} className="list-group-item">
      {e.description} ({e.category}): {e.amount}
      <button
        onClick={() => deleteIncome(e.id)}
        type="button"
        className="btn btn-danger"
      >
        X
      </button>
    </li>
  ));

  return (
    <div style={style}>
      <h3>Incomes</h3>
      <ul className="list-group">{list}</ul>
    </div>
  );
};

export default Income;
