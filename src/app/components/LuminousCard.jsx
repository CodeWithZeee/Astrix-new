'use client';
import React, { useState } from 'react';

const LuminousCard = (props) => {
  const [isActive, setIsActive] = useState(false);

  const handleToggle = () => {
    setIsActive(!isActive);
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <style>{`
        @import url('https://db.onlinewebfonts.com/c/12ff62164c9778917bddb93c6379cf47?family=Aeonik+Pro+Regular');

        * {
          box-sizing: border-box;
        }

        .card {
          position: relative;
          background: radial-gradient(circle at 50% 0%, #3a3a3a 0%, #1a1a1a 64%);
          box-shadow: inset 0 1.01rem 0.2rem -1rem transparent,
            inset 0 -1.01rem 0.2rem -1rem transparent, 0 -1.02rem 0.2rem -1rem transparent,
            0 1rem 0.2rem -1rem transparent, 0 0 0 1px rgba(255, 255, 255, 0.2), 0 4px 4px 0 rgba(0, 0, 0, 0.27), 0 0 0 1px #333;
          width: 18rem;
          height: 24rem;
          border-radius: 1.8rem;
          color: #fff;
          padding: 1rem;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          transition: all 0.4s ease-in-out, translate 0.4s ease-out;
          font-family: 'Aeonik Pro Regular', system-ui, -apple-system, sans-serif;
        }

        .card::before {
          content: "";
          display: block;
          width: calc(100% + 2rem);
          height: calc(100% + 2rem);
          position: absolute;
          left: -1rem;
          right: -1rem;
          top: -1rem;
          bottom: -1rem;
          margin: auto;
          box-shadow: inset 0 0 0px 0.06rem rgba(255, 255, 255, 0.13);
          border-radius: 2.6rem;
          clip-path: polygon(
            4rem 0, 0 0, 0 4rem, 4rem 4rem,
            4rem calc(100% - 4rem), 0 calc(100% - 4rem), 0 100%, 4rem 100%,
            4rem calc(100% - 4rem), calc(100% - 4rem) calc(100% - 4rem),
            calc(100% - 4rem) 100%, 100% 100%, 100% calc(100% - 4rem),
            calc(100% - 4rem) calc(100% - 4rem), calc(100% - 4rem) 4rem,
            100% 4rem, 100% 0, calc(100% - 4rem) 0,
            calc(100% - 4rem) 4rem, 4rem 4rem
          );
          transition: all 0.4s ease-in-out;
        }

        .card:hover {
          translate: 0 -0.2rem;
        }

        .card:hover::before {
          width: calc(100% + 1rem);
          height: calc(100% + 1rem);
          left: -0.5rem;
          right: -0.5rem;
          top: -0.5rem;
          bottom: -0.5rem;
          border-radius: 2.2rem;
          box-shadow: inset 0 0 0 0.08rem rgba(255, 255, 255, 0.067);
          clip-path: polygon(
            8rem 0, 0 0, 0 8rem, 8rem 8rem,
            8rem calc(100% - 8rem), 0 calc(100% - 8rem), 0 100%, 8rem 100%,
            8rem calc(100% - 8rem), calc(100% - 8rem) calc(100% - 8rem),
            calc(100% - 8rem) 100%, 100% 100%, 100% calc(100% - 8rem),
            calc(100% - 8rem) calc(100% - 8rem), calc(100% - 8rem) 8rem,
            100% 8rem, 100% 0, calc(100% - 8rem) 0,
            calc(100% - 8rem) 8rem, 8rem 8rem
          );
        }

        .light-layer {
          position: absolute;
          left: 0;
          top: 0;
          height: 100%;
          width: 100%;
          transform-style: preserve-3d;
          perspective: 400px;
        }

        .slit {
          position: absolute;
          left: 0;
          right: 0;
          top: 0;
          bottom: 0;
          margin: auto;
          width: 64%;
          height: 1.2rem;
          transform: rotateX(-76deg);
          background: #121212;
          box-shadow: 0 0 4px 0 transparent;
          transition: all 0.4s ease-in-out;
        }

        .lumen {
          position: absolute;
          left: 0;
          right: 0;
          top: 0;
          bottom: 0;
          margin: auto;
          width: 100%;
          height: 100%;
          pointer-events: none;
          perspective: 400px;
          opacity: 0;
          transition: opacity 0.4s ease-in-out;
        }

        .min {
          width: 70%;
          height: 3rem;
          background: linear-gradient(transparent, rgba(255, 255, 255, 0.67));
          position: absolute;
          left: 0;
          right: 0;
          top: 0;
          bottom: 2.5rem;
          margin: auto;
          transform: rotateX(-42deg);
          opacity: 0.4;
        }

        .mid {
          width: 74%;
          height: 13rem;
          background: linear-gradient(transparent, rgba(255, 255, 255, 0.67));
          position: absolute;
          left: 0;
          right: 0;
          top: 0;
          bottom: 10em;
          margin: auto;
          transform: rotateX(-42deg);
          filter: blur(1rem);
          opacity: 0.8;
          border-radius: 100% 100% 0 0;
        }

        .hi {
          width: 50%;
          height: 13rem;
          background: linear-gradient(transparent, rgba(255, 255, 255, 0.67));
          position: absolute;
          left: 0;
          right: 0;
          top: 0;
          bottom: 12em;
          margin: auto;
          transform: rotateX(22deg);
          filter: blur(1rem);
          opacity: 0.6;
          border-radius: 100% 100% 0 0;
        }

        .darken {
          position: absolute;
          left: 0;
          right: 0;
          top: 0;
          bottom: 0;
          margin: auto;
          width: 100%;
          height: 100%;
          pointer-events: none;
          perspective: 400px;
          transition: opacity 0.4s ease-in-out;
          opacity: 0.5;
        }

        .darken > * {
          transition: opacity 0.4s ease-in-out;
        }

        .sl {
          width: 64%;
          height: 10rem;
          background: linear-gradient(#000, transparent);
          position: absolute;
          left: 0;
          right: 0;
          top: 9.6em;
          bottom: 0;
          margin: auto;
          filter: blur(0.2rem);
          opacity: 0.1;
          border-radius: 0 0 100% 100%;
          transform: rotateX(-22deg);
        }

        .ll {
          width: 62%;
          height: 10rem;
          background: linear-gradient(rgba(0, 0, 0, 0.67), transparent);
          position: absolute;
          left: 0;
          right: 0;
          top: 11em;
          bottom: 0;
          margin: auto;
          filter: blur(0.8rem);
          opacity: 0.4;
          border-radius: 0 0 100% 100%;
          transform: rotateX(22deg);
        }

        .slt {
          width: 0.5rem;
          height: 4rem;
          background: linear-gradient(rgba(0, 0, 0, 0.33), transparent);
          position: absolute;
          left: 0;
          right: 11.5rem;
          top: 3.9em;
          bottom: 0;
          margin: auto;
          opacity: 0.6;
          border-radius: 0 0 100% 100%;
          transform: skewY(42deg);
        }

        .srt {
          width: 0.5rem;
          height: 4rem;
          background: linear-gradient(rgba(0, 0, 0, 0.33), transparent);
          position: absolute;
          right: 0;
          left: 11.5rem;
          top: 3.9em;
          bottom: 0;
          margin: auto;
          opacity: 0.6;
          border-radius: 0 0 100% 100%;
          transform: skewY(-42deg);
        }

        .icon {
          position: absolute;
          top: 5rem;
          left: 0;
          right: 0;
          margin: auto;
          width: fit-content;
          filter: drop-shadow(0 -1.2rem 1px transparent);
          transition: filter 0.4s ease-in-out;
        }

        .bottom {
          position: relative;
        }

        .bottom h4 {
          margin: 0;
          margin-bottom: 1rem;
          font-size: 1.2rem;
          color: #ccc;
        }

        .bottom p {
          margin: 0;
          padding-bottom: 0.6rem;
          color: rgba(255, 255, 255, 0.27);
          font-size: 0.6rem;
          font-weight: 100;
          border-bottom: 1px solid rgba(255, 255, 255, 0.067);
          max-width: 64%;
        }

        .toggle {
          position: absolute;
          right: 0;
          bottom: 0;
          height: 2rem;
          width: 4.8rem;
          border-radius: 0.6rem;
          background: #000;
          box-shadow: inset 0 -8px 8px 0.3rem rgba(0, 0, 0, 0.27), inset 0 0 1px 0.3rem #ddd,
            inset 0 -2px 1px 0.3rem #fff, inset 0 1px 2px 0.3rem rgba(0, 0, 0, 0.4),
            inset 0 0 1px 0.8rem #aaa;
          cursor: pointer;
          transition: all 0.4s ease-in-out;
        }

        .toggle::before {
          content: "";
          display: block;
          position: absolute;
          left: 0;
          right: 0;
          top: 0;
          bottom: 0;
          margin: auto;
          width: 3.4rem;
          height: 0.68rem;
          border-radius: 0.2rem;
          background: #000;
          transition: all 0.4s ease-in-out;
        }

        .handle {
          position: absolute;
          top: 0;
          bottom: 0.04rem;
          margin: auto;
          left: 0.68rem;
          width: 40%;
          height: 30%;
          background: #aaa;
          border-radius: 0.2rem;
          box-shadow: inset 0 1px 4px 0 #fff, inset 0 -1px 1px 0 rgba(0, 0, 0, 0.67),
            0 0 1px 1px rgba(0, 0, 0, 0.2), 1px 3px 6px 1px rgba(0, 0, 0, 0.67);
          transition: all 0.4s ease-in-out;
        }

        .toggle.active .handle {
          transform: translateX(1.58rem);
        }

        .toggle span {
          pointer-events: none;
          text-align: center;
          position: absolute;
          left: 0;
          right: 0;
          margin: auto;
          bottom: calc(100% + 0.4rem);
          font-size: 0.6rem;
          font-weight: 100;
          color: #555;
          opacity: 0;
          transition: opacity 0.4s ease-in-out;
        }

        .toggle:hover span {
          opacity: 1;
        }

        .toggle:not(.active):hover .handle {
          transform: translateX(0.2rem);
        }

        .card.active {
          box-shadow: inset 0 1.01rem 0.1rem -1rem rgba(255, 255, 255, 0.67), inset 0 -4rem 3rem -3rem rgba(0, 0, 0, 0.67),
            0 -1.02rem 0.2rem -1rem rgba(255, 255, 255, 0.67), 0 1rem 0.2rem -1rem #000, 0 0 0 1px rgba(255, 255, 255, 0.13),
            0 4px 4px 0 rgba(0, 0, 0, 0.27), 0 0 0 1px #333;
        }

        .card.active .slit {
          background: #fff;
          box-shadow: 0 0 4px 0 #fff;
        }

        .card.active .lumen {
          opacity: 0.5;
        }

        .card.active .darken {
          opacity: 0.8;
        }

        .card.active .sl {
          opacity: 0.2;
        }

        .card.active .ll {
          opacity: 1;
        }

        .card.active .slt {
          opacity: 1;
        }

        .card.active .srt {
          opacity: 1;
        }

        .card.active .icon {
          filter: drop-shadow(0 -1.2rem 2px rgba(0, 0, 0, 0.2)) brightness(1.64);
        }

        .card.active .toggle::before {
          background: rgba(255, 255, 255, 0.8);
          box-shadow: 0 0 0.3rem 0.2rem rgba(255, 255, 255, 0.47);
        }

        .card.active .handle {
          box-shadow: inset 0 1px 12px 0 #fff, inset 0 -1px 1px 0 rgba(255, 255, 255, 0.67),
            0 0 2px 1px rgba(68, 68, 68, 0.2), 1px 3px 6px 1px rgba(0, 0, 0, 0.27);
        }
      `}</style>

      <div className={`card ${isActive ? 'active' : ''}`}>
        <div className="light-layer">
          <div className="slit"></div>
          <div className="lumen">
            <div className="min"></div>
            <div className="mid"></div>
            <div className="hi"></div>
          </div>
          <div className="darken">
            <div className="sl"></div>
            <div className="ll"></div>
            <div className="slt"></div>
            <div className="srt"></div>
          </div>
        </div>
        <div className="content">
          <div className="icon">
            {props.imageUrl ? (
              <img
                src={props.imageUrl}
                alt={props.title}
                width="51.2"
                height="51.2"
                style={{ width: '3.2rem', height: '3.2rem', objectFit: 'contain' }}
              />
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="3.2rem" height="3.2rem" viewBox="0 0 1024 1024">
                <path fill="url(#iconGradient)" d="M488.1 414.7V303.4L300.9 428l83.6 55.8zm254.1 137.7v-79.8l-59.8 39.9zM512 64C264.6 64 64 264.6 64 512s200.6 448 448 448s448-200.6 448-448S759.4 64 512 64m278 533c0 1.1-.1 2.1-.2 3.1c0 .4-.1.7-.2 1a14.2 14.2 0 0 1-.8 3.2c-.2.6-.4 1.2-.6 1.7c-.2.4-.4.8-.5 1.2c-.3.5-.5 1.1-.8 1.6c-.2.4-.4.7-.7 1.1c-.3.5-.7 1-1 1.5c-.3.4-.5.7-.8 1c-.4.4-.8.9-1.2 1.3c-.3.3-.6.6-1 .9c-.4.4-.9.8-1.4 1.1c-.4.3-.7.6-1.1.8c-.1.1-.3.2-.4.3L525.2 786c-4 2.7-8.6 4-13.2 4c-4.7 0-9.3-1.4-13.3-4L244.6 616.9c-.1-.1-.3-.2-.4-.3l-1.1-.8c-.5-.4-.9-.7-1.3-1.1c-.3-.3-.6-.6-1-.9c-.4-.4-.8-.8-1.2-1.3a7 7 0 0 1-.8-1c-.4-.5-.7-1-1-1.5c-.2-.4-.5-.7-.7-1.1c-.3-.5-.6-1.1-.8-1.6c-.2-.4-.4-.8-.5-1.2c-.2-.6-.4-1.2-.6-1.7c-.1-.4-.3-.8-.4-1.2c-.2-.7-.3-1.3-.4-2c-.1-.3-.1-.7-.2-1c-.1-1-.2-2.1-.2-3.1V427.9c0-1 .1-2.1.2-3.1c.1-.3.1-.7.2-1a14.2 14.2 0 0 1 .8-3.2c.2-.6.4-1.2.6-1.7c.2-.4.4-.8.5-1.2c.2-.5.5-1.1.8-1.6c.2-.4.4-.7.7-1.1c.6-.9 1.2-1.7 1.8-2.5c.4-.4.8-.9 1.2-1.3c.3-.3.6-.6 1-.9c.4-.4.9-.8 1.3-1.1s.7-.6 1.1-.8c.1-.1.3-.2.4-.3L498.7 239c8-5.3 18.5-5.3 26.5 0l254.1 169.1c.1.1.3.2.4.3l1.1.8l1.4 1.1c.3.3.6.6 1 .9c.4.4.8.8 1.2 1.3c.7.8 1.3 1.6 1.8 2.5c.2.4.5.7.7 1.1c.3.5.6 1 .8 1.6c.2.4.4.8.5 1.2c.2.6.4 1.2.6 1.7c.1.4.3.8.4 1.2c.2.7.3 1.3.4 2c.1.3.1.7.2 1c.1 1 .2 2.1.2 3.1zm-254.1 13.3v111.3L723.1 597l-83.6-55.8zM281.8 472.6v79.8l59.8-39.9zM512 456.1l-84.5 56.4l84.5 56.4l84.5-56.4zM723.1 428L535.9 303.4v111.3l103.6 69.1zM384.5 541.2L300.9 597l187.2 124.6V610.3z" filter="url(#strong-inner)" />
                <defs>
                  <linearGradient id="iconGradient" x1="0" x2="0" y1="-1" y2="0.8">
                    <stop offset="0%" stopColor="#bbb" />
                    <stop offset="100%" stopColor="#555" />
                  </linearGradient>
                  <filter id="strong-inner">
                    <feFlood floodColor="rgba(255, 255, 255, 0.13)" />
                    <feComposite operator="out" in2="SourceGraphic" />
                    <feMorphology operator="dilate" radius="8" />
                    <feGaussianBlur stdDeviation="32" />
                    <feComposite operator="atop" in2="SourceGraphic" />
                  </filter>
                </defs>
              </svg>
            )}
          </div>
          <div className="bottom">
            <h4>{props.title || 'Luminous'}</h4>
            <p>{props.description || 'Toggle the light'}</p>
            <div className={`toggle ${isActive ? 'active' : ''}`} onClick={handleToggle}>
              <div className="handle"></div>
              <span>LIGHTS ON</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LuminousCard;