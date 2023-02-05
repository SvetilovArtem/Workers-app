import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { Worker } from '../types/Worker'

export interface CounterState {
  workers: Worker[],
  status: string,
  perPage: number,
  selectedWorker: Worker,
  passwordValue: string,
  passwordRepeatValue: string,
  isAuth: boolean
}

export const fetchWorkers = createAsyncThunk(
    'workers/getWorkers',
    
    async function(per_page:number) {
        const resp = await fetch(`https://reqres.in/api/users?per_page=${per_page}`, {
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
  perPage: 8,
  selectedWorker: {
    id: 0,
    email: '',
    first_name: '',
    last_name: '',
    avatar: '',
  },
  passwordValue: '',
  passwordRepeatValue: '',
  isAuth: false
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: { 
    setPerPage: (state, action) => {
      state.perPage = action.payload
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
    }
   },
  extraReducers:  (builder) => {
    builder.addCase(fetchWorkers.fulfilled, (state, action) => {
      state.workers = action.payload.data
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
export const { setPerPage, setSelectedWorker, setPasswordRepeatValue, setPasswordValue, setIsAuth } = counterSlice.actions

export default counterSlice.reducer