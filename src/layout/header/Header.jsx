import { FiMenu } from "react-icons/fi";
import Button from "../../components/ui/Button";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="h-20 flex items-center shadow-lg shadow-gray-50/20 z-50">
      <div className="w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 2xl:px-0">
        <div className="flex justify-between">
          <div>
            <Link to="/" className="cursor-pointer">
              <h1 className="text-2xl lg:text-4xl font-rubik-dirty uppercase text-white">
                Yusfaith
              </h1>
            </Link>
          </div>
          <div>
            <FiMenu size={30} className="md:hidden text-white" />
            <Button
              label="contact me"
              onClick={() => {
                window.location.href = "#contactMe";
              }}
              className="hidden md:block"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
