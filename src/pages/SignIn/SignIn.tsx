import React from "react";
import { useSelector } from "react-redux";
import Greeting from "../../components/Greeting/Greeting";
import SignInForm from "../../components/SignInForm/SignInForm";
import { RootState } from "../../redux/store";

import styles from "./SignIn.module.scss";

const SignIn = () => {
  const isAuth = useSelector((state: RootState) => state.workersReducer.isAuth);
  const greeting = useSelector(
    (state: RootState) => state.workersReducer.greeting
  );
  return (
    <div className={styles.signIn}>
      <SignInForm />
      <Greeting isAuth={isAuth} greeting={greeting} />
    </div>
  );
};

export default SignIn;
