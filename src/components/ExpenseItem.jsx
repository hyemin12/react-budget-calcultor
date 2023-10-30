import { MdDelete, MdEdit } from "react-icons/md";
import "../assets/css/ExpenseItem.css";

const ExpenseItem = (props) => {
  const { id, charge, amount } = props;

  return (
    <li className="item">
      <div className="info">
        <span className="expense">{charge}</span>
        <span className="amount">{amount}원</span>
      </div>
      <div>
        <button className="edit-btn" o>
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
