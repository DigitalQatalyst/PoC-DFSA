
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
import { ArrowLeft, Shield, Building2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const FormPage = () => {
  const { id } = useParams();
  const { toast } = useToast();
  const [formData, setFormData] = useState<Record<string, any>>({});

  // Define financial service form configurations
  const formConfigs = {
    "1": {
      title: "Account Opening Application",
      description: "Complete this form to open a new checking or savings account",
      color: "from-blue-600 to-blue-800",
      fields: [
        { name: "accountType", label: "Account Type", type: "select", options: ["Checking Account", "Savings Account", "Money Market Account", "Certificate of Deposit"], required: true },
        { name: "firstName", label: "First Name", type: "text", required: true },
        { name: "lastName", label: "Last Name", type: "text", required: true },
        { name: "ssn", label: "Social Security Number", type: "text", required: true },
        { name: "email", label: "Email Address", type: "email", required: true },
        { name: "phone", label: "Phone Number", type: "tel", required: true },
        { name: "address", label: "Home Address", type: "textarea", required: true },
        { name: "initialDeposit", label: "Initial Deposit Amount", type: "number", required: true },
      ],
    },
    "2": {
      title: "Loan Application",
      description: "Apply for personal, auto, or home loans with competitive rates",
      color: "from-green-600 to-green-800",
      fields: [
        { name: "loanType", label: "Loan Type", type: "select", options: ["Personal Loan", "Auto Loan", "Home Mortgage", "Home Equity Loan"], required: true },
        { name: "loanAmount", label: "Requested Loan Amount", type: "number", required: true },
        { name: "loanPurpose", label: "Purpose of Loan", type: "textarea", required: true },
        { name: "firstName", label: "First Name", type: "text", required: true },
        { name: "lastName", label: "Last Name", type: "text", required: true },
        { name: "ssn", label: "Social Security Number", type: "text", required: true },
        { name: "annualIncome", label: "Annual Income", type: "number", required: true },
        { name: "employment", label: "Employment Status", type: "select", options: ["Full-time Employee", "Part-time Employee", "Self-employed", "Retired", "Unemployed"], required: true },
        { name: "employer", label: "Employer Name", type: "text", required: false },
        { name: "creditScore", label: "Estimated Credit Score", type: "select", options: ["Excellent (750+)", "Good (700-749)", "Fair (650-699)", "Poor (600-649)", "Very Poor (Below 600)"], required: false },
        { name: "monthlyDebts", label: "Monthly Debt Payments", type: "number", required: true },
        { name: "collateral", label: "Collateral Information", type: "textarea", required: false },
      ],
    },
    "3": {
      title: "Credit Card Application",
      description: "Apply for our premium credit cards with exclusive benefits",
      color: "from-purple-600 to-purple-800",
      fields: [
        { name: "cardType", label: "Credit Card Type", type: "select", options: ["Platinum Rewards", "Business Elite", "Travel Premium", "Cash Back Classic"], required: true },
        { name: "firstName", label: "First Name", type: "text", required: true },
        { name: "lastName", label: "Last Name", type: "text", required: true },
        { name: "ssn", label: "Social Security Number", type: "text", required: true },
        { name: "dateOfBirth", label: "Date of Birth", type: "date", required: true },
        { name: "annualIncome", label: "Annual Income", type: "number", required: true },
        { name: "housingStatus", label: "Housing Status", type: "select", options: ["Own", "Rent", "Other"], required: true },
        { name: "monthlyRent", label: "Monthly Housing Payment", type: "number", required: true },
        { name: "authorizedUser", label: "Add Authorized User", type: "checkbox", required: false },
      ],
    },
    "4": {
      title: "Investment Portfolio Setup",
      description: "Configure your investment portfolio with our expert guidance",
      color: "from-indigo-600 to-indigo-800",
      fields: [
        { name: "portfolioType", label: "Portfolio Type", type: "select", options: ["Conservative", "Moderate", "Aggressive", "Custom"], required: true },
        { name: "investmentGoal", label: "Investment Goal", type: "select", options: ["Retirement", "Education", "Home Purchase", "Wealth Building", "Other"], required: true },
        { name: "timeHorizon", label: "Investment Time Horizon", type: "select", options: ["Less than 5 years", "5-10 years", "10-20 years", "20+ years"], required: true },
        { name: "initialInvestment", label: "Initial Investment Amount", type: "number", required: true },
        { name: "monthlyContribution", label: "Monthly Contribution", type: "number", required: false },
        { name: "riskTolerance", label: "Risk Tolerance", type: "select", options: ["Very Conservative", "Conservative", "Moderate", "Aggressive", "Very Aggressive"], required: true },
        { name: "previousExperience", label: "Investment Experience", type: "select", options: ["Beginner", "Some Experience", "Experienced", "Expert"], required: true },
        { name: "employerRetirement", label: "Employer Retirement Plan", type: "checkbox", required: false },
        { name: "liquidityNeeds", label: "Liquidity Needs", type: "textarea", required: false },
        { name: "specialInstructions", label: "Special Instructions", type: "textarea", required: false },
      ],
    },
    "5": {
      title: "Insurance Claim Form",
      description: "Submit your insurance claim with detailed information",
      color: "from-red-600 to-red-800",
      fields: [
        { name: "claimType", label: "Claim Type", type: "select", options: ["Auto Insurance", "Home Insurance", "Life Insurance", "Health Insurance"], required: true },
        { name: "policyNumber", label: "Policy Number", type: "text", required: true },
        { name: "dateOfIncident", label: "Date of Incident", type: "date", required: true },
        { name: "claimAmount", label: "Estimated Claim Amount", type: "number", required: true },
        { name: "incidentDescription", label: "Incident Description", type: "textarea", required: true },
        { name: "policeReport", label: "Police Report Filed", type: "checkbox", required: false },
        { name: "witnesses", label: "Witness Information", type: "textarea", required: false },
      ],
    },
    "6": {
      title: "Wealth Management Consultation",
      description: "Schedule a consultation with our wealth management experts",
      color: "from-amber-600 to-amber-800",
      fields: [
        { name: "consultationType", label: "Consultation Type", type: "select", options: ["Estate Planning", "Tax Strategy", "Retirement Planning", "Investment Review", "Comprehensive Planning"], required: true },
        { name: "netWorth", label: "Estimated Net Worth", type: "select", options: ["Under $100K", "$100K - $500K", "$500K - $1M", "$1M - $5M", "Over $5M"], required: true },
        { name: "firstName", label: "First Name", type: "text", required: true },
        { name: "lastName", label: "Last Name", type: "text", required: true },
        { name: "email", label: "Email Address", type: "email", required: true },
        { name: "preferredContact", label: "Preferred Contact Method", type: "select", options: ["Phone", "Email", "Video Call", "In-Person"], required: true },
      ],
    },
  };

  const currentForm = formConfigs[id as keyof typeof formConfigs];

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

  const handleInputChange = (name: string, value: any) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Financial form submitted:", formData);
    toast({
      title: "Application Submitted Successfully",
      description: "Your application has been received and is being processed. You will be contacted within 1-2 business days.",
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
            className="min-h-[100px] border-slate-300 focus:border-blue-500"
          />
        );
      case "select":
        return (
          <Select
            value={formData[field.name] || ""}
            onValueChange={(value) => handleInputChange(field.name, value)}
            required={field.required}
          >
            <SelectTrigger className="border-slate-300 focus:border-blue-500">
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
            <Label htmlFor={field.name} className="text-sm font-normal text-slate-700">
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
            className="border-slate-300 focus:border-blue-500"
          />
        );
    }
  };

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
              <form onSubmit={handleSubmit} className="space-y-8">
                {currentForm.fields.map((field, index) => (
                  <div key={field.name} className="space-y-3">
                    {field.type !== "checkbox" && (
                      <Label htmlFor={field.name} className="text-sm font-semibold text-slate-700">
                        {field.label}
                        {field.required && <span className="text-red-500 ml-1">*</span>}
                      </Label>
                    )}
                    {renderField(field)}
                  </div>
                ))}

                <div className="pt-8 border-t border-slate-200">
                  <Button 
                    type="submit" 
                    className={`w-full bg-gradient-to-r ${currentForm.color} hover:opacity-90 transition-opacity text-white py-4 text-lg font-semibold shadow-lg`}
                  >
                    Submit Application
                  </Button>
                  <p className="text-xs text-slate-500 text-center mt-4">
                    By submitting this form, you agree to our terms of service and privacy policy.
                  </p>
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
