import React from 'react';

interface Element {
  symbol: string;
  name: string;
  mass: string;
  position: number;
}

interface ClockNumbersProps {
  elements: Element[];
}

export function ClockNumbers({ elements }: ClockNumbersProps) {
  return (
    <>
      {elements.map((element) => {
        const angle = ((element.position - 1) * 30 - 90) * (Math.PI / 180);
        const radius = 210;
        const x = Math.cos(angle) * radius;
        const y = Math.sin(angle) * radius;

        return (
          <div
            key={element.symbol}
            className="absolute transform -translate-x-1/2 -translate-y-1/2 text-center"
            style={{
              left: `calc(50% + ${x}px)`,
              top: `calc(50% + ${y}px)`,
            }}
          >
            <div className="text-lg font-bold text-gray-300">{element.position}</div>
            <div className="text-2xl font-bold text-white">{element.symbol}</div>
            <div className="text-xs text-red-500">{element.name}</div>
            <div className="text-xs text-red-500/70">{element.mass}</div>
          </div>
        );
      })}
    </>
  );
}