
import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CreditCard, FileText, Building2, PiggyBank, TrendingUp, Shield } from "lucide-react";

const Index = () => {
  const forms = [
    {
      id: 1,
      title: "Account Opening Application",
      description: "Open a new checking or savings account with our comprehensive application form",
      fields: 8,
      type: "Account Services",
      color: "from-blue-600 to-blue-800",
      icon: Building2,
    },
    {
      id: 2,
      title: "Loan Application",
      description: "Apply for personal, auto, or home loans with our detailed application process",
      fields: 12,
      type: "Lending",
      color: "from-green-600 to-green-800",
      icon: FileText,
    },
    {
      id: 3,
      title: "Credit Card Application",
      description: "Apply for our premium credit cards with competitive rates and rewards",
      fields: 9,
      type: "Credit Services",
      color: "from-purple-600 to-purple-800",
      icon: CreditCard,
    },
    {
      id: 4,
      title: "Investment Portfolio Setup",
      description: "Start your investment journey with our guided portfolio configuration",
      fields: 10,
      type: "Investment",
      color: "from-indigo-600 to-indigo-800",
      icon: TrendingUp,
    },
    {
      id: 5,
      title: "Insurance Claim Form",
      description: "Submit insurance claims quickly and efficiently through our digital platform",
      fields: 7,
      type: "Insurance",
      color: "from-red-600 to-red-800",
      icon: Shield,
    },
    {
      id: 6,
      title: "Wealth Management Consultation",
      description: "Schedule a consultation with our wealth management experts",
      fields: 6,
      type: "Advisory",
      color: "from-amber-600 to-amber-800",
      icon: PiggyBank,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100">
      {/* Header */}
      <div className="bg-white shadow-lg border-b border-slate-200">
        <div className="container mx-auto px-6 py-12">
          <div className="text-center">
            <div className="flex items-center justify-center mb-6">
              <Building2 className="w-12 h-12 text-blue-600 mr-4" />
              <h1 className="text-5xl font-bold text-slate-900">
                FinanceHub
              </h1>
            </div>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Streamline your financial services with our comprehensive digital platform. 
              Select from our range of professional forms designed for banking, lending, and investment services.
            </p>
          </div>
        </div>
      </div>

      {/* Form Grid */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {forms.map((form) => {
            const IconComponent = form.icon;
            return (
              <Link
                key={form.id}
                to={`/form/${form.id}`}
                className="group block transform transition-all duration-300 hover:scale-105"
              >
                <Card className="h-full bg-white shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-200 overflow-hidden">
                  {/* Professional Header */}
                  <div className={`h-3 bg-gradient-to-r ${form.color}`} />
                  
                  <CardHeader className="pb-4 bg-gradient-to-br from-white to-slate-50">
                    <div className="flex items-start justify-between mb-4">
                      <div className={`p-4 rounded-xl bg-gradient-to-r ${form.color} shadow-lg`}>
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                      <Badge variant="secondary" className="text-xs font-medium bg-slate-100 text-slate-700">
                        {form.fields} fields
                      </Badge>
                    </div>
                    <CardTitle className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors leading-tight">
                      {form.title}
                    </CardTitle>
                    <Badge variant="outline" className="w-fit border-slate-300 text-slate-600">
                      {form.type}
                    </Badge>
                  </CardHeader>
                  
                  <CardContent className="bg-white">
                    <CardDescription className="text-slate-600 leading-relaxed mb-6">
                      {form.description}
                    </CardDescription>
                    
                    <div className="flex items-center text-sm font-semibold text-blue-600 group-hover:text-blue-700 transition-colors">
                      Begin Application
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

      {/* Professional Footer */}
      <div className="bg-slate-900 text-white mt-20">
        <div className="container mx-auto px-6 py-12">
          <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
            <div>
              <h3 className="text-lg font-semibold mb-3">Security & Compliance</h3>
              <p className="text-slate-400 text-sm">FDIC Insured • SSL Encrypted • SOC 2 Compliant</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-3">Customer Support</h3>
              <p className="text-slate-400 text-sm">Available 24/7 • 1-800-FINANCE • support@financehub.com</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-3">Digital Platform</h3>
              <p className="text-slate-400 text-sm">Built with enterprise-grade security and reliability</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
