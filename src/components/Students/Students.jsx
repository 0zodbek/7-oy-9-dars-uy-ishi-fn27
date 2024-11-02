import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteStudent, clearAllStudents } from '../../features/students/studentsSlice';
import AddStudentModal from './AddStudentModal';


function Students() {
  const students = useSelector((state) => state.students.students);
  const dispatch = useDispatch();
  const [isAddModalOpen, setAddModalOpen] = useState(false);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-8">Talabalar ro'yxati</h1>
      
      <div className="flex justify-center space-x-4 mb-8">
        <button
          onClick={() => setAddModalOpen(true)}
          className="bg-teal-500 text-white py-2 px-4 rounded-lg hover:bg-teal-600 transition duration-200 shadow-md"
        >
          Talaba Qo'shish
        </button>
        <button
          onClick={() => dispatch(clearAllStudents())}
          className="bg-rose-500 text-white py-2 px-4 rounded-lg hover:bg-rose-600 transition duration-200 shadow-md"
        >
          Barchasini O'chirish
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {students.map((student) => (
          <div
            key={student.id}
            className="bg-white p-6 rounded-lg shadow-lg border border-gray-200"
          >
            <div>
              <p className="text-xl font-semibold text-gray-900">{student.name}</p>
              <p className="text-sm text-gray-700">{student.age} yosh</p>
            </div>
            <button
              onClick={() => dispatch(deleteStudent(student.id))}
              className="mt-4 text-rose-500 hover:text-rose-700 transition duration-200"
            >
              O'chirish
            </button>
          </div>
        ))}
      </div>

      <AddStudentModal isOpen={isAddModalOpen} onClose={() => setAddModalOpen(false)} />
    </div>
  );
}

export default Students;
