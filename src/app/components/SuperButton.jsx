"use client";

import { useRouter } from "next/navigation";

export default function SuperButton({ text = "Launch Now", onClick }) {
  const router = useRouter();

  const handleClick = () => {
    if (onClick) {
      onClick();
    } else {
      router.push("/contact");
    }
  };

  return (
    <>
      <style jsx>{`
        .super-button {
          position: relative;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          padding: 10px 20px;
          background: linear-gradient(145deg, #0f0f0f, #1c1c1c);
          // border: 2px solid rgba(255, 255, 255, 0.2);
          border-radius: 100px;
          color: #fff;
          font-size: 14px;
          font-weight: 600;
          letter-spacing: 0.5px;
          cursor: pointer;
          overflow: hidden;
          transition: all 0.1s ease-in-out;
          box-shadow: 0 0 20px rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(8px);
          z-index: 1;
        }

        @media (min-width: 640px) {
          .super-button {
            gap: 12px;
            padding: 14px 28px;
            font-size: 16px;
          }
        }

        .super-button::before {
          content: "";
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: conic-gradient(from 50deg, black, brown, blue);
          animation: rotate 4s linear infinite;
          z-index: -2;
        }

        .super-button::after {
          content: "";
          position: absolute;
          inset: 2px;
          background: #0a0a0a;
          border-radius: inherit;
          z-index: -1;
        }

        .super-button:hover {
          transform: scale(1.05);
          // box-shadow: 0 0 40px rgba(0, 255, 255, 0.2);
        }

        .super-button:hover .arrow {
          transform: translateX(6px);
        }

        .arrow {
          width: 18px;
          height: 18px;
          transition: transform 0.3s ease-in-out;
          color: #ffffff;
        }

        @media (min-width: 640px) {
          .arrow {
            width: 22px;
            height: 22px;
          }
        }

        @keyframes rotate {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
      `}</style>

      <button className="super-button" onClick={handleClick}>
        <span>{text}</span>
        <svg fill="none" viewBox="0 0 24 24" className="arrow">
          <path
            strokeLinejoin="round"
            strokeLinecap="round"
            strokeWidth="2"
            stroke="currentColor"
            d="M5 12h14M13 6l6 6-6 6"
          />
        </svg>
      </button>
    </>
  );
}
