import { FiMenu } from "react-icons/fi";
import { Link } from "react-router-dom";

const menuItems = [
  { name: "Home", path: "/" },
  { name: "About", path: "#aboutMe" },
  { name: "Projects", path: "/projects" },
  { name: "Contact", path: "/contact" },
];

const Header = () => {
  return (
    <header className="h-20 flex items-center bg-black/60 backdrop-blur-sm shadow-lg z-50 fixed inset-0">
      <div className="w-full max-w-container mx-auto px-6 sm:px-8 lg:px-10 2xl:px-0">
        <div className="flex items-center justify-between">
          <div>
            <Link to="/" className="cursor-pointer">
              <h1 className="text-2xl lg:text-4xl font-rubik-dirty uppercase text-white">
                Yusfaith
              </h1>
            </Link>
          </div>
          <div>
            <FiMenu size={30} className="md:hidden text-white" />

            <div className="hidden md:flex items-center gap-6">
              {menuItems.map((item) => {
                const isActive = window.location.pathname === item.path;
                return (
                  <Link
                    key={item.name}
                    to={item.path}
                    className="text-white hover:text-gray-300 transition-colors"
                  >
                    {item.name}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
