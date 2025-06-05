
import { Settings, FileText, Mic, Mail } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Features = () => {
  const features = [
    {
      title: "Real-Time Projects",
      icon: Settings,
      description: "Practice with real-world systems guided by industry pros.",
      color: "text-teal-600"
    },
    {
      title: "Certification Guidance",
      icon: FileText,
      description: "Prepare and crack Microsoft, AWS, Google certifications.",
      color: "text-orange-500"
    },
    {
      title: "Mock Interviews",
      icon: Mic,
      description: "Get interview-ready with HR & technical rounds.",
      color: "text-teal-600"
    },
    {
      title: "Job Alerts & Resume Help",
      icon: Mail,
      description: "Get job alerts + 1:1 resume review.",
      color: "text-orange-500"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose SNIT?</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We provide comprehensive training with real-world experience and guaranteed career support
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
                <CardContent className="p-8 text-center">
                  <div className={`w-16 h-16 mx-auto mb-6 rounded-full bg-gray-50 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className={`w-8 h-8 ${feature.color}`} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
