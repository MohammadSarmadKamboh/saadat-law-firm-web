import logo from "@/assets/react.svg";
import { NavLink } from "react-router-dom"; 
import { paths } from "@/routes/paths";

const navLinks = [
  { label: "Home", to: paths.root },
  { label: "About", to: paths.about },
  { label: "Services", to: paths.services },
  { label: "Lawyers", to: paths.lawyers },
  { label: "Contact", to: paths.contact },
];

const Navbar: React.FC = () => {
  return (
    <nav className="fixed w-full hover:shadow-xl p-4 border bg-white">
      <div className="container mx-auto flex justify-between items-center">
        <NavLink to={paths.root}>
          <img
            src={logo}
            alt="Saadat Law Firm Logo"
            className="size-full hover:scale-110 transition duration-300 will-change-transform"
          />
        </NavLink>
        <ul className="flex space-x-6">
          {navLinks.map(({ label, to }) => (
            <li key={to}>
              <NavLink
                to={to}
                className={({ isActive }) =>
                  `transition underline-offset-8 ${
                    isActive
                      ? "text-[#00d8ff] underline"
                      : "hover:text-[#00d8ff] hover:underline"
                  }`
                }
                aria-label={`Navigate to ${label}`}>
                {label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
