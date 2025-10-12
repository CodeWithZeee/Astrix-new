'use client';
import React, { useState } from 'react';

const StackedCardsFAQ = () => {
  const [selectedCard, setSelectedCard] = useState(1);

  const cards = [
    {
      id: 1,
      question: "What makes Astrix unique?",
      answer: "Our unmatched expertise and our tailored approach is what sets us apart. We prefer working with you, instead of for you. We dive into your business and cooperate with you to create actually impactful AI solutions that drive real results.",
      color: "rgba(163, 230, 53, 0.5)"
    },
    {
      id: 2,
      question: "Is my company a good fit for Astrix?",
      answer: "We work with companies of all sizes across a wide variety of industries. Whether you're just beginning your AI journey or need advanced custom solutions, we're the ideal partner to help you succeed.",
      color: "rgba(251, 191, 36, 0.5)"
    },
    {
      id: 3,
      question: "How does your subscription model work?",
      answer: "We understand that your business needs can vary from month to month. That's why we offer a flexible subscription model. Subscribe whenever you need AI-driven solutions, and cancel anytime you want. It's that simple!",
      color: "rgba(249, 168, 212, 0.5)"
    },
    {
      id: 4,
      question: "How long does the development phase take?",
      answer: "We work with companies of all sizes across a wide variety of industries. Whether you're just beginning your AI journey or need advanced custom solutions, we're the ideal partner to help you succeed. We understand that your business needs can vary from month to month. That's why we offer a flexible subscription model. Subscribe whenever you need AI-driven solutions, and cancel anytime you want. It's that simple!",
      color: "rgba(139, 92, 246, 0.5)"
    },
    {
      id: 5,
      question: "Do you provide support after implementation?",
      answer: "Yes, we do! Our commitment doesn't end with implementation. We provide continuous monitoring and improvements to ensure your solutions perform optimally, and our support team is available 24/7 whenever you need assistance.",
      color: "rgba(59, 130, 246, 0.5)"
    }
  ];

  const getCardStyles = (cardId) => {
    const totalCards = cards.length;
    const activeIndex = cards.findIndex(c => c.id === selectedCard);
    const currentIndex = cards.findIndex(c => c.id === cardId);
    
    if (currentIndex === activeIndex) {
      return { order: totalCards, offset: '0rem', scale: 1, opacity: 1 };
    }
    
    const distance = (currentIndex - activeIndex + totalCards) % totalCards;
    const reverseDistance = totalCards - distance;
    const actualDistance = Math.min(distance, reverseDistance);
    
    return {
      order: totalCards - distance,
      offset: `${-actualDistance}rem`,
      scale: 1 - (actualDistance * 0.03),
      opacity: 1 - (actualDistance * 0.2)
    };
  };

  const handleNextCard = (currentId) => {
    const nextId = currentId === 3 ? 1 : currentId + 1;
    setSelectedCard(nextId);
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-8">
      <style jsx>{`
        @import url('https://fonts.bunny.net/css?family=kodchasan:200,400,600');
        
        .stacked-section {
          display: grid;
          grid-template-areas: "stack";
          width: min(calc(100% - 2rem), 40rem);
          font-family: "Kodchasan", sans-serif;
        }

        .card {
          position: relative;
          isolation: isolate;
          background-color: white;
          grid-area: stack;
          transition: all 500ms cubic-bezier(0.34, 1.56, 0.64, 1);
          border-radius: 10px;
          color: black;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
        }

        .card::before {
          content: "";
          position: absolute;
          z-index: -1;
          inset: -20px;
          border-radius: 30px;
          display: none;
        }

        .card::after {
          content: "";
          position: absolute;
          background-color: white;
          inset: 0;
          z-index: -1;
          border-radius: inherit;
        }

        .card-header {
          padding: 0.5rem 1rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-radius: 10px 10px 0 0;
          transition: background-color 300ms ease-in-out;
        }

        .card-title {
          margin: 0;
          font-weight: 500;
          font-size: 1.1rem;
          transition: all 300ms ease-in-out;
          color: #333;
        }

        .card-header {
          padding: 0.5rem 1rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-radius: 10px 10px 0 0;
          transition: background-color 300ms ease-in-out;
        }

        .card-title {
          margin: 0;
          font-weight: 500;
          font-size: 1.1rem;
          transition: all 300ms ease-in-out;
          color: #333;
        }

        .next-button {
          padding: 0;
          color: #333;
          transition: rotate 300ms cubic-bezier(0.34, 1.56, 0.64, 1);
          cursor: pointer;
          background: none;
          border: none;
          font-size: 1.5rem;
        }

        .next-button:hover {
          transform: rotate(90deg);
        }

        .next-button {
          padding: 0;
          color: #333;
          transition: rotate 300ms cubic-bezier(0.34, 1.56, 0.64, 1);
          cursor: pointer;
          background: none;
          border: none;
          font-size: 1.5rem;
        }

        .next-button:hover {
          transform: rotate(90deg);
        }

        .card-content {
          position: relative;
          padding: 2rem;
        }

        .poem-container {
          width: 100%;
        }

        .question {
          font-size: 1.25rem;
          font-weight: 600;
          color: black;
          margin-bottom: 1rem;
          transition: opacity 300ms ease-in-out;
        }

        .answer {
          font-size: 1rem;
          color: #6b7280;
          line-height: 1.6;
          transition: opacity 300ms ease-in-out 300ms;
        }
      `}</style>

      <div className="stacked-section">
        {cards.map((card) => {
          const styles = getCardStyles(card.id);
          const isActive = selectedCard === card.id;

          return (
            <div
              key={card.id}
              className="card"
              onClick={() => isActive && handleNextCard(card.id)}
              style={{
                order: styles.order,
                transform: `translateY(${styles.offset}) scale(${styles.scale})`,
                opacity: styles.opacity,
                zIndex: styles.order,
                cursor: isActive ? 'pointer' : 'default'
              }}
            >
              <div className="card-content">
                <div className="poem-container">
                  <h3 className="question">
                    {card.question}
                  </h3>
                  <p className="answer" style={{ opacity: isActive ? 1 : 0 }}>
                    {card.answer}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default StackedCardsFAQ;