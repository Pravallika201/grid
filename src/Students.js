import React from 'react';
import './Students.css';

const Students = () => {
  const students = [
    {
      id: 1,
      name: 'Pravallika',
      age: 27,
      grade: 'A',
      subjects: [
        { name: 'Math', score: 95 },
        { name: 'English', score: 88 },
      ],
    },
    {
      id: 2,
      name: 'Pavan',
      age: 32,
      grade: 'B',
      subjects: [
        { name: 'Math', score: 80 },
        { name: 'English', score: 85 },
      ],
    },
    {
      id: 3,
      name: 'Manu',
      age: 21,
      grade: 'C',
      subjects: [
        { name: 'Math', score: 70 },
        { name: 'English', score: 75 },
      ],
    },
    {
      id: 4,
      name: 'Raji',
      age: 23,
      grade: 'B',
      subjects: [
        { name: 'Math', score: 85 },
        { name: 'English', score: 80 },
      ],
    },
    {
      id: 5,
      name: 'Sri',
      age: 20,
      grade: 'A',
      subjects: [
        { name: 'Math', score: 90 },
        { name: 'English', score: 95 },
      ],
    },
    {
        id: 5,
        name: 'Sri',
        age: 20,
        grade: 'A',
        subjects: [
          { name: 'Math', score: 90 },
          { name: 'English', score: 95 },
        ],
      },
      {
        id: 5,
        name: 'Sri',
        age: 20,
        grade: 'A',
        subjects: [
          { name: 'Math', score: 90 },
          { name: 'English', score: 95 },
        ],
      },
      {
        id: 5,
        name: 'Sri',
        age: 20,
        grade: 'A',
        subjects: [
          { name: 'Math', score: 90 },
          { name: 'English', score: 95 },
        ],
      },
      {
        id: 5,
        name: 'Sri',
        age: 20,
        grade: 'A',
        subjects: [
          { name: 'Math', score: 90 },
          { name: 'English', score: 95 },
        ],
      },
      {
        id: 5,
        name: 'Sri',
        age: 20,
        grade: 'A',
        subjects: [
          { name: 'Math', score: 90 },
          { name: 'English', score: 95 },
        ],
      },
  ];

  return (
    <div className='grid-container'>
        {students.map(student=>(
            <div className='grid-item' index={student.id}>
                <p><strong>ID:</strong> {student.id}</p>
                <p><strong>Name:</strong> {student.name}</p>
                <p><strong>Age:</strong> {student.age}</p>
                <p><strong>Grade:</strong> {student.grade}</p>
                <div className='subjects'>
                    <p className='subject'><strong><em>Subjects:</em></strong> </p>
                    {student.subjects.map((subject,index) => (
                        <ul>
                            <li key={index}>{subject.name}: {subject.score}</li>
                        </ul>
                    ))}
                </div>
            </div>
        ))}
    </div>
  )
};

export default Students;
