import { createSlice } from '@reduxjs/toolkit'
import type { RootState } from '../store'
import { quizData } from '@/home/quizData'

const initialState = {
    questions: quizData,
    currentQuestionIndex: 0
}

export const quizSlice = createSlice({
  name: 'quiz',
  initialState,
  reducers: {
  }
})



export default quizSlice.reducer