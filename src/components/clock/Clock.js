import { useState } from 'react';

import './clock.css';

export default function Clock() {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  function getDateAndTime() {
    const d = new Date();

    let hours = d.getHours();
    let minutes = d.getMinutes();
    let seconds = d.getSeconds();
    let timeFormat = hours > 12 ? 'PM' : 'AM';

    if (hours > 12) {
      hours = hours % 12;
    }

    if (hours < 10) hours = `0${hours}`;
    if (minutes < 10) minutes = `0${minutes}`;
    if (seconds < 10) seconds = `0${seconds}`;

    setDate(d.toDateString());
    setTime(`${hours}:${minutes}:${seconds} ${timeFormat}`);
  }

  setInterval(getDateAndTime, 1000);

  return (
    <div className="clock">
      <h2>{date}</h2>
      <h1>{time}</h1>
    </div>
  );
}
