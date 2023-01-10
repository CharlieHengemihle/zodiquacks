import React from 'react';
import './Main.css';
import Zodiac from '../Zodiac/Zodiac.js';
import { zodiac } from '../../data.js';
import backgroundImg from '../../stars.jpg';

export default function Main() {
  return (
    <main style={{ backgroundImage: `url(${backgroundImg})` }}>
      {zodiac.map((sign) => (
        <Zodiac key={sign.id} {...sign} />
      ))}
    </main>
  );
}
