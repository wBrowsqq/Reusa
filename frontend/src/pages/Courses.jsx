import React, { useState } from 'react';
import styles from '../assets/catalogo.module.css';

const courseData = [
  {
    title: "Artesanato com Itens Recicláveis",
    instructor: "Marina-Azevedo",
    rating: "⭐ 4.2",
    content: "📘 110+ Conteúdos",
    price: "Gratuito",
    image: "/public/images/Marina-Azevedo.jpg"
  },
  {
    title: "Dinheiro com Reciclagem",
    instructor: "Alana-Soares",
    rating: "⭐ 4.6",
    content: "📘 110+ Conteúdos",
    price: "Gratuito",
    image: "/public/images/Alana-Soares.jpg"
   
  },
  {
    title: "Sustentabilidade na Prática",
    instructor: "Rogerio-Borges",
    rating: "⭐ 4.9",
    content: "📘 110+ Conteúdos",
    price: "Gratuito",
    image: "/images/Rogerio-Borges.jpg"
  }
];

export default function Courses() {
  return (
    <section className={styles.catalogo}>
      <div className={styles.header}>
        <h2 className={styles.title}>Catálogo de Cursos</h2>
        <a href="#" className={styles.link}>Ver todos →</a>
      </div>
      <div className={styles.cardsContainer}>
        {courseData.map((course, index) => (
          <div key={index} className={styles.card}>
            <img src={course.image} alt={course.title} className={styles.cardImg} />
            <div className={styles.cardContent}>
              <h3 className={styles.cardTitle}>{course.title}</h3>
              <p className={styles.cardMeta}>{course.instructor} • {course.rating}</p>
              <div className={styles.cardInfo}>
                <span>{course.content}</span>
                <button className={styles.detailsBtn}>Ver detalhes</button>
              </div>
              <div className={styles.cardFooter}>
                <span className={styles.price}>{course.price}</span>
                <button className={styles.accessBtn}>Acessar Curso</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}