import ExpenseItem from "./ExpenseItem";
import { MdDelete } from "react-icons/md";
import "../assets/css/ExpenseList.css";

const ExpenseList = ({ expenses }) => {
  return (
    <>
      <ul className="list">
        {!expenses.length ? (
          <p>항목이 비어있습니다.</p>
        ) : (
          expenses.map((item) => <ExpenseItem {...item} key={item.id} />)
        )}
      </ul>
      <button className="btn">
        목록 지우기 <MdDelete className="btn-icon" />
      </button>
    </>
  );
};
export default ExpenseList;
