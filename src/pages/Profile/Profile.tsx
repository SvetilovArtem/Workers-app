import React from 'react'
import { useSelector } from 'react-redux'
import ContentProfile from '../../components/ContentProfile/ContentProfile'
import HeaderProfile from '../../components/HeaderProfile/HeaderProfile'
import { RootState } from '../../redux/store'
import styles from './Profile.module.scss'

const Profile = () => {
    const selectedWorker = useSelector((state: RootState) => state.workersReducer.selectedWorker)
  return (
    <div className={styles.profile}>
        <HeaderProfile name={selectedWorker.first_name + ' ' + selectedWorker.last_name} img={selectedWorker.avatar} />
        <ContentProfile email={selectedWorker.email} />
    </div>
  )
}

export default Profile