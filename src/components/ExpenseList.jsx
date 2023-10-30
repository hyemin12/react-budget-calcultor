import ExpenseItem from "./ExpenseItem";
import "../assets/css/ExpenseList.css";
import { MdDelete } from "react-icons/md";

const ExpenseList = () => {
  return (
    <>
      <ul className="list">
        <ExpenseItem />
      </ul>
      <button className="btn">
        목록 지우기 <MdDelete className="btn-icon" />{" "}
      </button>
    </>
  );
};
export default ExpenseList;
