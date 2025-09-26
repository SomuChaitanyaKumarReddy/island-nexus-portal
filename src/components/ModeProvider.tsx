import React, { createContext, useContext, useState, useEffect } from 'react';

export type Mode = 'jobs' | 'training';

interface ModeContextType {
  mode: Mode;
  toggleMode: () => void;
  setMode: (mode: Mode) => void;
}

const ModeContext = createContext<ModeContextType | undefined>(undefined);

export const useMode = () => {
  const context = useContext(ModeContext);
  if (!context) {
    throw new Error('useMode must be used within a ModeProvider');
  }
  return context;
};

interface ModeProviderProps {
  children: React.ReactNode;
}

export const ModeProvider = ({ children }: ModeProviderProps) => {
  const [mode, setModeState] = useState<Mode>('jobs');

  const setMode = (newMode: Mode) => {
    setModeState(newMode);
    document.documentElement.setAttribute('data-mode', newMode);
  };

  const toggleMode = () => {
    const newMode = mode === 'jobs' ? 'training' : 'jobs';
    setMode(newMode);
  };

  useEffect(() => {
    // Initialize with jobs mode
    document.documentElement.setAttribute('data-mode', mode);
  }, []);

  return (
    <ModeContext.Provider value={{ mode, toggleMode, setMode }}>
      {children}
    </ModeContext.Provider>
  );
};