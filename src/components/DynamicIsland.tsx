import React, { useState } from 'react';
import { Briefcase, GraduationCap } from 'lucide-react';
import { useMode } from './ModeProvider';

export const DynamicIsland = () => {
  const { mode, toggleMode } = useMode();
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(true);
    toggleMode();
    setTimeout(() => setIsClicked(false), 600);
  };

  return (
    <button
      onClick={handleClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`
        relative flex items-center justify-center
        bg-foreground/90 backdrop-blur-md 
        rounded-full shadow-floating hover:shadow-glow
        island-morph pulse-glow
        ${isHovered 
          ? 'px-6 py-3 min-w-[120px]' 
          : 'w-12 h-12'
        }
        ${isClicked ? 'scale-95' : 'hover:scale-105'}
        transition-all duration-300 ease-out
      `}
      aria-label={`Switch to ${mode === 'jobs' ? 'training' : 'jobs'} mode`}
    >
      {/* Icon */}
      <div className={`mode-transition ${isClicked ? 'rotate-180 scale-110' : ''}`}>
        {mode === 'jobs' ? (
          <Briefcase className="w-5 h-5 text-background" />
        ) : (
          <GraduationCap className="w-5 h-5 text-background" />
        )}
      </div>

      {/* Expandable Text */}
      <span className={`
        text-background font-medium text-sm ml-2 whitespace-nowrap
        transition-all duration-300
        ${isHovered 
          ? 'opacity-100 translate-x-0' 
          : 'opacity-0 -translate-x-4 w-0 ml-0'
        }
      `}>
        {mode === 'jobs' ? 'Training' : 'Jobs'}
      </span>

      {/* Hover Glow Effect */}
      <div className={`
        absolute inset-0 rounded-full bg-gradient-primary opacity-0 
        transition-opacity duration-300 -z-10
        ${isHovered ? 'opacity-20' : ''}
      `} />
    </button>
  );
};