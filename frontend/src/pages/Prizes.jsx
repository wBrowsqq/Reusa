import React, { useState, useEffect } from 'react';
import styles from '../assets/premios.module.css';

const userPoints = 2500; // Pontos reais do usuário (pode ser dinâmico)

const rewardsData = [
  {
    discount: "30% de desconto no Curso de Marketing",
    company: "Udemy",
    points: 1500,
  },
  {
    discount: "20% de desconto em Produtos Sustentáveis",
    company: "EcoShop",
    points: 1000,
  },
  {
    discount: "50% de desconto no Curso de Web Design",
    company: "Coursera",
    points: 2000,
  },
  {
    discount: "15% de desconto em Equipamentos Fotográficos",
    company: "CameraPro",
    points: 1200,
  },
  {
    discount: "25% de desconto no Curso de Data Science",
    company: "DataCamp",
    points: 1800,
  },
  {
    discount: "10% de desconto em Materiais de Arte",
    company: "ArtSupply",
    points: 800,
  },
];

export default function Premios() {
  const [displayedPoints, setDisplayedPoints] = useState(0); // Estado para os pontos exibidos meu deus asaaaaa

  useEffect(() => {
    const duration = 3000; // 3 segundos
    const increment = userPoints / (duration / 50); // Incremento por intervalo (50ms), divide pela duration
    let currentPoints = 0;

    const interval = setInterval(() => {
      currentPoints += increment;
      if (currentPoints >= userPoints) {
        currentPoints = userPoints; 
        clearInterval(interval); // para o intervalo
      }
      setDisplayedPoints(Math.floor(currentPoints)); 
    }, 50); // setei 50ms pra ficar suave mas sla

    return () => clearInterval(interval); 
  }, []); // Executa só uma vez (foi um inferno fazer)

  return (
    <section className={styles.sectionPoints}>
      <div className="container">
        <h2 className={styles.pointsLabel}>VOCÊ TEM</h2>
        <h1 className={styles.pointsValue}>{displayedPoints.toLocaleString()} PONTOS</h1>
        <h3 className={styles.redeemTitle}>PEGUE SEUS PONTOS</h3>

        <div className="row justify-content-center mt-4 g-4">
          {rewardsData.map((reward, index) => (
            <div key={index} className="col-12 col-sm-6 col-md-4 col-lg-3">
              <div className={styles.rewardCard}>
                <div className={styles.cardBody}>
                  <h5 className={styles.cardTitle}>{reward.discount}</h5>
                  <p className={styles.cardCompany}>Empresa: {reward.company}</p>
                  <p className={styles.cardPoints}>Pontos: {reward.points.toLocaleString()}</p>
                  <button
                    className={styles.btnGreen}
                    disabled={userPoints < reward.points}
                  >
                    Resgatar
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}