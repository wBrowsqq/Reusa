import React from "react";
import styles from "../assets/posts.module.css";
import { posts } from "../data/postsData";
import { Link } from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.css";

const Publish = () => {
    return (
        <section className={styles.catalogo}>
          <div className={styles.header}>
            <h2 className={styles.title}>Publicação</h2>
          </div>
      
          <textarea
            name="publish"
            cols="30"
            rows="10"
            placeholder="Escreva sua publicação..."
            className={styles.textarea}
          ></textarea>
      
          <input
            type="file"
            placeholder="Anexar Imagens (Opcional)"
            className={styles.fileInput}
          />
      
          <button className={styles.btn}>
            <Link to="/Comunity">Enviar <i className="bi bi-plus-circle"></i> </Link>
          </button>
        </section>
      );      
};

export default Publish;
