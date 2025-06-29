import { createSlice } from '@reduxjs/toolkit'
import type { RootState } from '../store'
import { quizData } from '@/home/quizData'

const initialState = {
    question: quizData,
}

export const quizSlice = createSlice({
  name: 'quiz',
  initialState,
  reducers: {
  }
})



export default quizSlice.reducer