import { useState } from 'react';

export default function AnimatedButton({ 
  text = "SCHEDULE A MEETING !",
  baseColor = "#0a0a0a",
  fillerColor = "#4F39F6",
  baseTextColor = "#ffefda",
  hoverTextColor = "#ffefda",
  onClick = () => {
    window.location.href="https://calendly.com/cursoraccnt001/new-meeting";
  },
}) {
  const [isHovering, setIsHovering] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);

  const handleMouseEnter = () => {
    setIsHovering(true);
    setHasInteracted(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  return (
    <>
      <style jsx>{`
        @keyframes textHoverIn {
          0% {
            opacity: 0;
          }
          1% {
            transform: translate(0, -100%);
            opacity: 1;
          }
          100% {
            transform: translate(0, 0);
            color: ${hoverTextColor};
          }
        }
        @keyframes textHoverOut {
          0% {
            opacity: 0;
          }
          1% {
            transform: translate(0, 100%);
            opacity: 1;
          }
          100% {
            transform: translate(0, 0);
          }
        }
        @keyframes fillerHoverIn {
          0% {
            transform: translate3d(0, 75%, 0);
          }
          100% {
            transform: translate3d(0, 0, 0);
          }
        }
        @keyframes fillerHoverOut {
          0% {
            transform: translate3d(0, 0, 0);
          }
          100% {
            transform: translate3d(0, -75%, 0);
          }
        }
        .button-text-hover-in {
          animation: textHoverIn 0.3s forwards;
        }
        .button-text-hover-out {
          animation: textHoverOut 0.3s forwards;
        }
        .button-filler-hover-in {
          animation: fillerHoverIn 0.3s forwards;
        }
        .button-filler-hover-out {
          animation: fillerHoverOut 0.3s forwards;
        }
      `}</style>
      
      <button
        className="relative max-w-xs h-12 px-8 rounded-full overflow-hidden font-bold border uppercase text-sm"
        style={{
          backgroundColor: baseColor,
          color: baseTextColor,
        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={onClick}
      >
        <span 
          className={`block relative z-10 ${
            hasInteracted 
              ? isHovering 
                ? 'button-text-hover-in' 
                : 'button-text-hover-out'
              : ''
          }`}
          style={{
            transform: 'translate(0, 0)',
          }}
        >
          {text}
        </span>
        <div 
          className={`absolute w-[150%] h-[200%] rounded-full top-[-50%] left-[-25%] z-0 ${
            hasInteracted
              ? isHovering
                ? 'button-filler-hover-in'
                : 'button-filler-hover-out'
              : ''
          }`}
          style={{
            backgroundColor: fillerColor,
            transform: 'translate3d(0, 75%, 0)',
          }}
        />
      </button>
    </>
  );
}