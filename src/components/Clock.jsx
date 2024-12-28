import React, { useState, useEffect } from 'react';

const Clock = () => {
  const [time, setTime] = useState(new Date());
  const months = ["Styczeń", "Luty", "Marzec", "Kwiecień", "Maj", "Czerwiec", "Lipiec", "Sierpień", "Wrzesień", "Październik", "Listopad", "Grudzień"];
  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval); 
  }, []);

  const day = time.getDate(); 
  const month = time.getMonth();
  const hours = time.getHours().toString().padStart(2, '0');
  const minutes = time.getMinutes().toString().padStart(2, '0'); 
  const seconds = time.getSeconds().toString().padStart(2, '0'); 

  return (
    <div className='flex w-[100%] justify-between mb-8'>
      <h1 className='text-2xl font-semibold text-clockText'> {day} {months[month]}</h1>
      <p className='text-2xl font-semibold text-clockText'>
        {hours}:{minutes}:{seconds}
      </p>
    </div>
  );
};

export default Clock;
