
import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const FormPage = () => {
  const { id } = useParams();
  const { toast } = useToast();
  const [formData, setFormData] = useState<Record<string, any>>({});

  // Define form configurations
  const formConfigs = {
    "1": {
      title: "Contact Form",
      description: "Get in touch with us through this simple contact form",
      color: "from-blue-500 to-purple-600",
      fields: [
        { name: "name", label: "Full Name", type: "text", required: true },
        { name: "email", label: "Email Address", type: "email", required: true },
        { name: "subject", label: "Subject", type: "text", required: true },
        { name: "message", label: "Message", type: "textarea", required: true },
      ],
    },
    "2": {
      title: "User Registration",
      description: "Sign up for our service with this comprehensive registration form",
      color: "from-green-500 to-teal-600",
      fields: [
        { name: "firstName", label: "First Name", type: "text", required: true },
        { name: "lastName", label: "Last Name", type: "text", required: true },
        { name: "email", label: "Email Address", type: "email", required: true },
        { name: "password", label: "Password", type: "password", required: true },
        { name: "confirmPassword", label: "Confirm Password", type: "password", required: true },
        { name: "agreeTerms", label: "I agree to the terms and conditions", type: "checkbox", required: true },
      ],
    },
    "3": {
      title: "Feedback Survey",
      description: "Share your thoughts and help us improve our services",
      color: "from-orange-500 to-red-600",
      fields: [
        { name: "rating", label: "Overall Rating", type: "select", options: ["5 - Excellent", "4 - Good", "3 - Average", "2 - Poor", "1 - Very Poor"], required: true },
        { name: "experience", label: "How was your experience?", type: "textarea", required: true },
        { name: "recommend", label: "Would you recommend us?", type: "select", options: ["Yes", "No", "Maybe"], required: true },
        { name: "improvements", label: "What can we improve?", type: "textarea", required: false },
        { name: "contact", label: "Can we contact you for follow-up?", type: "checkbox", required: false },
      ],
    },
    "4": {
      title: "Event Registration",
      description: "Register for our upcoming events and workshops",
      color: "from-purple-500 to-pink-600",
      fields: [
        { name: "name", label: "Full Name", type: "text", required: true },
        { name: "email", label: "Email Address", type: "email", required: true },
        { name: "phone", label: "Phone Number", type: "tel", required: true },
        { name: "company", label: "Company/Organization", type: "text", required: false },
        { name: "eventType", label: "Event Type", type: "select", options: ["Workshop", "Conference", "Seminar", "Networking"], required: true },
        { name: "dietaryRestrictions", label: "Dietary Restrictions", type: "textarea", required: false },
        { name: "newsletter", label: "Subscribe to our newsletter", type: "checkbox", required: false },
      ],
    },
    "5": {
      title: "Job Application",
      description: "Apply for exciting career opportunities with our team",
      color: "from-indigo-500 to-blue-600",
      fields: [
        { name: "name", label: "Full Name", type: "text", required: true },
        { name: "email", label: "Email Address", type: "email", required: true },
        { name: "phone", label: "Phone Number", type: "tel", required: true },
        { name: "position", label: "Position Applied For", type: "text", required: true },
        { name: "experience", label: "Years of Experience", type: "select", options: ["0-1 years", "2-5 years", "6-10 years", "10+ years"], required: true },
        { name: "coverLetter", label: "Cover Letter", type: "textarea", required: true },
        { name: "availability", label: "When can you start?", type: "date", required: true },
        { name: "references", label: "Professional References", type: "textarea", required: false },
      ],
    },
    "6": {
      title: "Newsletter Signup",
      description: "Stay updated with our latest news and announcements",
      color: "from-cyan-500 to-blue-600",
      fields: [
        { name: "email", label: "Email Address", type: "email", required: true },
        { name: "name", label: "Name (Optional)", type: "text", required: false },
        { name: "interests", label: "Interests", type: "select", options: ["Technology", "Business", "Design", "Marketing", "All"], required: false },
      ],
    },
  };

  const currentForm = formConfigs[id as keyof typeof formConfigs];

  if (!currentForm) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center">
        <Card className="max-w-md w-full mx-4">
          <CardHeader>
            <CardTitle>Form Not Found</CardTitle>
            <CardDescription>The requested form could not be found.</CardDescription>
          </CardHeader>
          <CardContent>
            <Link to="/">
              <Button className="w-full">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Forms
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    );
  }

  const handleInputChange = (name: string, value: any) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    toast({
      title: "Form Submitted Successfully!",
      description: "Thank you for your submission. We'll get back to you soon.",
    });
  };

  const renderField = (field: any) => {
    switch (field.type) {
      case "textarea":
        return (
          <Textarea
            id={field.name}
            placeholder={`Enter ${field.label.toLowerCase()}`}
            value={formData[field.name] || ""}
            onChange={(e) => handleInputChange(field.name, e.target.value)}
            required={field.required}
            className="min-h-[100px]"
          />
        );
      case "select":
        return (
          <Select
            value={formData[field.name] || ""}
            onValueChange={(value) => handleInputChange(field.name, value)}
            required={field.required}
          >
            <SelectTrigger>
              <SelectValue placeholder={`Select ${field.label.toLowerCase()}`} />
            </SelectTrigger>
            <SelectContent>
              {field.options?.map((option: string) => (
                <SelectItem key={option} value={option}>
                  {option}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        );
      case "checkbox":
        return (
          <div className="flex items-center space-x-2">
            <Checkbox
              id={field.name}
              checked={formData[field.name] || false}
              onCheckedChange={(checked) => handleInputChange(field.name, checked)}
              required={field.required}
            />
            <Label htmlFor={field.name} className="text-sm font-normal">
              {field.label}
            </Label>
          </div>
        );
      default:
        return (
          <Input
            id={field.name}
            type={field.type}
            placeholder={`Enter ${field.label.toLowerCase()}`}
            value={formData[field.name] || ""}
            onChange={(e) => handleInputChange(field.name, e.target.value)}
            required={field.required}
          />
        );
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center text-gray-600 hover:text-gray-900 transition-colors">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Forms
            </Link>
            <Badge variant="secondary">Form #{id}</Badge>
          </div>
        </div>
      </div>

      {/* Form Content */}
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-2xl mx-auto">
          <Card className="bg-white shadow-lg border-0">
            {/* Form Header */}
            <div className={`h-2 bg-gradient-to-r ${currentForm.color}`} />
            
            <CardHeader className="text-center pb-8">
              <CardTitle className="text-3xl font-bold text-gray-900 mb-2">
                {currentForm.title}
              </CardTitle>
              <CardDescription className="text-lg text-gray-600">
                {currentForm.description}
              </CardDescription>
            </CardHeader>

            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                {currentForm.fields.map((field, index) => (
                  <div key={field.name} className="space-y-2">
                    {field.type !== "checkbox" && (
                      <Label htmlFor={field.name} className="text-sm font-medium">
                        {field.label}
                        {field.required && <span className="text-red-500 ml-1">*</span>}
                      </Label>
                    )}
                    {renderField(field)}
                  </div>
                ))}

                <div className="pt-6">
                  <Button 
                    type="submit" 
                    className={`w-full bg-gradient-to-r ${currentForm.color} hover:opacity-90 transition-opacity text-white py-3 text-lg font-medium`}
                  >
                    Submit Form
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default FormPage;
