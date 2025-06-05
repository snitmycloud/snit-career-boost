
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const CardGrid = () => {
  const courses = [
    {
      title: "Microsoft Azure DevOps",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
      description: "Learn pipelines, Visual Studio, dashboards & CI/CD tools.",
      tag: "Beginner Friendly",
      tagColor: "bg-teal-100 text-teal-800"
    },
    {
      title: "AWS DevOps",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e",
      description: "Build infrastructure on cloud with Lambda, EC2, S3 & more.",
      tag: "Cloud Training",
      tagColor: "bg-blue-100 text-blue-800"
    },
    {
      title: "CCNA / Networking",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
      description: "Master networking with routing, switching & live labs.",
      tag: "Certification Path",
      tagColor: "bg-purple-100 text-purple-800"
    },
    {
      title: "Digital Marketing",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
      description: "Learn SEO, PPC, SMM, Email & Affiliate marketing tools.",
      tag: "Job-Oriented",
      tagColor: "bg-orange-100 text-orange-800"
    }
  ];

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="courses" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Popular Courses</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Master in-demand technologies with our industry-focused training programs
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {courses.map((course, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 overflow-hidden border-0 shadow-lg">
              <div className="relative overflow-hidden">
                <img 
                  src={course.image} 
                  alt={course.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <Badge className={course.tagColor}>
                    {course.tag}
                  </Badge>
                </div>
              </div>
              
              <CardHeader className="pb-2">
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-teal-600 transition-colors">
                  {course.title}
                </h3>
              </CardHeader>
              
              <CardContent className="pt-0">
                <p className="text-gray-600 mb-6 leading-relaxed">{course.description}</p>
                <Button 
                  onClick={scrollToContact}
                  className="w-full bg-teal-600 hover:bg-teal-700 text-white"
                >
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CardGrid;
