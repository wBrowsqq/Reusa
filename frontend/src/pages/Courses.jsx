import React, { useState } from 'react';
import styles from '../assets/catalogo.module.css';
import CourseModal from '../components/CourseModal';
import { courses } from '../data/coursesData';

export default function Courses() {
  const [selectedCourseKey, setSelectedCourseKey] = useState(null);
  const selectedCourse = selectedCourseKey ? courses[selectedCourseKey] : null;

  const openModal = (key) => setSelectedCourseKey(key);
  const closeModal = () => setSelectedCourseKey(null);

  const startCourse = () => {
    const urlName = encodeURIComponent(selectedCourse.title.replaceAll(" ", "-"));
    window.location.href = `/Curso/${urlName}`;
  };

  return (
    <section className={styles.catalogo}>
      <div className={styles.header}>
        <h2 className={styles.title}>Catálogo de Cursos</h2>
        <a href="#" className={styles.link}>Ver todos →</a>
      </div>
      <div className={styles.cardsContainer}>
        {Object.entries(courses).map(([key, course]) => (
          <div key={key} className={styles.card}>
            <img src={course.image} alt={course.title} className={styles.cardImg} />
            <div className={styles.cardContent}>
              <h3 className={styles.cardTitle}>{course.title}</h3>
              <p className={styles.cardMeta}>{course.instructor} • {course.rating}</p>
              <div className={styles.cardInfo}>
                <span>{course.content}</span>
                <button className={styles.detailsBtn} onClick={() => openModal(key)}>
                  Ver detalhes
                </button>
              </div>
              <div className={styles.cardFooter}>
                <span className={styles.price}>{course.price}</span>
                <button className={styles.accessBtn} onClick={() => openModal(key)}>
                  Acessar Curso
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      <CourseModal
        course={selectedCourse}
        courseName={selectedCourse?.title}
        onClose={closeModal}
        onStart={startCourse}
      />
    </section>
  );
}
