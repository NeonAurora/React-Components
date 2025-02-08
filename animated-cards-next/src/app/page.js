// pages/index.js

import React from 'react';
import AnimatedCards from '@/components/AnimatedCards';

export default function Home() {
  // Sample cards data – update the image URLs as needed.
  const cardsData = [
    {
      image: '/img1.jpg', // Place your images in the public folder
      title: 'Winter',
      description: 'Winter has so much to offer - creative activities',
    },
    {
      image: '/img2.jpg',
      title: 'Digital Technology',
      description: 'Getting better everyday - stay tuned',
    },
    {
      image: '/img3.jpg',
      title: 'Globalization',
      description: 'Help people all over the world',
    },
    {
      image: '/img4.jpg',
      title: 'New Technologies',
      description: 'Space engineering becomes more and more advanced',
    },
  ];

  return (
    <div>
      <AnimatedCards cards={cardsData} />
    </div>
  );
}
