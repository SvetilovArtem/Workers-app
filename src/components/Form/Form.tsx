import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { signUpWithEmailAndPassword } from '../../firebase/firebaseConfig'
import { AppDispatch, RootState } from '../../redux/store'
import { setPasswordRepeatValue, setPasswordValue } from '../../redux/workersSlice'
import Button from '../Button/Button'
import Field from '../Field/Field'

import styles from './Form.module.scss'

const Form = () => {
  const [nameValue, setNameValue] = useState('')
  const [emailValue, setEmailValue] = useState('')

  const passwordValue = useSelector((state:RootState) => state.workersReducer.passwordValue)
  const passwordRepeatValue = useSelector((state:RootState) => state.workersReducer.passwordRepeatValue)

  const [nameError, setNameError] = useState(false)
  const [emailError, setEmailError] = useState(false)
  const [passwordError, setPasswordError] = useState(false)
  const [passwordRepeatError, setPasswordRepeatError] = useState(false)

  const [errors, setErrors] = useState(true)

  useEffect(() => {
    if(nameError || emailError || passwordError || passwordRepeatError) {
      setErrors(true)
    } else {
      setErrors(false)
    }
  }, [nameError, emailError, passwordError, passwordRepeatError])

  const dispatch:AppDispatch = useDispatch()

  const setValue = (e:React.ChangeEvent<HTMLInputElement>, name: string) => {
    e.preventDefault()
    if(name === 'name') {
      setNameValue(e.currentTarget.value)
    } else if(name === 'email') {
      setEmailValue(e.currentTarget.value)
    } else if(name === 'password') {
      dispatch(setPasswordValue(e.currentTarget.value))
    } else if(name === 'passwordRepeat') {
      dispatch(setPasswordRepeatValue(e.currentTarget.value))
    }    
  }


  return (
    <form className={styles.form}>
      <h2 className={styles.title}>Регистрация</h2>
        <Field 
          type='text' 
          label='Имя' 
          name='name' 
          value={nameValue}
          onChangeHandler={setValue} 
          error={nameError} 
          setError={setNameError} />
        <Field 
          type='email' 
          label='Электронная почта' 
          name='email' 
          value={emailValue}
          onChangeHandler={setValue} 
          error={emailError} 
          setError={setEmailError} />
        <Field 
          type='password' 
          label='Пароль' 
          name='password' 
          value={passwordValue}
          onChangeHandler={setValue} 
          error={passwordError} 
          setError={setPasswordError} />
        <Field 
          type='password' 
          label='Подтвердите пароль' 
          name='passwordRepeat'
          value={passwordRepeatValue} 
          onChangeHandler={setValue} 
          error={passwordRepeatError} 
          setError={setPasswordRepeatError}
          passwordValue={passwordValue} />
        <Button 
          text='Зарегистрироваться' 
          email={emailValue}
          password={passwordValue}
          onClickHandler={signUpWithEmailAndPassword}
          disabled={errors}
          />  
    </form>
  )
}

export default Form