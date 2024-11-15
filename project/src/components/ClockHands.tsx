import React from 'react';

interface ClockHandsProps {
  hours: number;
  minutes: number;
  seconds: number;
}

export function ClockHands({ hours, minutes, seconds }: ClockHandsProps) {
  const secondDegrees = (seconds / 60) * 360;
  const minuteDegrees = ((minutes + seconds / 60) / 60) * 360;
  const hourDegrees = ((hours % 12 + minutes / 60) / 12) * 360;

  return (
    <div className="absolute inset-0">
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        {/* Hour Hand */}
        <div
          className="absolute h-[120px] w-1.5 -ml-[0.75px] -mt-[120px] bg-white rounded-full origin-bottom"
          style={{
            transform: `rotate(${hourDegrees}deg)`
          }}
        />
        {/* Minute Hand */}
        <div
          className="absolute h-[160px] w-1 -ml-[0.5px] -mt-[160px] bg-red-500 rounded-full origin-bottom"
          style={{
            transform: `rotate(${minuteDegrees}deg)`
          }}
        />
        {/* Second Hand */}
        <div
          className="absolute h-[180px] w-0.5 -ml-[0.25px] -mt-[180px] bg-red-300 rounded-full origin-bottom"
          style={{
            transform: `rotate(${secondDegrees}deg)`
          }}
        />
        {/* Center Dot */}
        <div className="absolute w-6 h-6 -ml-3 -mt-3 bg-red-500 rounded-full">
          <div className="absolute w-4 h-4 left-1 top-1 bg-red-700 rounded-full" />
        </div>
      </div>
    </div>
  );
}