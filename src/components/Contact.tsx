
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    course: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Thank you for your interest! We'll contact you soon.");
    setFormData({ name: '', email: '', phone: '', course: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Get Started Today</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Ready to transform your career? Contact us for a free consultation and demo session.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <Card className="border-0 shadow-xl">
            <CardHeader>
              <CardTitle className="text-2xl text-gray-900">Send us a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <Input
                    placeholder="Your Name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="border-gray-300"
                  />
                  <Input
                    type="email"
                    placeholder="Email Address"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="border-gray-300"
                  />
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <Input
                    type="tel"
                    placeholder="Phone Number"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="border-gray-300"
                  />
                  <Input
                    placeholder="Interested Course"
                    name="course"
                    value={formData.course}
                    onChange={handleChange}
                    className="border-gray-300"
                  />
                </div>
                <Textarea
                  placeholder="Your Message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="border-gray-300"
                />
                <Button type="submit" size="lg" className="w-full bg-teal-600 hover:bg-teal-700 text-white">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          <div className="space-y-8">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center">
                    <Phone className="w-6 h-6 text-teal-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">Call Us</h3>
                    <p className="text-gray-600">+91 9876543210</p>
                    <p className="text-gray-600">+91 8765432109</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                    <Mail className="w-6 h-6 text-orange-500" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">Email Us</h3>
                    <p className="text-gray-600">info@snitsolutions.com</p>
                    <p className="text-gray-600">careers@snitsolutions.com</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-teal-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">Visit Us</h3>
                    <p className="text-gray-600">SNIT Solutions Training Center</p>
                    <p className="text-gray-600">Hyderabad, Telangana, India</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                    <Clock className="w-6 h-6 text-orange-500" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">Office Hours</h3>
                    <p className="text-gray-600">Mon - Fri: 9:00 AM - 7:00 PM</p>
                    <p className="text-gray-600">Sat - Sun: 10:00 AM - 5:00 PM</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
