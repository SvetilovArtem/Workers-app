import React, { useState } from 'react'
import IconCreator from '../../icons/IconCreator'
import styles from './Field.module.scss'

interface FieldProps {
    type: string,
    label: string,
    name: string,
    error: boolean,
    setError: (e: boolean) => void,
    value: string,
    onChangeHandler: (e:React.ChangeEvent<HTMLInputElement>, name:string) => void,
    passwordValue?: string,
    passwordRepeatValue?: string,
}

const Field = (
  { type, 
    label, 
    name, 
    onChangeHandler, 
    error, 
    setError, 
    value, 
    passwordValue, 
    passwordRepeatValue,
  }:FieldProps) => {

  const validateHandler = (e:React.ChangeEvent<HTMLInputElement>) => {

    const letters = RegExp(/[^A-zА-я]/)
    const emails = RegExp(/^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i)
    const passwords = RegExp(/(?=.*[0-9])(?=.*[a-z])[0-9a-zA-Z]{6,}/g)
    // (?=.*[0-9]) - строка содержит хотя бы одно число;
    // (?=.*[a-z]) - строка содержит хотя бы одну латинскую букву в нижнем регистре;
    // [0-9a-zA-Z!@#$%^&*]{6,} - строка состоит не менее, чем из 6 вышеупомянутых символов.

    if(e.currentTarget.name === 'name') {
      if(letters.test(e.currentTarget.value)  && e.currentTarget.value.length >= 1) {
        setError(false)
      } else {
        setError(true)
      }
    }

    if(e.currentTarget.name === 'email') {
      if(emails.test(e.currentTarget.value) && e.currentTarget.value.length >= 1) {
        setError(false)
      } else {
        setError(true)
      }
    }
    if(e.currentTarget.name === 'password') {
      if(passwords.test(e.currentTarget.value) && e.currentTarget.value.length >= 1) {
        setError(false)
      } else {
        setError(true)
      }
    }
    if(e.currentTarget.name === 'passwordRepeat') {
      if(passwordValue !== e.currentTarget.value) {
        setError(true)
      } else {
        setError(false)
      }
    }


  }
  const [isShowSymbols, setIsShowSymbols] = useState(false)

  const onShowHiddenSymbols = () => {
    if(name === 'password' || name === 'passwordRepeat') {
      setIsShowSymbols(!isShowSymbols)
    }
  }

  return (
    <div className={styles.fieldWrapper}>
        <label htmlFor={name} className={styles.label}>{label}</label>
        <input 
          type={isShowSymbols ? 'text' : type} 
          name={name} 
          value={value} 
          onChange={e => {
            onChangeHandler(e, name)
            validateHandler(e)
          }} 
          className={error ? styles.errorField : styles.field} 
        />
        {(name === 'password' || name === 'passwordRepeat') && 
          <div className={styles.hideIcon} onClick={onShowHiddenSymbols}>
            <IconCreator type='hide' />
          </div>}
        {error && <div className={styles.error}>Ошибка</div>}
    </div>
  )
}

export default Field