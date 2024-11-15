import React from 'react';

export function AtomDesign() {
  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
      <div className="relative w-48 h-48 animate-[spin_20s_linear_infinite]">
        <div className="absolute inset-0 rounded-full border-2 border-red-500/30 rotate-[30deg]" />
        <div className="absolute inset-0 rounded-full border-2 border-red-500/30 -rotate-[30deg]" />
        <div className="absolute inset-0 rounded-full border-2 border-red-500/30" />
        
        {[0, 90, 180, 270].map((rotation) => (
          <div
            key={rotation}
            className="absolute w-4 h-4 bg-red-500 rounded-full"
            style={{
              transform: `rotate(${rotation}deg) translateY(-6rem)`,
              left: 'calc(50% - 0.5rem)',
              top: 'calc(50% - 0.5rem)',
            }}
          />
        ))}
      </div>
    </div>
  );
}