import React from 'react';
import './Main.css';
import Zodiac from '../Zodiac/Zodiac.js';
import { zodiac } from '../../data.js';

export default function Main() {
  return (
    <main>
      {zodiac.map((sign) => (
        <Zodiac key={sign.id} {...sign} />
      ))}
    </main>
  );
}
