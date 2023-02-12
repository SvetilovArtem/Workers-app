import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../../firebase/firebaseConfig";
import IconCreator from "../../icons/IconCreator";
import { AppDispatch } from "../../redux/store";

import styles from "./Header.module.scss";

const Header = () => {
  const dispatch: AppDispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <header className={styles.header}>
      <h1 className={styles.title}>Наша команда</h1>
      <p className={styles.text}>
        Это опытные специалисты, хорошо разбирающиеся во всех задачах, которые
        ложатся на их плечи, и умеющие находить выход из любых, даже самых
        сложных ситуаций.
      </p>
      <div className={styles.exit} onClick={(e) => logout(dispatch, navigate)}>
        Выход
      </div>
      <div
        className={styles.exitIconBtn}
        onClick={(e) => logout(dispatch, navigate)}
      >
        <IconCreator type="exit" />
      </div>
    </header>
  );
};

export default Header;
