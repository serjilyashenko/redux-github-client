import React from 'react';
import img404cow from './404_cow.png';
import img404homer from './404_homer.png';
import img404pacman from './404_pacman.png';
import img404schema from './404_schema.jpg';

const img404items = [img404pacman, img404cow, img404homer, img404schema];

const Page404 = () => {
  const random = Math.round(Math.random() * 3);
  const randomImage = img404items[random];

  return (
    <div className="img404__wrapper">
      <img className="img404" src={randomImage} alt="404" />
    </div>
  );
};

export default Page404;
