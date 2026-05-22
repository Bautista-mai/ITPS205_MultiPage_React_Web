import { NavLink } from "react-router-dom";

export default function Navbar() {
  const linkClass = ({ isActive }) =>
    `px-5 py-2 rounded-4xl text-4xl font-semibold hover:bg-blue-200 transition ${
      isActive ? "bg-blue-300" : "bg-white/80"
    }`;

  return (
    <nav className="flex justify-center gap-2 py-3">
      <NavLink to="/" className={linkClass}>
        Home
      </NavLink>
      <NavLink to="/spongebob" className={linkClass}>
        Spongebob
      </NavLink>
      <NavLink to="/patrick" className={linkClass}>
        Patrick
      </NavLink>
      <NavLink to="/contact" className={linkClass}>
        Contact Us
      </NavLink>
    </nav>
  );
}
