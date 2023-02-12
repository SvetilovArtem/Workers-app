import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ContentProfile from '../../components/ContentProfile/ContentProfile'
import HeaderProfile from '../../components/HeaderProfile/HeaderProfile'
import { AppDispatch, RootState } from '../../redux/store'
import { fetchWorker } from '../../redux/workersSlice'
import styles from './Profile.module.scss'

const Profile = () => {
    const selectedWorker = useSelector((state: RootState) => state.workersReducer.selectedWorker)
    const dispatch:AppDispatch = useDispatch()

    const partOfUrl = '/profile/'
    const id = Number(window.location.pathname.replace(partOfUrl, ''))

    useEffect(() => {
      dispatch(fetchWorker(id))
    }, [])
  return (
    <div className={styles.profile}>
        <HeaderProfile name={selectedWorker.first_name + ' ' + selectedWorker.last_name} img={selectedWorker.avatar} />
        <ContentProfile email={selectedWorker.email} />
    </div>
  )
}

export default Profile