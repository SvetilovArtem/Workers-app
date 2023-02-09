import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux/es/exports'
import Header from '../../components/Header/Header'
import Workers from '../../components/Workers/Workers'
import { AppDispatch, RootState } from '../../redux/store'
import { fetchWorkers } from '../../redux/workersSlice'
import styles from './Main.module.scss'

const Main = () => {
  const dispatch:AppDispatch = useDispatch()
  const workers = useSelector((state:RootState) => state.workersReducer.workers)
  const perPage = useSelector((state:RootState) => state.workersReducer.perPage)
  const currentPage = useSelector((state:RootState) => state.workersReducer.currentPage)

  useEffect(() => {
    dispatch(fetchWorkers({perPage, currentPage}))
  }, [dispatch, perPage, currentPage])

  return (
    <div className={styles.main}>
      <Header />
      <Workers workers={workers} />
    </div>
  )
}

export default Main