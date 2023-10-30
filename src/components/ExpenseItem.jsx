import { MdDelete, MdEdit } from "react-icons/md";
import "../assets/css/ExpenseItem.css";

const ExpenseItem = () => {
  return (
    <li className="item">
      <div className="info">
        <span className="expense"></span>
        <span className="amount">원</span>
      </div>
      <div>
        <button className="edit-btn">
          <MdEdit />
        </button>
        <button className="clear-btn">
          <MdDelete />
        </button>
      </div>
    </li>
  );
};
export default ExpenseItem;
