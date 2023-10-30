import React from "react";

import FormGroup from "./FormGroup";
import { MdSend } from "react-icons/md";
import "../assets/css/ExpenseForm.css";

const ExpenseForm = React.memo(
  ({
    edit,
    amount,
    charge,
    chargeOnChangeHandler,
    amountOnChangeHanlder,
    formSubmitHandler,
  }) => {
    return (
      <form onSubmit={formSubmitHandler}>
        <div className="form-center">
          <FormGroup
            id={"charge"}
            value={charge}
            onChange={chargeOnChangeHandler}
            inputType={"text"}
            labelText={"지출 항목"}
            placeholder={"예) 렌트비"}
          />
          <FormGroup
            id={"amount"}
            value={amount}
            onChange={amountOnChangeHanlder}
            inputType={"number"}
            labelText={"비용"}
            placeholder={"예) 1000"}
          />
        </div>

        <button type="submit" className="btn">
          {edit ? "수정" : "제출"} <MdSend className="btn-icon" />
        </button>
      </form>
    );
  }
);
export default ExpenseForm;
