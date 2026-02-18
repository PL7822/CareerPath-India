import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Menu, X, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "Careers", to: "/after-10th" },
  {
    label: "Tools",
    dropdown: [
      { label: "Percentage Calculator", to: "/tools/percentage-calculator" },
      { label: "Age Calculator", to: "/tools/age-calculator" },
      { label: "CGPA to Percentage", to: "/tools/cgpa-to-percentage" },
      { label: "Salary Calculator", to: "/tools/salary-calculator" },
    ],
  },
  { label: "Blog", to: "/blog" },
];


interface UserType {
  name: string;
  email: string;
}

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [user, setUser] = useState<UserType | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser));
      } catch {
        setUser(null);
      }
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
    navigate("/");
    window.location.reload();
  };

  return (
    <nav className="sticky top-0 z-50 border-b bg-white shadow-sm">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 text-xl font-bold text-blue-600">
          <img src="/logo.png" alt="CareerPath India" className="h-10 w-10" />
          CareerPath India
        </Link>


        {/* Desktop Nav */}
        <div className="hidden items-center gap-6 md:flex">
          {navLinks.map((link, index) =>
            link.dropdown ? (
              <div key={index} className="relative group">
                <span className="text-sm font-medium text-gray-600 hover:text-blue-600 cursor-pointer">
                  {link.label}
                </span>

                <div className="absolute left-0 mt-2 w-56 bg-white border rounded shadow-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                  {link.dropdown.map((item) => (
                    <Link
                      key={item.to}
                      to={item.to}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link
                key={link.to}
                to={link.to}
                className="text-sm font-medium text-gray-600 hover:text-blue-600"
              >
                {link.label}
              </Link>
            )
          )}


          {!user ? (
            <>
              <Link to="/login">
                <Button variant="ghost" size="sm">
                  Login
                </Button>
              </Link>
              <Link to="/signup">
                <Button size="sm">Signup</Button>
              </Link>
            </>
          ) : (
            <Link
              to="/profile"
              className="text-sm font-medium text-blue-600 hover:underline"
            >
              My Profile
            </Link>
          )}
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <Button variant="ghost" size="icon" onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <X /> : <Menu />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="border-t bg-white p-4 md:hidden space-y-3">

          {navLinks.map((link, index) =>
            link.dropdown ? (
              <div key={index}>
                <p className="text-sm font-medium">{link.label}</p>
                {link.dropdown.map((item) => (
                  <Link
                    key={item.to}
                    to={item.to}
                    onClick={() => setMobileOpen(false)}
                    className="block pl-4 py-1 text-sm text-gray-600"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            ) : (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setMobileOpen(false)}
                className="block text-sm font-medium text-gray-700"
              >
                {link.label}
              </Link>
            )
          )}


          {!user ? (
            <>
              <Link
                to="/login"
                onClick={() => setMobileOpen(false)}
                className="block text-sm font-medium"
              >
                Login
              </Link>

              <Link
                to="/signup"
                onClick={() => setMobileOpen(false)}
                className="block text-sm font-medium"
              >
                Signup
              </Link>
            </>
          ) : (
            <>
              <Link
                to="/profile"
                onClick={() => setMobileOpen(false)}
                className="block text-sm font-medium text-blue-600"
              >
                My Profile
              </Link>


              <button
                onClick={() => {
                  handleLogout();
                  setMobileOpen(false);
                }}
                className="block text-sm font-medium text-red-500"
              >
                Logout
              </button>
            </>
          )}
        </div>
      )}
      {/* <br />  */}
      {/* <br /> */}
    </nav>
  );
};

export default Navbar;
