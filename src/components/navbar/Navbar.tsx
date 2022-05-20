import { Link } from "react-router-dom";
export const Navbar = () => {
  return (
    <nav className="font-bold px-4  py-2 bg-blue-500 h-[60px]">
      <div className="flex items-center h-full">
        <ul className="text-white text-[16px] flex gap-x-2">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/users">Users</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};
