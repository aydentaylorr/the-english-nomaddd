import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center bg-nomad-beige p-6">
      <div className="text-center">
        <h1 className="text-7xl font-display font-bold mb-2 text-nomad-navy">404</h1>
        <div className="h-2 w-16 bg-nomad-teal mx-auto mb-6"></div>
        <p className="text-2xl font-medium text-gray-800 mb-3">Page not found</p>
        <p className="text-gray-600 mb-8 max-w-md mx-auto">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        <Link to="/">
          <Button className="bg-nomad-teal hover:bg-nomad-teal/90 flex items-center gap-2">
            <Home className="h-4 w-4" />
            Return to Home
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;