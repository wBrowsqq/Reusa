import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../assets/CourseModal.css'; 

export default function CourseModal({ course, courseName, onClose }) {
  const navigate = useNavigate();

  if (!course) return null;

  const handleStart = () => {
    const formattedTitle = course.title.replaceAll(" ", "-");
    navigate(`/curso/${formattedTitle}`);
  };

  return (
    <div className="course-modal-backdrop">
      <div className="course-modal">
        <button className="close-btn" onClick={onClose}>×</button>
        <h2>{course.title}</h2>
        <p><strong>Instrutor:</strong> {course.instructor}</p>
        <p>{course.description}</p>
        <button className="btn btn-success mt-3" onClick={handleStart}>
          Começar Curso
        </button>
      </div>
    </div>
  );
}
