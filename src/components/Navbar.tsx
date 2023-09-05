import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="flex justify-evenly mt-2 w-full sm:w-4/5 md:w-3/4">
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive
            ? 'w-full bg-slate-200 hover:bg-slate-100 border-b-2 border-red-500 p-1 md:p-4'
            : 'w-full bg-slate-200 hover:bg-slate-100 p-1 md:p-4'
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/collection"
        className={({ isActive }) =>
          isActive
            ? 'w-full bg-slate-200 hover:bg-slate-100 border-b-2 border-red-500 p-1 md:p-4'
            : 'w-full bg-slate-200 hover:bg-slate-100 p-1 md:p-4'
        }
      >
        My collection
      </NavLink>
    </nav>
  );
};

export default Navbar;
