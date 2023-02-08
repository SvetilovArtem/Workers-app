import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import IconCreator from '../../icons/IconCreator'
import { AppDispatch } from '../../redux/store'
import { setSelectedWorker } from '../../redux/workersSlice'
import { Worker } from '../../types/Worker'

import styles from './Worker.module.scss'

interface WorkerProps {
    worker: Worker,
    dispatch: AppDispatch
}
const WorkerCard = ({worker, dispatch}:WorkerProps) => {
  const [isActive, setIsActive] = useState(false)
  return (
    <div className={styles.worker}>
        <NavLink to='/profile' className={styles.user} onClick={() => dispatch(setSelectedWorker(worker))}>
            <img src={worker.avatar} alt={worker.first_name} />
            <div className={styles.name}>{worker.first_name}</div>
        </NavLink>
        <div className={styles.icon} onClick={() => setIsActive(!isActive)}>
          <IconCreator type='heart' active={isActive} />
        </div>
    </div>
  )
}

export default WorkerCard