import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { AppDispatch } from "../../redux/store";
import styles from "./Button.module.scss";

interface ButtonProps {
  text: string;
  email: string;
  password: string;
  onClickHandler: any;
  disabled: boolean;
}

const Button = ({
  text,
  email,
  password,
  onClickHandler,
  disabled,
}: ButtonProps) => {
  const navigate = useNavigate();
  const dispatch: AppDispatch = useDispatch();

  return (
    <button
      className={disabled ? styles.disabled : styles.signUp}
      onClick={(e) => {
        e.preventDefault();
        onClickHandler(email, password, dispatch, navigate);
      }}
      disabled={disabled}
    >
      {text}
    </button>
  );
};

export default Button;
