import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";
import "./assets/css/App.css";
import { useState } from "react";
import Alert from "../README/Alert";

function App() {
  const [expenses, setExpenses] = useState([
    { id: 1, charge: "렌트비", amount: 1600 },
    { id: 2, charge: "교통비", amount: 400 },
    { id: 3, charge: "식비", amount: 1200 },
  ]);
  const [charge, setCharge] = useState("");
  const [amount, setAmount] = useState(0);

  const chargeOnChangeHandler = (e) => {
    const { value } = e.target;
    setCharge(value);
  };

  const amountOnChangeHanlder = (e) => {
    const { valueAsNumber } = e.target;
    setAmount(valueAsNumber);
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();

    if (charge === "" || amount <= 0) {
    } else {
      // expense 생성
      const newExpense = { id: crypto.randomUUID(), charge, amount };
      const newExpenses = [...expenses, newExpense];
      setExpenses(newExpenses);

      setCharge("");
      setAmount(0);
    }
  };

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
          <ExpenseList expenses={expenses} />
        </section>

        <div className="total-price-container">
          <p className="total-price">
            총지출: <span>원</span>
          </p>
        </div>
      </main>
    </div>
  );
}

export default App;
