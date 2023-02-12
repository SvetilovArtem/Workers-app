import React from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import IconCreator from '../../icons/IconCreator'
import { AppDispatch, RootState } from '../../redux/store'
import { addToFavorites, removeFromFavorites, setSelectedWorker } from '../../redux/workersSlice'
import { Worker } from '../../types/Worker'

import styles from './Worker.module.scss'

interface WorkerProps {
    worker: Worker,
    dispatch: AppDispatch
}
const WorkerCard = ({worker, dispatch}:WorkerProps) => {
  let favorites = useSelector((state:RootState) => state.workersReducer.favorites)

  function setFavorites() {

      if(favorites.find(f => f.id === worker.id)) {
        dispatch(removeFromFavorites(worker))
        localStorage.setItem('favorites', JSON.stringify(favorites))

      } else {
        dispatch(addToFavorites(worker))
        localStorage.setItem('favorites', JSON.stringify(favorites))

      }
  }

  return (
    <div className={styles.worker}>
        <NavLink to={ `/profile/${worker.id}` } className={styles.user} onClick={() => dispatch(setSelectedWorker(worker))}>
            <img src={worker.avatar} alt={worker.first_name} />
            <div className={styles.name}>{worker.first_name}</div>
        </NavLink>
        <div className={styles.icon} onClick={() => setFavorites()}>
          <IconCreator type='heart' active={favorites.find(f => f.id === worker.id)} />
        </div>
    </div>
  )
}

export default WorkerCard