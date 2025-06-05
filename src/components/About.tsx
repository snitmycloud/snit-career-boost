
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Users, Target, Award } from "lucide-react";

const About = () => {
  const stats = [
    { icon: Users, value: "5,000+", label: "Students Trained" },
    { icon: Award, value: "100%", label: "Placement Rate" },
    { icon: Target, value: "300+", label: "5-Star Reviews" },
    { icon: CheckCircle, value: "15+", label: "Industry Partners" }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                What Makes SNIT the Top Choice?
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                SNIT Solutions provides hands-on training in Microsoft Azure, AWS, Networking, 
                Digital Marketing, and Python Full Stack. Our expert mentors guide every student 
                through real projects and interview preparation.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                With over 5,000 successful graduates and partnerships with leading tech companies, 
                we've established ourselves as the premier training institute for IT professionals 
                looking to advance their careers.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <div key={index} className="text-center">
                    <div className="w-12 h-12 mx-auto mb-3 bg-teal-100 rounded-full flex items-center justify-center">
                      <IconComponent className="w-6 h-6 text-teal-600" />
                    </div>
                    <div className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</div>
                    <div className="text-gray-600">{stat.label}</div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="relative">
            <Card className="transform rotate-2 hover:rotate-0 transition-transform duration-300 border-0 shadow-xl">
              <CardContent className="p-0">
                <img 
                  src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e" 
                  alt="SNIT Solutions training environment" 
                  className="w-full h-80 object-cover rounded-lg"
                />
              </CardContent>
            </Card>
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-lg shadow-xl">
              <div className="flex items-center space-x-3">
                <img 
                  src="/lovable-uploads/97808a46-fed2-4f13-9544-79805daeffcb.png" 
                  alt="SNIT Logo" 
                  className="w-12 h-12"
                />
                <div>
                  <div className="font-bold text-gray-900">SNIT Solutions</div>
                  <div className="text-teal-600 font-semibold">Excellence in Training</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
