import React from "react";
import Button from "../../components/ui/Button";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="h-20 flex items-center shadow-lg shadow-gray-50/20">
      <header className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-0">
        <div className="flex justify-between">
          <div>
            <Link to="/" className="cursor-pointer">
              <h1 className="text-2xl lg:text-4xl font-rubik-dirty uppercase text-white">
                Yusfaith
              </h1>
            </Link>
          </div>
          <Button
            label="contact me"
            onClick={() => {
              window.location.href = "#ContactMe";
            }}
          />
        </div>
      </header>
    </div>
  );
};

export default Header;
