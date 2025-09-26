import React from 'react';
import { useMode } from './ModeProvider';
import { Button } from '@/components/ui/button';
import { ArrowRight, Search, PlayCircle } from 'lucide-react';

const Hero = () => {
  const { mode, setMode } = useMode();

  const jobsContent = {
    headline: "Find Your Dream Job.",
    subline: "Connect with top companies and unlock career opportunities that match your skills and ambitions.",
    primaryCTA: "Explore Jobs",
    secondaryCTA: "Upload Resume",
    stats: [
      { number: "50K+", label: "Active Jobs" },
      { number: "2K+", label: "Companies" },
      { number: "95%", label: "Success Rate" }
    ]
  };

  const trainingContent = {
    headline: "Upgrade Your Skills.",
    subline: "Master in-demand skills with expert-led courses and hands-on projects designed for career growth.",
    primaryCTA: "Start Learning",
    secondaryCTA: "Watch Demo",
    stats: [
      { number: "200+", label: "Courses" },
      { number: "50+", label: "Expert Mentors" },
      { number: "89%", label: "Career Growth" }
    ]
  };

  const content = mode === 'jobs' ? jobsContent : trainingContent;

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-accent/30 to-primary-light/20 mode-transition" />
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-primary rounded-full opacity-10 float-animation" />
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-gradient-primary rounded-full opacity-5 float-animation" style={{ animationDelay: '-1s' }} />
      <div className="absolute top-1/3 right-1/4 w-16 h-16 bg-primary/20 rounded-full opacity-20 float-animation" style={{ animationDelay: '-2s' }} />

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        {/* Main Content */}
        <div className="space-y-8 fade-in-up">
          <h1 className="text-6xl md:text-8xl font-bold bg-gradient-primary bg-clip-text text-transparent mode-transition leading-tight">
            {content.headline}
          </h1>
          
          <p className="text-xl md:text-2xl text-secondary max-w-3xl mx-auto mode-transition leading-relaxed">
            {content.subline}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
            <Button 
              size="lg"
              className="bg-gradient-primary hover:shadow-glow text-lg px-8 py-4 rounded-full group mode-transition"
            >
              {mode === 'jobs' ? <Search className="w-5 h-5 mr-2" /> : <PlayCircle className="w-5 h-5 mr-2" />}
              {content.primaryCTA}
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="text-lg px-8 py-4 rounded-full border-2 hover:bg-primary/5 mode-transition"
            >
              {content.secondaryCTA}
            </Button>
          </div>

          {/* Toggle Hint */}
          <div className="pt-12">
            <p className="text-sm text-secondary/60 mb-4">
              Looking for {mode === 'jobs' ? 'skill development' : 'career opportunities'}?
            </p>
            <button
              onClick={() => setMode(mode === 'jobs' ? 'training' : 'jobs')}
              className="text-primary hover:text-primary-light font-medium liquid-underline mode-transition"
            >
              Switch to {mode === 'jobs' ? 'Training' : 'Jobs'} →
            </button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-8 mt-20 pt-20 border-t border-primary/10">
          {content.stats.map((stat, index) => (
            <div 
              key={stat.label} 
              className="space-y-2 fade-in-up mode-transition"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-3xl md:text-4xl font-bold text-primary">
                {stat.number}
              </div>
              <div className="text-secondary text-sm md:text-base">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;