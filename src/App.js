import "./App.css";
import { useEffect, useState } from "react";
import { Form, Budget, Income, Expense } from "./components/";
import { v4 as uuidv4 } from "uuid";

const myBudget = 100;

const incomesData = [
  { id: 1, description: "salary", amount: "2000", category: "salary" },
  { id: 2, description: "sold car", amount: "5000", category: "other" },
  {
    id: 3,
    description: "bonus for work in extra hours",
    amount: "1000",
    category: "salary",
  },
];

const expensesData = [
  {
    id: 1,
    description: "buy new computer",
    amount: "3000",
    category: "shopping",
  },
  { id: 2, description: "buy new bike", amount: "4000", category: "hobby" },
  {
    id: 3,
    description: "go to cinema and restaurant",
    amount: "300",
    category: "hobby",
  },
];

function App() {
  const incomesLocalStorage = JSON.parse(localStorage.getItem("incomes"));
  const expensesLocalStorage = JSON.parse(localStorage.getItem("expenses"));

  const [budget, setBudget] = useState(myBudget);
  const [incomes, setIncomes] = useState(
    incomesLocalStorage ? incomesLocalStorage : incomesData
  );
  const [expenses, setExpenses] = useState(
    expensesLocalStorage ? expensesLocalStorage : expensesData
  );

  useEffect(
    () => localStorage.setItem("incomes", JSON.stringify(incomes)),
    [incomes]
  );
  useEffect(
    () => localStorage.setItem("expenses", JSON.stringify(expenses)),
    [expenses]
  );

  const handleExpenseDelete = (id) =>
    setExpenses(expenses.filter((e) => e.id !== id));

  const handleIncomeDelete = (id) =>
    setIncomes(incomes.filter((e) => e.id !== id));

  const addNewBudgetElement = (data) => {
    const newBudgeEl = {
      id: uuidv4(),
      description: data.description,
      amount: data.amount,
      category: data.category,
    };

    if (data.expense === "expense") {
      setExpenses((prev) => [...prev, newBudgeEl]);
    } else if (data.expense === "income") {
      setIncomes((prev) => [...prev, newBudgeEl]);
    } else console.log("wrong type of budget element");

    countBudget();
  };

  const countBudget = () => {
    let score = myBudget;
    incomes.map((e) => (score = score + parseInt(e.amount)));
    expenses.map((e) => (score = score - parseInt(e.amount)));
    setBudget(score);
    return score;
  };

  return (
    <div className="App">
      <Budget budget={budget} countBudget={countBudget} />
      <div className="container">
        <Income incomes={incomes} deleteIncome={handleIncomeDelete} />
        <Form addNewBudgetElement={addNewBudgetElement} />
        <Expense expenses={expenses} deleteExpense={handleExpenseDelete} />
      </div>
    </div>
  );
}

export default App;
