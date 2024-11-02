import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addStudent } from '../../features/students/studentsSlice';

function AddStudentModal({ isOpen, onClose }) {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [age, setAge] = useState('');

  const handleSubmit = () => {
    const id = Date.now();
    dispatch(addStudent({ id, name, age: parseInt(age) }));

    setName('');
    setAge('');
    onClose();
  };

  return (
    isOpen && (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-white w-96 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-4 text-center">Yangi Talaba Qo'shish</h2>
          <div className="mb-4">
            <input
              type="text"
              placeholder="Ism"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-6">
            <input
              type="number"
              placeholder="Yosh"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="flex justify-between">
            <button
              onClick={handleSubmit}
              className="w-full mr-2 bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-200"
            >
              Qo'shish
            </button>
            <button
              onClick={onClose}
              className="w-full ml-2 bg-gray-300 text-gray-700 py-2 rounded-md hover:bg-gray-400 transition duration-200"
            >
              Bekor qilish
            </button>
          </div>
        </div>
      </div>
    )
  );
}

export default AddStudentModal;
