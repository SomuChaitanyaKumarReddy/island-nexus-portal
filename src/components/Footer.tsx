import React from 'react';
import { useMode } from './ModeProvider';
import { Button } from '@/components/ui/button';
import { Briefcase, GraduationCap, ArrowRight } from 'lucide-react';

const Footer = () => {
  const { mode } = useMode();

  return (
    <footer className="bg-surface border-t border-primary/10 py-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* Main CTA */}
        <div className="text-center mb-16 fade-in-up">
          <div className="flex justify-center mb-6">
            {mode === 'jobs' ? (
              <Briefcase className="w-12 h-12 text-primary mode-transition" />
            ) : (
              <GraduationCap className="w-12 h-12 text-primary mode-transition" />
            )}
          </div>
          
          <h3 className="text-3xl md:text-4xl font-bold mb-4 mode-transition">
            Ready to {mode === 'jobs' ? 'Start Your Career Journey' : 'Transform Your Skills'}?
          </h3>
          
          <p className="text-xl text-secondary mb-8 max-w-2xl mx-auto mode-transition">
            {mode === 'jobs' 
              ? 'Join thousands of professionals who found their dream jobs through our platform.'
              : 'Join our community of learners and take your career to the next level.'
            }
          </p>
          
          <Button 
            size="lg"
            className="bg-gradient-primary hover:shadow-glow text-lg px-8 py-4 rounded-full group mode-transition"
          >
            {mode === 'jobs' ? 'Upload Your Resume' : 'Start Free Trial'}
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>

        {/* Footer Links */}
        <div className="border-t border-primary/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              {mode === 'jobs' ? (
                <Briefcase className="w-6 h-6 text-primary mode-transition" />
              ) : (
                <GraduationCap className="w-6 h-6 text-primary mode-transition" />
              )}
              <span className="text-lg font-bold mode-transition">
                {mode === 'jobs' ? 'CareerHub' : 'SkillForge'}
              </span>
            </div>

            {/* Links */}
            <div className="flex items-center space-x-8">
              <a href="#about" className="text-secondary hover:text-primary transition-colors liquid-underline">
                About
              </a>
              <a href="#contact" className="text-secondary hover:text-primary transition-colors liquid-underline">
                Contact
              </a>
              <a href="#privacy" className="text-secondary hover:text-primary transition-colors liquid-underline">
                Privacy
              </a>
            </div>

            {/* Copyright */}
            <p className="text-secondary text-sm">
              © 2024 {mode === 'jobs' ? 'CareerHub' : 'SkillForge'}. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;