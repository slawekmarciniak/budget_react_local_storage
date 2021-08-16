const style = {
  marginLeft: 30,
  flexGrow: 1,
};

const Expense = ({ expenses, deleteExpense }) => {
  const list = expenses.map((e) => (
    <li key={e.id} className="list-group-item">
      {e.description} ({e.category}): {e.amount}
      <button
        onClick={() => deleteExpense(e.id)}
        type="button"
        className="btn btn-danger"
      >
        X
      </button>
    </li>
  ));
  return (
    <div style={style}>
      <h3>Expenses</h3>
      <ul className="list-group">{list}</ul>
    </div>
  );
};

export default Expense;
