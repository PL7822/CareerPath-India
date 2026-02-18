import { Link } from "react-router-dom";
import { GraduationCap } from "lucide-react";

const Footer = () => (
  <footer className="border-t bg-muted/50">
    <div className="container mx-auto px-4 py-12">
      <div className="grid gap-8 md:grid-cols-4">
        <div>
          <Link to="/" className="flex items-center gap-2 text-xl font-bold text-blue-600">
            <img src="/logo.png" alt="CareerPath India" className="h-10 w-10" />
            CareerPath India
          </Link>
          <p className="mt-3 text-sm text-muted-foreground">
            Helping Indian students make informed career decisions with expert guidance, tools, and resources.
          </p>
        </div>

        <div>
          <h4 className="mb-3 font-display font-semibold text-foreground">Career Paths</h4>
          <div className="space-y-2 text-sm">
            <Link to="/after-10th" className="block text-muted-foreground hover:text-primary transition-colors">After 10th</Link>
            <Link to="/after-12th-science" className="block text-muted-foreground hover:text-primary transition-colors">After 12th Science</Link>
            <Link to="/after-12th-commerce" className="block text-muted-foreground hover:text-primary transition-colors">After 12th Commerce</Link>
            <Link to="/after-12th-arts" className="block text-muted-foreground hover:text-primary transition-colors">After 12th Arts</Link>
          </div>
        </div>

        <div>
          <h4 className="mb-3 font-display font-semibold text-foreground">Resources</h4>
          <div className="space-y-2 text-sm">
            <Link to="/it-career-roadmap" className="block text-muted-foreground hover:text-primary transition-colors">IT Career Roadmap</Link>
            <Link to="/government-jobs" className="block text-muted-foreground hover:text-primary transition-colors">Government Jobs</Link>
            <Link to="/tools" className="block text-muted-foreground hover:text-primary transition-colors">Tools</Link>
            <Link to="/blog" className="block text-muted-foreground hover:text-primary transition-colors">Blog</Link>
          </div>
        </div>

        <div>
          <h4 className="mb-3 font-display font-semibold text-foreground">Tools</h4>
          <div className="space-y-2 text-sm">
            <Link to="/tools/percentage-calculator" className="block text-muted-foreground hover:text-primary transition-colors">Percentage Calculator</Link>
            <Link to="/tools/age-calculator" className="block text-muted-foreground hover:text-primary transition-colors">Age Calculator</Link>
            <Link to="/tools/cgpa-to-percentage" className="block text-muted-foreground hover:text-primary transition-colors">CGPA to Percentage</Link>
            <Link to="/tools/salary-calculator" className="block text-muted-foreground hover:text-primary transition-colors">Salary Calculator</Link>
          </div>
        </div>
      </div>

      <div className="mt-10 border-t pt-6 text-center text-sm text-white/100-foreground">
        © {new Date().getFullYear()} CareerPath India. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
