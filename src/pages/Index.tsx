
import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FileText, Grid3x3, FormInput } from "lucide-react";

const Index = () => {
  const forms = [
    {
      id: 1,
      title: "Contact Form",
      description: "Get in touch with us through this simple contact form",
      fields: 4,
      type: "Contact",
      color: "from-blue-500 to-purple-600",
      icon: FileText,
    },
    {
      id: 2,
      title: "User Registration",
      description: "Sign up for our service with this comprehensive registration form",
      fields: 6,
      type: "Registration",
      color: "from-green-500 to-teal-600",
      icon: FormInput,
    },
    {
      id: 3,
      title: "Feedback Survey",
      description: "Share your thoughts and help us improve our services",
      fields: 5,
      type: "Survey",
      color: "from-orange-500 to-red-600",
      icon: Grid3x3,
    },
    {
      id: 4,
      title: "Event Registration",
      description: "Register for our upcoming events and workshops",
      fields: 7,
      type: "Event",
      color: "from-purple-500 to-pink-600",
      icon: FileText,
    },
    {
      id: 5,
      title: "Job Application",
      description: "Apply for exciting career opportunities with our team",
      fields: 8,
      type: "Application",
      color: "from-indigo-500 to-blue-600",
      icon: FormInput,
    },
    {
      id: 6,
      title: "Newsletter Signup",
      description: "Stay updated with our latest news and announcements",
      fields: 3,
      type: "Newsletter",
      color: "from-cyan-500 to-blue-600",
      icon: Grid3x3,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-6 py-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Form Builder
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Select a form below to get started. Each form is designed for specific use cases
              and provides an intuitive experience for your users.
            </p>
          </div>
        </div>
      </div>

      {/* Form Grid */}
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {forms.map((form) => {
            const IconComponent = form.icon;
            return (
              <Link
                key={form.id}
                to={`/form/${form.id}`}
                className="group block transform transition-all duration-300 hover:scale-105"
              >
                <Card className="h-full bg-white shadow-md hover:shadow-xl transition-all duration-300 border-0 overflow-hidden">
                  {/* Gradient Header */}
                  <div className={`h-2 bg-gradient-to-r ${form.color}`} />
                  
                  <CardHeader className="pb-4">
                    <div className="flex items-start justify-between mb-3">
                      <div className={`p-3 rounded-lg bg-gradient-to-r ${form.color} bg-opacity-10`}>
                        <IconComponent className="w-6 h-6 text-gray-700" />
                      </div>
                      <Badge variant="secondary" className="text-xs">
                        {form.fields} fields
                      </Badge>
                    </div>
                    <CardTitle className="text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                      {form.title}
                    </CardTitle>
                    <Badge variant="outline" className="w-fit">
                      {form.type}
                    </Badge>
                  </CardHeader>
                  
                  <CardContent>
                    <CardDescription className="text-gray-600 leading-relaxed">
                      {form.description}
                    </CardDescription>
                    
                    <div className="mt-6 flex items-center text-sm text-blue-600 font-medium group-hover:text-blue-700 transition-colors">
                      Open Form
                      <svg 
                        className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </div>
      </div>

      {/* Footer */}
      <div className="bg-white border-t mt-16">
        <div className="container mx-auto px-6 py-8">
          <div className="text-center text-gray-600">
            <p>Built with React, TypeScript, and Tailwind CSS</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
