import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { courses } from '../data/coursesData';
import styles from '../assets/player.module.css';

export default function CoursePlayer() {
  const { courseId } = useParams();
  const course = courses[courseId];
  const [currentVideo, setCurrentVideo] = useState(course.videos[0]);

  return (
    <div className={styles.container}>
      <div className={styles.videoArea}>
        <iframe 
        src={currentVideo.url}
        title={currentVideo.title}
        frameBorder="0"
        allowFullScreen
        className={styles.video}
        width="100%" 
        height="500px" // Ajuste de altura
        />
        <h2>{currentVideo.title}</h2>
        <p className={styles.description}>{course.description}</p>
      </div>
      <aside className={styles.sidebar}>
        <h3>Aulas</h3>
        <ul className={styles.videoList}>
          {course.videos.map((vid, index) => (
            <li key={index} onClick={() => setCurrentVideo(vid)} className={styles.videoItem}>
              {vid.title}
            </li>
          ))}
        </ul>
      </aside>
    </div>
  );
}
