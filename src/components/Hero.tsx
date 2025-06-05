
import { Button } from "@/components/ui/button";
import { ArrowRight, Star, Users, Award } from "lucide-react";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative bg-gradient-to-br from-teal-50 to-orange-50 py-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Accelerate Your 
                <span className="text-teal-600"> IT Career</span> with 
                <span className="text-orange-500"> Real-Time Training</span>
              </h1>
              <p className="text-xl text-gray-700 leading-relaxed">
                100% Placement Assistance | 300+ Google 5-Star Reviews | Live Project Experience
              </p>
              <p className="text-lg text-gray-600">
                Boost Your Career by Learning Skills in High Demand – Trusted by 5,000+ learners!
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={scrollToContact}
                size="lg" 
                className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-4 text-lg"
              >
                Enroll Now
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button 
                onClick={scrollToContact}
                variant="outline" 
                size="lg" 
                className="border-orange-500 text-orange-500 hover:bg-orange-50 px-8 py-4 text-lg"
              >
                Free Demo
              </Button>
            </div>

            <div className="flex flex-wrap items-center gap-8 pt-8">
              <div className="flex items-center space-x-2">
                <div className="flex">
                  {[1,2,3,4,5].map((star) => (
                    <Star key={star} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <span className="text-gray-700 font-semibold">300+ Reviews</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="w-5 h-5 text-teal-600" />
                <span className="text-gray-700 font-semibold">5,000+ Students</span>
              </div>
              <div className="flex items-center space-x-2">
                <Award className="w-5 h-5 text-orange-500" />
                <span className="text-gray-700 font-semibold">100% Placement</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-white rounded-2xl shadow-2xl p-8 transform rotate-2 hover:rotate-0 transition-transform duration-300">
              <img 
                src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7" 
                alt="Coding workspace" 
                className="w-full h-80 object-cover rounded-xl"
              />
              <div className="absolute -top-4 -left-4 bg-teal-600 text-white px-4 py-2 rounded-lg font-semibold">
                Live Projects
              </div>
              <div className="absolute -bottom-4 -right-4 bg-orange-500 text-white px-4 py-2 rounded-lg font-semibold">
                Expert Mentors
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
