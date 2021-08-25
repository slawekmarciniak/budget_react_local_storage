import React, { useState } from "react";
import { useForm } from "react-hook-form";
import "./style.css";

const style = {
  border: "2px solid #fa983a",
};

const Form = ({ addNewBudgetElement }) => {
  const [isFormSend, setIsFormSend] = useState(false);

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const getBackToForm = () => {
    setIsFormSend((prev) => !prev);
  };

  const onSubmit = (data) => {
    reset();
    addNewBudgetElement(data);
    setIsFormSend((prev) => !prev);
  };

  return (
    <div className="formContainer">
      {/* TYPE */}

      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <div className="form-check">
          <input
            className="form-check-input"
            {...register("expense", { required: "field is required" })}
            type="radio"
            value="expense"
            id="expense"
          />
          <label className="form-check-label" htmlFor="expense">
            expense
          </label>
        </div>

        <div className="form-check">
          <input
            className="form-check-input"
            {...register("expense", { required: "field is required" })}
            type="radio"
            value="income"
            id="income"
          />
          <label className="form-check-label" htmlFor="income">
            income
          </label>
        </div>

        {errors.expense && <p className="error">{errors.expense.message}</p>}

        {/* Description */}

        <label className="form-check-label description" htmlFor="description">
          description
        </label>
        <input
          className="form-control"
          {...register("description", {
            required: "description is required",
            minLength: { value: 2, message: "description is to short" },
          })}
          id="name"
          type="text"
          style={errors.description ? style : null}
        />
        {errors.description && (
          <p className="error">{errors.description.message}</p>
        )}

        {/* AMOUNT */}

        <label htmlFor="amount">enter amount</label>
        <input
          className="form-control"
          {...register("amount", {
            required: "field is required",
            pattern: {
              value: /^[0-9]+$/,
              message: "only numbers are valid",
            },
          })}
          id="amount"
          type="number"
          style={errors.amount ? style : null}
        />
        {errors.amount && <p className="error">{errors.amount.message}</p>}

        {/* TYPE */}

        <label htmlFor="amount">choose type</label>
        <select
          className="form-select"
          aria-label=".form-select-lg example"
          {...register("category", { required: "field is required" })}
        >
          <option defaultValue></option>
          <option value="home">home</option>
          <option value="car">car</option>
          <option value="hobby">hobby</option>
          <option value="shopping">books</option>
          <option value="salary">salary</option>
          <option value="other">other</option>
        </select>
        {errors.category && <p className="error">{errors.category.message}</p>}

        <button className="btn btn-outline-light" type="submit">
          ADD
        </button>
      </form>

      {isFormSend && (
        <div className="send">
          <span>your list is upgraded</span>
          <button className="btn btn-outline-light" onClick={getBackToForm}>
            back
          </button>
        </div>
      )}
    </div>
  );
};

export default Form;
