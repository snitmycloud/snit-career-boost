
import { Button } from "@/components/ui/button";
import { Phone, Mail } from "lucide-react";

const Header = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <img 
              src="/lovable-uploads/97808a46-fed2-4f13-9544-79805daeffcb.png" 
              alt="SNIT Solutions" 
              className="w-12 h-12"
            />
            <div>
              <h1 className="text-xl font-bold text-gray-900">SNIT Solutions</h1>
              <p className="text-sm text-gray-600">Training Institute</p>
            </div>
          </div>
          
          <nav className="hidden md:flex items-center space-x-6">
            <button 
              onClick={() => scrollToSection('home')}
              className="text-gray-700 hover:text-teal-600 transition-colors"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('courses')}
              className="text-gray-700 hover:text-teal-600 transition-colors"
            >
              Courses
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="text-gray-700 hover:text-teal-600 transition-colors"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-gray-700 hover:text-teal-600 transition-colors"
            >
              Contact
            </button>
          </nav>

          <div className="flex items-center space-x-4">
            <div className="hidden lg:flex items-center space-x-4 text-sm">
              <div className="flex items-center space-x-1 text-gray-600">
                <Phone className="w-4 h-4" />
                <span>+91 9876543210</span>
              </div>
              <div className="flex items-center space-x-1 text-gray-600">
                <Mail className="w-4 h-4" />
                <span>info@snitsolutions.com</span>
              </div>
            </div>
            <Button 
              onClick={() => scrollToSection('contact')}
              className="bg-teal-600 hover:bg-teal-700 text-white"
            >
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
