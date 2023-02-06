import { AppDispatch } from './../redux/store';
import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from 'firebase/auth'
import { setGreeting, setIsAuth } from '../redux/workersSlice';
import { NavigateFunction } from 'react-router-dom';

const firebaseConfig = {
  apiKey: "AIzaSyD0XmDa09gXCppzEe4wPmBZkAiB-NcHZyw",
  authDomain: "workers-app-5bc98.firebaseapp.com",
  projectId: "workers-app-5bc98",
  storageBucket: "workers-app-5bc98.appspot.com",
  messagingSenderId: "253934405988",
  appId: "1:253934405988:web:0470b4a947446eb1cb1271"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// SIGN UP AND CREATE NEW USER
const signUpWithEmailAndPassword = async (email:string, password:string, dispatch:AppDispatch, navigate:NavigateFunction) => {
  try {
    await createUserWithEmailAndPassword(auth, email, password).then(user => {
      dispatch(setIsAuth(true))
      navigate('/main')
      console.log('Добро пожаловать')
    })
  } catch (error) {
    console.log(error)
  }
    
}

// LOGIN WITH EMAIL AND PASSWORD

const logInWithEmailAndPassword = async (email:string, password:string, dispatch:AppDispatch, navigate:NavigateFunction) => {
  try {
    await signInWithEmailAndPassword(auth, email, password).then(resp => {
      if(resp.user) {
        dispatch(setIsAuth(true))
        dispatch(setGreeting('Добро пожаловать!'))
        setTimeout(() => navigate('/main'), 2000)
        console.log(resp.user)
      } else {
        dispatch(setIsAuth(false))

      }
      
    })
  } catch (error) {
    console.log(error)
    dispatch(setGreeting('Проверьте введенные данные!'))
  }
}
const logout = async (dispatch:AppDispatch, navigate:NavigateFunction) => {
  await signOut(auth).then(resp => {
    dispatch(setIsAuth(false))
    dispatch(setGreeting(''))
    navigate('/')
  })
}

export { app, signUpWithEmailAndPassword, logInWithEmailAndPassword, logout }

