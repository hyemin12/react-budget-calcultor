import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";
import "./assets/css/App.css";
import { useState } from "react";
import Alert from "./components/Alert";

function App() {
  const [expenses, setExpenses] = useState([
    { id: 1, charge: "렌트비", amount: 1600 },
    { id: 2, charge: "교통비", amount: 400 },
    { id: 3, charge: "식비", amount: 1200 },
  ]);
  const [charge, setCharge] = useState("");
  const [amount, setAmount] = useState(0);
  const [alert, setAlert] = useState({ show: false });
  const [edit, setEdit] = useState(false);
  const [id, setId] = useState();

  const alertHandler = ({ type, text }) => {
    setAlert({ show: true, type, text });
    setTimeout(() => setAlert({ show: false }), 7000);
  };

  const chargeOnChangeHandler = (e) => {
    const { value } = e.target;
    setCharge(value);
  };

  const amountOnChangeHanlder = (e) => {
    const { valueAsNumber } = e.target;
    setAmount(valueAsNumber);
  };

  const expenseEditHandler = (id) => {
    const expense = expenses.find((item) => item.id === id);
    const { charge, amount } = expense;
    setId(id);
    setCharge(charge);
    setAmount(amount);
    setEdit(true);
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();

    if (charge === "" || amount <= 0) {
      alertHandler({
        type: "danger",
        text: "charge는 빈 값일 수 없으며 amount는 0보다 커야 합니다.",
      });
    } else {
      if (edit) {
        // expense 수정
        const newExpenses = expenses.map((expenses) =>
          expenses.id === id ? { ...expenses, charge, amount } : expenses
        );
        setExpenses(newExpenses);
        setEdit(false);
        alertHandler({ type: "success", text: "아이템이 수정되었습니다." });
      } else {
        // expense 생성
        const newExpense = { id: crypto.randomUUID(), charge, amount };
        const newExpenses = [...expenses, newExpense];
        setExpenses(newExpenses);

        alertHandler({ type: "success", text: "아이템이 생성되었습니다." });
      }
      setCharge("");
      setAmount(0);
    }
  };

  const expenseDeleteHandler = (id) => {
    const newExpenses = expenses.filter((expense) => expense.id !== id);
    setExpenses(newExpenses);
    alertHandler({
      type: "danger",
      text: "아이템이 삭제되었습니다.",
    });
  };

  const allExpenseDeleteHandler = () => {
    setExpenses([]);
    alertHandler({
      type: "danger",
      text: "아이템 전체가 삭제되었습니다.",
    });
  };

  const sumAmount = expenses.reduce((acc, cur) => {
    return (acc += cur.amount);
  }, 0);

  return (
    <div className="App">
      {alert.show ? <Alert type={alert.type} text={alert.text} /> : null}
      <main className="main-container " id="main">
        <h1>예산 계산기</h1>
        <section>
          <ExpenseForm
            charge={charge}
            amount={amount}
            chargeOnChangeHandler={chargeOnChangeHandler}
            amountOnChangeHanlder={amountOnChangeHanlder}
            formSubmitHandler={formSubmitHandler}
          />
        </section>

        <section>
          <ExpenseList
            expenses={expenses}
            expenseDeleteHandler={expenseDeleteHandler}
            expenseEditHandler={expenseEditHandler}
            allExpenseDeleteHandler={allExpenseDeleteHandler}
          />
        </section>

        <div className="total-price-container">
          <p className="total-price">
            총지출: <span>{sumAmount}원</span>
          </p>
        </div>
      </main>
    </div>
  );
}

export default App;
