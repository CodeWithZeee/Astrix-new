"use client";
export default function Starfall() {
  // Star configuration data - each star has specific position and delay
  const starData = [
    { startX: 68, endX: 88, delay: 0.3 },
    { startX: 57, endX: 77, delay: 0.6 },
    { startX: 70, endX: 90, delay: 0.9 },
    { startX: 54, endX: 74, delay: 1.2 },
    { startX: 85, endX: 105, delay: 1.5 },
    { startX: 59, endX: 79, delay: 1.8 },
    { startX: 33, endX: 53, delay: 2.1 },
    { startX: 82, endX: 102, delay: 2.4 },
    { startX: 24, endX: 44, delay: 2.7 },
    { startX: 54, endX: 74, delay: 3.0 },
    { startX: 11, endX: 31, delay: 3.3 },
    { startX: 14, endX: 34, delay: 3.6 },
    { startX: 66, endX: 86, delay: 3.9 },
    { startX: 64, endX: 84, delay: 4.2 },
    { startX: 3, endX: 23, delay: 4.5 },
    { startX: 78, endX: 98, delay: 4.8 },
    { startX: 98, endX: 118, delay: 5.1 },
    { startX: 34, endX: 54, delay: 5.4 },
    { startX: 54, endX: 74, delay: 5.7 },
    { startX: 71, endX: 91, delay: 6.0 },
    { startX: 100, endX: 120, delay: 6.3 },
    { startX: 26, endX: 46, delay: 6.6 },
    { startX: 89, endX: 109, delay: 6.9 },
    { startX: 42, endX: 62, delay: 7.2 },
    { startX: 3, endX: 23, delay: 7.5 },
    { startX: 24, endX: 44, delay: 7.8 },
    { startX: 19, endX: 39, delay: 8.1 },
    { startX: 81, endX: 101, delay: 8.4 },
    { startX: 40, endX: 60, delay: 8.7 },
    { startX: 75, endX: 95, delay: 9.0 },
    { startX: 73, endX: 93, delay: 9.3 },
    { startX: 4, endX: 24, delay: 9.6 },
    { startX: 97, endX: 117, delay: 9.9 },
    { startX: 48, endX: 68, delay: 10.2 },
    { startX: 44, endX: 64, delay: 10.5 },
    { startX: 45, endX: 65, delay: 10.8 },
    { startX: 69, endX: 89, delay: 11.1 },
    { startX: 19, endX: 39, delay: 11.4 },
    { startX: 71, endX: 91, delay: 11.7 },
    { startX: 31, endX: 51, delay: 12.0 },
  ];

  return (
    <>
      <style>{`
        .starfall {
          position: fixed;
          inset: 0;
          transform-style: preserve-3d;
          perspective: 1000px;
          z-index: 0;
          pointer-events: none;
        }

        .falling-star {
          width: 8px;
          height: 8px;
          background: #ffffff;
          position: absolute;
          border-radius: 50%;
          opacity: 0.8;
          will-change: transform, opacity;
          transform: translate3d(var(--startX), -8px, 0);
          animation: starfall-move 4s infinite;
          animation-delay: var(--delay);
        }

        @keyframes starfall-move {
          0% { transform: translate3d(var(--startX), -8px, 0); opacity: 0.8; }
          10% { opacity: 0.7; }
          12% { opacity: 1; box-shadow: 0 0 4px 1px #fff; }
          15% { opacity: 0.7; }
          50% { opacity: 0.2; }
          100% { transform: translate3d(var(--endX), 100vh, 0); opacity: 0; }
        }

        @media only screen and (max-width: 600px) {
          .falling-star { width: 6px; height: 6px; }
        }
      `}</style>

      <div className="starfall">
        {starData.map((star, index) => (
          <div
            key={index}
            className="falling-star"
            style={{
              "--startX": `${star.startX}vw`,
              "--endX": `${star.endX}vw`,
              "--delay": `${star.delay}s`,
            }}
          />
        ))}
      </div>
    </>
  );
}
