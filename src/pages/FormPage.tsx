
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Shield, Building2 } from "lucide-react";
import { Form } from "@formio/react";
const FormPage = () => {
  const { id } = useParams();

  // Define financial service form configurations
  const formConfigs = {
    "1": {
      title: "Account Opening Application",
      description: "Complete this form to open a new checking or savings account",
      color: "from-blue-600 to-blue-800",
      url: 'https://relwwefotbqyfmh.form.io/testing'
    },
    "2": {
      title: "Loan Application",
      description: "Apply for personal, auto, or home loans with competitive rates",
      color: "from-green-600 to-green-800",

    },
    "3": {
      title: "Credit Card Application",
      description: "Apply for our premium credit cards with exclusive benefits",
      color: "from-purple-600 to-purple-800",

    },
    "4": {
      title: "Investment Portfolio Setup",
      description: "Configure your investment portfolio with our expert guidance",
      color: "from-indigo-600 to-indigo-800",

    },
    "5": {
      title: "Insurance Claim Form",
      description: "Submit your insurance claim with detailed information",
      color: "from-red-600 to-red-800",

    },
    "6": {
      title: "Wealth Management Consultation",
      description: "Schedule a consultation with our wealth management experts",
      color: "from-amber-600 to-amber-800",

    },
  };

  const currentForm = formConfigs[id];

  if (!currentForm) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center">
        <Card className="max-w-md w-full mx-4 shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Building2 className="mr-2 h-5 w-5" />
              Form Not Found
            </CardTitle>
            <CardDescription>The requested financial form could not be found.</CardDescription>
          </CardHeader>
          <CardContent>
            <Link to="/">
              <Button className="w-full">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Dashboard
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100">
      {/* Professional Header */}
      <div className="bg-white shadow-lg border-b border-slate-200">
        <div className="container mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center text-slate-600 hover:text-slate-900 transition-colors">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Dashboard
            </Link>
            <div className="flex items-center space-x-4">
              <Badge variant="secondary" className="bg-slate-100 text-slate-700">Form #{id}</Badge>
              <div className="flex items-center text-sm text-slate-600">
                <Shield className="mr-1 h-4 w-4" />
                Secure & Encrypted
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Form Content */}
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-3xl mx-auto">
          <Card className="bg-white shadow-xl border border-slate-200">
            {/* Professional Form Header */}
            <div className={`h-4 bg-gradient-to-r ${currentForm.color}`} />

            <CardHeader className="text-center pb-8 bg-gradient-to-br from-white to-slate-50">
              <div className="flex items-center justify-center mb-4">
                <Building2 className="w-8 h-8 text-slate-700 mr-3" />
              </div>
              <CardTitle className="text-3xl font-bold text-slate-900 mb-3">
                {currentForm.title}
              </CardTitle>
              <CardDescription className="text-lg text-slate-600 max-w-2xl mx-auto">
                {currentForm.description}
              </CardDescription>
              <div className="mt-4 text-sm text-slate-500 flex items-center justify-center">
                <Shield className="w-4 h-4 mr-1" />
                All information is encrypted and securely transmitted
              </div>
            </CardHeader>

            <CardContent className="p-8">
              <Form src={currentForm.url} />
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default FormPage;
