import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { Worker } from '../types/Worker'

export interface CounterState {
  workers: Worker[],
  status: string,
  perPage: number,
  selectedWorker: Worker,
  passwordValue: string,
  passwordRepeatValue: string,
  isAuth: boolean,
  greeting: string,
  favorites: Worker[],
  currentPage: number,
  totalPages: number
}

interface fetchWorkersProps {
  perPage: number,
  currentPage: number
}
export const fetchWorkers = createAsyncThunk(
    'workers/getWorkers',
    
    async function({perPage, currentPage}:fetchWorkersProps) {
        const resp = await fetch(`https://reqres.in/api/users?per_page=${perPage}&page=${currentPage}`, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
    }})
        const data = resp.json()
        return data
    },
)

const initialState: CounterState = {
  workers: [],
  status: '',
  perPage: 4,
  selectedWorker: {
    id: 0,
    email: '',
    first_name: '',
    last_name: '',
    avatar: '',
  },
  passwordValue: '',
  passwordRepeatValue: '',
  isAuth: false,
  greeting: '',
  favorites: [],
  currentPage: 1,
  totalPages: 1
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: { 
    setPerPage: (state, action) => {
      state.perPage = action.payload
    },
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload
    },
    setSelectedWorker: (state, action) => {
      state.selectedWorker = action.payload
    },
    setPasswordValue: (state, action) => {
      state.passwordValue = action.payload
    },
    setPasswordRepeatValue: (state, action) => {
      state.passwordRepeatValue = action.payload
    },
    setIsAuth: (state, action) => {
      state.isAuth = action.payload
    },
    setGreeting: (state, action) => {
      state.greeting = action.payload
    },
    addToFavorites: (state, action) => {
      const findItem = state.favorites.find(f => f.id === action.payload.id)
      if(!findItem) {
        state.favorites.push({ ...action.payload})
      }
    },
    removeFromFavorites: (state, action) => {
      state.favorites = state.favorites.filter(f => f.id !== action.payload.id)
    }
   },
  extraReducers:  (builder) => {
    builder.addCase(fetchWorkers.fulfilled, (state, action) => {
      state.workers = action.payload.data
      state.totalPages = action.payload.total_pages
      state.status = ''
    })
    builder.addCase(fetchWorkers.pending, (state, action) => {
        state.status = 'Loading ...'
    })
    builder.addCase(fetchWorkers.rejected, (state, action) => {
      state.status = 'Error! 404'
  })
  },

})

// Action creators are generated for each case reducer function
export const { 
  setPerPage, 
  setSelectedWorker, 
  setPasswordRepeatValue, 
  setPasswordValue, 
  setIsAuth, 
  setGreeting,
  addToFavorites,
  removeFromFavorites,
  setCurrentPage } = counterSlice.actions

export default counterSlice.reducer