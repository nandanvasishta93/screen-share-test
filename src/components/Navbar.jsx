import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`
        fixed top-0 w-full z-50 transition-all duration-300
        ${
          scrolled
            ? "bg-black/60 backdrop-blur-xl shadow-lg"
            : "bg-black/30 backdrop-blur-md"
        }
        border-b border-white/10
      `}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Logo */}
        <div className="text-lg font-semibold tracking-wide">
          ScreenShare
        </div>

        {/* Navigation Links */}
        <div className="flex gap-8 text-sm">
          <Link to="/" className="nav-link">
            Home
          </Link>
          <Link to="/screen-test" className="nav-link">
            Screen Test
          </Link>
        </div>
      </div>
    </nav>
  );
}
