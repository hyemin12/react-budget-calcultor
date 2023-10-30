import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";
import "./assets/css/App.css";

function App() {
  return (
    <div className="App">
      <main className="main-container " id="main">
        <h1>예산 계산기</h1>
        <section>
          <ExpenseForm />
        </section>

        <section>
          <ExpenseList />
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
