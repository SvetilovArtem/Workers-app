import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import IconCreator from '../../icons/IconCreator'
import { AppDispatch, RootState } from '../../redux/store'
import { setPerPage } from '../../redux/workersSlice'
import { Worker } from '../../types/Worker'
import WorkerCard from './WorkerCard'
import styles from './Workers.module.scss'

interface WorkersProps {
    workers: Worker[]
}
const Workers = ({ workers }:WorkersProps) => {
    const dispatch:AppDispatch = useDispatch()
    const perPage = useSelector((state:RootState) => state.workersReducer.perPage)
    return (
        <>
        <div className={styles.workers}>
          {
            workers.map((worker: Worker) => <WorkerCard dispatch={dispatch} worker={worker} key={worker.id} />)
          }
          
        </div>
        <div className={styles.showBtn} onClick={() => dispatch(setPerPage(perPage + 2))}
        >Показать еще <IconCreator type='arrow' /></div>
        </>
      )
}

export default Workers