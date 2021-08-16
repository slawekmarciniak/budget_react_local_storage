const style = {
  borderBottom: "2px solid gray",
  marginBottom: 20,
  padding: "20px 0px",
};

const Budget = ({ budget, countBudget }) => {
  return (
    <div style={style}>
      <h3>BUDGET: {countBudget()}</h3>
    </div>
  );
};

export default Budget;
