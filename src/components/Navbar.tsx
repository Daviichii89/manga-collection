import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex justify-evenly">
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive
            ? "w-full hover:bg-slate-100 border-b-2 border-red-500"
            : "w-full hover:bg-slate-100"
        }
      >
        Inicio
      </NavLink>
      <NavLink
        to="/collection"
        className={({ isActive }) =>
          isActive
            ? "w-full hover:bg-slate-100 border-b-2 border-red-500"
            : "w-full hover:bg-slate-100"
        }
      >
        Mi collección
      </NavLink>
    </nav>
  );
};

export default Navbar;
