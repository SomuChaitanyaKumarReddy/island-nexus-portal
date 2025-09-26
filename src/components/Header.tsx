import React, { useState } from 'react';
import { Briefcase, GraduationCap, Users, Building2, BookOpen, UserCheck } from 'lucide-react';
import { useMode } from './ModeProvider';
import { DynamicIsland } from './DynamicIsland';
import { Button } from '@/components/ui/button';

const Header = () => {
  const { mode } = useMode();
  const [isVisible, setIsVisible] = useState(false);

  React.useEffect(() => {
    // Trigger entrance animation
    setIsVisible(true);
  }, []);

  const jobsNavItems = [
    { label: 'Jobs', icon: Briefcase, href: '#jobs' },
    { label: 'Companies', icon: Building2, href: '#companies' },
    { label: 'Employers', icon: Users, href: '#employers' },
  ];

  const trainingNavItems = [
    { label: 'Courses', icon: BookOpen, href: '#courses' },
    { label: 'Mentors', icon: UserCheck, href: '#mentors' },
    { label: 'Workshops', icon: GraduationCap, href: '#workshops' },
  ];

  const navItems = mode === 'jobs' ? jobsNavItems : trainingNavItems;

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
    }`}>
      <div className="glass-effect border-b border-white/10 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center space-x-4">
              <div className={`mode-transition ${
                mode === 'jobs' 
                  ? 'spring-bounce text-primary' 
                  : 'float-animation text-primary'
              }`}>
                <div className="flex items-center space-x-2">
                  {mode === 'jobs' ? (
                    <Briefcase className="w-8 h-8" />
                  ) : (
                    <GraduationCap className="w-8 h-8" />
                  )}
                  <span className="text-xl font-bold">
                    {mode === 'jobs' ? 'CareerHub' : 'SkillForge'}
                  </span>
                </div>
              </div>

              {/* Dynamic Island */}
              <DynamicIsland />
            </div>

            {/* Navigation Pills */}
            <nav className="hidden md:flex items-center space-x-1 bg-surface/80 backdrop-blur-md rounded-full px-2 py-1 border border-white/10">
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    className="flex items-center space-x-2 px-4 py-2 rounded-full text-sm font-medium mode-transition liquid-underline hover:bg-primary/5 hover:text-primary"
                  >
                    <Icon className="w-4 h-4" />
                    <span>{item.label}</span>
                  </a>
                );
              })}
            </nav>

            {/* CTA Button */}
            <Button
              variant="default"
              className="mode-transition bg-gradient-primary hover:shadow-glow font-medium px-6 py-2 rounded-full"
            >
              {mode === 'jobs' ? 'Find Jobs' : 'Start Learning'}
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;