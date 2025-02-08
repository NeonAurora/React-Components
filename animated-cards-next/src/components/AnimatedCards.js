'use client';
import React, { useState } from 'react';

const AnimatedCards = ({ cards }) => {
  // Track the index of the active (expanded) card.
  const [activeIndex, setActiveIndex] = useState(0);

  // Inline style objects
  const wrapperStyle = {
    width: '100%',
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  };

  const containerStyle = {
    height: '400px',
    display: 'flex',
    flexWrap: 'nowrap',
    justifyContent: 'flex-start'
  };

  const baseCardStyle = {
    width: '80px',
    borderRadius: '2rem',
    backgroundSize: 'cover',
    cursor: 'pointer',
    overflow: 'hidden',
    margin: '0 10px',
    display: 'flex',
    alignItems: 'flex-end',
    transition: 'width 0.6s cubic-bezier(0.28, -0.03, 0, 0.99)',
    boxShadow: '0px 10px 30px -5px rgba(0, 0, 0, 0.8)'
  };

  const activeCardStyle = {
    width: '600px'
  };

  const rowStyle = {
    color: 'white',
    display: 'flex',
    flexWrap: 'nowrap'
  };

  const iconStyle = {
    background: '#223',
    color: 'white',
    borderRadius: '50%',
    width: '50px',
    height: '50px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '15px'
  };

  const descriptionStyle = {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    overflow: 'hidden',
    height: '80px',
    width: '520px',
    opacity: 0,
    transform: 'translateY(30px)',
    transition: 'all 0.3s ease',
    transitionDelay: '0.3s'
  };

  const activeDescriptionStyle = {
    opacity: 1,
    transform: 'translateY(0)'
  };

  const titleStyle = {
    textTransform: 'uppercase'
  };

  const paragraphStyle = {
    color: '#b0b0ba',
    paddingTop: '5px'
  };

  return (
    <div style={wrapperStyle}>
      <div style={containerStyle}>
        {cards.map((card, index) => {
          // Combine the base card style with the active style when needed
          const cardStyle = {
            ...baseCardStyle,
            ...(activeIndex === index ? activeCardStyle : {}),
            backgroundImage: `url(${card.image})`
          };

          // Combine the base description style with the active description style when active
          const combinedDescriptionStyle = {
            ...descriptionStyle,
            ...(activeIndex === index ? activeDescriptionStyle : {})
          };

          return (
            <div
              key={index}
              style={cardStyle}
              onClick={() => setActiveIndex(index)}
            >
              <div style={rowStyle}>
                <div style={iconStyle}>
                  {index + 1}
                </div>
                <div style={combinedDescriptionStyle}>
                  <h4 style={titleStyle}>{card.title}</h4>
                  <p style={paragraphStyle}>{card.description}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AnimatedCards;
