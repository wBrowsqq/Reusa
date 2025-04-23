import React, { useState, useEffect } from 'react';
import styles from '../assets/premios.module.css';
import Popup from '../components/PopUp'; // Importe o componente Popup

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
  const [displayedPoints, setDisplayedPoints] = useState(0); // Estado para os pontos exibidos
  const [showPopup, setShowPopup] = useState(false); // Estado para controlar a exibição do pop-up

  useEffect(() => {
    const duration = 3000; // 3 segundos
    const increment = userPoints / (duration / 50); // Incremento por intervalo (50ms)
    let currentPoints = 0;

    const interval = setInterval(() => {
      currentPoints += increment;
      if (currentPoints >= userPoints) {
        currentPoints = userPoints; 
        clearInterval(interval); // para o intervalo
      }
      setDisplayedPoints(Math.floor(currentPoints)); 
    }, 50); // setei 50ms pra ficar suave

    return () => clearInterval(interval); 
  }, []); // Executa só uma vez

  const handleRedeemClick = (reward) => {
    if (userPoints ) {
      setShowPopup(true); // Exibe o pop-up 
    }
  };

  const closePopup = () => {
    setShowPopup(false); // Fecha o pop-up
  };

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
                    onClick={() => handleRedeemClick(reward)}
                  >
                    Resgatar
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Exibe o Pop-up quando necessário */}
      {showPopup && (
        <Popup
          message="Você ainda não pode resgatar prêmios! Vote no Reusa para que um dia isto seja possível!"
          onClose={closePopup}
        />
      )}
    </section>
  );
}
