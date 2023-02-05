import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { logInWithEmailAndPassword } from '../../firebase/firebaseConfig'
import { AppDispatch, RootState } from '../../redux/store'
import { setPasswordValue } from '../../redux/workersSlice'
import Button from '../Button/Button'
import Field from '../Field/Field'

import styles from './SignInForm.module.scss'

const SignInForm = () => {

  const passwordValue = useSelector((state:RootState) => state.workersReducer.passwordValue)
  const [emailValue, setEmailValue] = useState('')

  const [errorEmail, setErrorEmail] = useState(false)
  const [errorPassword, setErrorPassword] = useState(false)
  const [errors, setErrors] = useState(false)

  const dispatch:AppDispatch = useDispatch()

  const setValue = (e:React.ChangeEvent<HTMLInputElement>, name: string) => {
    e.preventDefault()
    if(name === 'email') {
      setEmailValue(e.currentTarget.value)
    } else if(name === 'password') {
      dispatch(setPasswordValue(e.currentTarget.value))
    }    
  }
  useEffect(() => {
    if(errorEmail || errorPassword) {
      setErrors(true)
    } else {
      setErrors(false)
    }
  }, [errorEmail, errorPassword])

  return (
    <form className={styles.form}>
      <h2 className={styles.title}>Авторизация</h2>

        <Field 
          type='email' 
          label='Электронная почта' 
          name='email' 
          value={emailValue}
          onChangeHandler={setValue} 
          error={errorEmail} 
          setError={setErrorEmail} />
        <Field 
          type='password' 
          label='Пароль' 
          name='password' 
          value={passwordValue}
          onChangeHandler={setValue} 
          error={errorPassword} 
          setError={setErrorPassword} />

        <Button 
          text='Войти' 
          email={emailValue}
          password={passwordValue}
          onClickHandler={logInWithEmailAndPassword}
          disabled={errors}
          /> 
        <NavLink to='/login'>Не имеете аккаунта? Зарегистрируйтесь!</NavLink>
    </form>
  )
}

export default SignInForm