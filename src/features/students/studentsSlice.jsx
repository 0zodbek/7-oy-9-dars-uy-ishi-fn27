import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  students: [
    { id: 1, name: "Ali", age: 18 },
    { id: 2, name: "Vali", age: 20 }
  ],
};

const studentsSlice = createSlice({
  name: 'students',
  initialState,
  reducers: {
    addStudent: (state, action) => {
      state.students.push(action.payload);
    },
    deleteStudent: (state, action) => {
      state.students = state.students.filter(student => student.id !== action.payload);
    },
    clearAllStudents: (state) => {
      state.students = [];
    },
  },
});

export const { addStudent, deleteStudent, clearAllStudents } = studentsSlice.actions;

export default studentsSlice.reducer;
