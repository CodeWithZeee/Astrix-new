import React from 'react';
import styles from '../AnimatedButton.module.css';

const AnimatedButton = ({ color = 'indigo', text = 'Hover' }) => {
  return (
    <>
      <div style={{ '--color': color }}>
        <button className={styles.button}>
          <span className={styles.text}>{text}</span>
          <div className={styles.icon}>
            <svg>
              <use xlinkHref="#arrow-right"></use>
            </svg>
          </div>
        </button>
      </div>

      {/* Hidden SVG definitions */}
      <svg style={{ display: 'none' }}>
        <symbol id="arrow-right" viewBox="0 0 20 10">
          <path d="M14.84 0l-1.08 1.06 3.3 3.2H0v1.49h17.05l-3.3 3.2L14.84 10 20 5l-5.16-5z"></path>
        </symbol>
        <filter id="noiseFilter">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="1.8"
            numOctaves="6"
            stitchTiles="stitch"
          ></feTurbulence>
        </filter>
      </svg>
    </>
  );
};

export default AnimatedButton;