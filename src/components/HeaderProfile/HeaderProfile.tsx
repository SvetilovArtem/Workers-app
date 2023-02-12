import React from "react";
import { useDispatch } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { logout } from "../../firebase/firebaseConfig";
import IconCreator from "../../icons/IconCreator";
import { AppDispatch } from "../../redux/store";
import styles from "./HeaderProfile.module.scss";

interface HeaderProfileProps {
  name: string;
  img: string;
}

const HeaderProfile = ({ name, img }: HeaderProfileProps) => {
  const dispatch: AppDispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <header className={styles.header}>
      <NavLink to="/main" className={styles.back}>
        Назад
      </NavLink>
      <NavLink to="/main" className={styles.backIconBtn}>
        <IconCreator type="back" />
      </NavLink>
      <div className={styles.profileDate}>
        <img src={img} alt="" />
        <div className={styles.info}>
          <div className={styles.name}>{name}</div>
          <div className={styles.role}>Партнер</div>
        </div>
      </div>
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

export default HeaderProfile;
