

import React, { useState, useEffect } from 'react';
import styles from '../../assets/premios.module.css';
import Popup from './PopUp';
import { rewardsData, userPoints } from '../../data/rewardsData'; // importa aqui

export default function Premios() {
  const [displayedPoints, setDisplayedPoints] = useState(0);
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const duration = 3000;
    const increment = userPoints / (duration / 50);
    let currentPoints = 0;

    const interval = setInterval(() => {
      currentPoints += increment;
      if (currentPoints >= userPoints) {
        currentPoints = userPoints;
        clearInterval(interval);
      }
      setDisplayedPoints(Math.floor(currentPoints));
    }, 50);

    return () => clearInterval(interval);
  }, []);

  const handleRedeemClick = (reward) => {
    if (userPoints) {
      setShowPopup(true);
    }
  };

  const closePopup = () => {
    setShowPopup(false);
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

      {showPopup && (
        <Popup
          message="Você ainda não pode resgatar prêmios! Vote no Reusa para que um dia isto seja possível!"
          onClose={closePopup}
        />
      )}
    </section>
  );
}
