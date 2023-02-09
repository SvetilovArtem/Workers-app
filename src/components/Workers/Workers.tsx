import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import IconCreator from '../../icons/IconCreator'
import { AppDispatch, RootState } from '../../redux/store'
import { setPerPage } from '../../redux/workersSlice'
import { Worker } from '../../types/Worker'
import Pagination from '../Pagination/Pagination'
import WorkerCard from './WorkerCard'
import styles from './Workers.module.scss'

interface WorkersProps {
    workers: Worker[]
}
const Workers = ({ workers }:WorkersProps) => {
    const dispatch:AppDispatch = useDispatch()
    const perPage = useSelector((state:RootState) => state.workersReducer.perPage)
    const currentPage = useSelector((state:RootState) => state.workersReducer.currentPage)
    const totalPages = useSelector((state:RootState) => state.workersReducer.totalPages)
    const status = useSelector((state:RootState) => state.workersReducer.status)
    return (
        <>
        <div className={styles.workers}>
          {
            status ? status : workers.map((worker: Worker) => <WorkerCard dispatch={dispatch} worker={worker} key={worker.id} />)
          }
          
        </div>
        <button 
          className={styles.showBtn} 
          disabled={perPage + 2 > 8} 
          onClick={() => dispatch(setPerPage(perPage + 2))}
        >Показать еще <IconCreator type='arrow' /></button>
        <Pagination currentPage={currentPage} totalPages={totalPages} />
        </>
      )
}

export default Workers