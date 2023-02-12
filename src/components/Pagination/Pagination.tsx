import React from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../redux/store";
import { setCurrentPage } from "../../redux/workersSlice";

import styles from "./Pagination.module.scss";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
}

const Pagination = ({ currentPage, totalPages }: PaginationProps) => {
  const dispatch: AppDispatch = useDispatch();

  return (
    <div className={styles.pagination}>
      <button
        className={styles.prevBtn}
        disabled={currentPage === 1 ? true : false}
        onClick={() => dispatch(setCurrentPage(currentPage - 1))}
      >
        prev
      </button>
      <span>{currentPage}</span>
      <span>/</span>
      <span>{totalPages}</span>
      <button
        className={styles.nextBtn}
        disabled={currentPage >= totalPages ? true : false}
        onClick={() => dispatch(setCurrentPage(currentPage + 1))}
      >
        next
      </button>
    </div>
  );
};

export default Pagination;
