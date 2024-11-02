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
          className="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 transition duration-200"
        >
          Talaba Qo'shish
        </button>
        <button
          onClick={() => dispatch(clearAllStudents())}
          className="bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 transition duration-200"
        >
          Barchasini O'chirish
        </button>
      </div>

      <ul className="space-y-4">
        {students.map((student) => (
          <li
            key={student.id}
            className="flex items-center justify-between bg-gray-100 p-4 rounded-lg shadow-sm"
          >
            <div>
              <p className="text-lg font-medium text-gray-800">{student.name}</p>
              <p className="text-sm text-gray-600">{student.age} yosh</p>
            </div>
            <button
              onClick={() => dispatch(deleteStudent(student.id))}
              className="text-red-500 hover:text-red-700 transition duration-200"
            >
              O'chirish
            </button>
          </li>
        ))}
      </ul>

      <AddStudentModal isOpen={isAddModalOpen} onClose={() => setAddModalOpen(false)} />
    </div>
  );
}

export default Students;
