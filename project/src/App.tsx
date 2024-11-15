import React, { useEffect, useState } from 'react';
import { ClockHands } from './components/ClockHands';
import { AtomDesign } from './components/AtomDesign';
import { ClockNumbers } from './components/ClockNumbers';

const elements = [
  { symbol: 'Mg', name: 'Magnesio', mass: '24.305', position: 12 },
  { symbol: 'H', name: 'Hidrógeno', mass: '1.0079', position: 1 },
  { symbol: 'He', name: 'Helio', mass: '4.0026', position: 2 },
  { symbol: 'Li', name: 'Litio', mass: '6.941', position: 3 },
  { symbol: 'Be', name: 'Berilio', mass: '9.0122', position: 4 },
  { symbol: 'B', name: 'Boro', mass: '10.811', position: 5 },
  { symbol: 'C', name: 'Carbono', mass: '12.011', position: 6 },
  { symbol: 'N', name: 'Nitrógeno', mass: '14.007', position: 7 },
  { symbol: 'O', name: 'Oxígeno', mass: '15.999', position: 8 },
  { symbol: 'F', name: 'Flúor', mass: '18.998', position: 9 },
  { symbol: 'Ne', name: 'Neón', mass: '20.180', position: 10 },
  { symbol: 'Na', name: 'Sodio', mass: '22.990', position: 11 },
];

function App() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center p-4">
      <div className="relative w-[500px] h-[500px]">
        <div className="absolute inset-0 rounded-full bg-black border-4 border-gray-700 shadow-2xl">
          {/* Tick Marks */}
          {Array.from({ length: 60 }, (_, i) => {
            const rotation = i * 6;
            const isHour = i % 5 === 0;
            
            return (
              <div
                key={i}
                className={`absolute left-1/2 ${isHour ? 'h-4 bg-gray-400' : 'h-2 bg-gray-600'} w-0.5 origin-bottom`}
                style={{
                  transform: `rotate(${rotation}deg) translateX(-50%)`,
                  bottom: '50%',
                }}
              />
            );
          })}
          
          <AtomDesign />
          <ClockNumbers elements={elements} />
          <ClockHands
            hours={time.getHours()}
            minutes={time.getMinutes()}
            seconds={time.getSeconds()}
          />
        </div>
      </div>
    </div>
  );
}

export default App;