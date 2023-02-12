import React from "react";

import styles from "./Greeting.module.scss";

interface GreetingProps {
  isAuth: boolean;
  greeting: string;
}

const Greeting = ({ isAuth, greeting }: GreetingProps) => {
  return <div className={isAuth ? styles.ok : styles.wrong}>{greeting}</div>;
};

export default Greeting;
