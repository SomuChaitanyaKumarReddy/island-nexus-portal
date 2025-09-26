import React from 'react';
import { useMode } from './ModeProvider';
import { 
  Building2, MapPin, DollarSign, Clock, 
  BookOpen, Award, Users, TrendingUp,
  ArrowRight
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const FeatureCards = () => {
  const { mode } = useMode();

  const jobsFeatures = [
    {
      icon: Building2,
      title: "Top Companies",
      description: "Join industry leaders like Google, Microsoft, and innovative startups",
      badge: "500+ Partners",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: MapPin,
      title: "Remote & Onsite",
      description: "Flexible work arrangements that fit your lifestyle and preferences",
      badge: "Global Opportunities",
      color: "from-green-500 to-green-600"
    },
    {
      icon: DollarSign,
      title: "Competitive Pay",
      description: "Access salary insights and negotiate with confidence",
      badge: "$120K+ Average",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: Clock,
      title: "Quick Hiring",
      description: "Fast-track applications with our AI-powered matching system",
      badge: "2-Week Average",
      color: "from-orange-500 to-orange-600"
    }
  ];

  const trainingFeatures = [
    {
      icon: BookOpen,
      title: "Expert Courses",
      description: "Learn from industry professionals with real-world experience",
      badge: "200+ Courses",
      color: "from-indigo-500 to-indigo-600"
    },
    {
      icon: Award,
      title: "Certifications",
      description: "Earn recognized certificates to boost your career prospects",
      badge: "Industry Recognized",
      color: "from-yellow-500 to-yellow-600"
    },
    {
      icon: Users,
      title: "Community",
      description: "Connect with peers and mentors in our supportive learning environment",
      badge: "10K+ Learners",
      color: "from-pink-500 to-pink-600"
    },
    {
      icon: TrendingUp,
      title: "Career Growth",
      description: "Track your progress and measure skill development over time",
      badge: "89% Success Rate",
      color: "from-teal-500 to-teal-600"
    }
  ];

  const features = mode === 'jobs' ? jobsFeatures : trainingFeatures;

  return (
    <section className="py-20 bg-gradient-to-b from-background to-accent/20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 mode-transition">
            Why Choose {mode === 'jobs' ? 'CareerHub' : 'SkillForge'}?
          </h2>
          <p className="text-xl text-secondary max-w-3xl mx-auto mode-transition">
            {mode === 'jobs' 
              ? 'Discover opportunities that align with your career goals and connect with employers who value your skills.'
              : 'Transform your career with cutting-edge skills and personalized learning paths designed for success.'
            }
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="group relative bg-surface/80 backdrop-blur-sm rounded-2xl p-8 border border-primary/10 hover:border-primary/20 hover:shadow-glow transition-all duration-500 hover:-translate-y-2 mode-transition"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Icon */}
                <div className="mb-6">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${feature.color} p-4 shadow-medium group-hover:shadow-glow transition-all duration-300`}>
                    <Icon className="w-full h-full text-white" />
                  </div>
                </div>

                {/* Badge */}
                <div className="absolute top-4 right-4">
                  <span className="text-xs font-medium bg-primary/10 text-primary px-3 py-1 rounded-full">
                    {feature.badge}
                  </span>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors mode-transition">
                  {feature.title}
                </h3>
                <p className="text-secondary leading-relaxed mb-6 mode-transition">
                  {feature.description}
                </p>

                {/* Learn More */}
                <div className="flex items-center text-primary font-medium opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <span className="text-sm">Learn More</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-20 fade-in-up">
          <Button 
            size="lg"
            className="bg-gradient-primary hover:shadow-glow text-lg px-8 py-4 rounded-full mode-transition"
          >
            {mode === 'jobs' ? 'Browse All Jobs' : 'Explore Courses'}
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeatureCards;