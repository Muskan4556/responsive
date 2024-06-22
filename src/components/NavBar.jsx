import { navItems } from "../constants";
import logo from "../assets/logo.png";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const NavBar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const handleToggleNavBar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };
  return (
    <>
      <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg  border-b border-neutral-700/80">
        <div className="container px-4 mx-auto relative text-sm ">
          <div className="flex justify-between items-center">
            <div className="flex items-center flex-shrink-0">
              <img className="h-10 w-10 mr-2" src={logo} alt="logo " />
              <span className="text-xl tracking-tight"> VirtualR</span>
            </div>
            {/* nav item are hidden by default abd visible in large screen */}
            <ul className=" hidden lg:flex ml-14 space-x-12">
              {navItems.map((item) => (
                <li key={item.label}>
                  <a href={item.href}> {item.label} </a>
                </li>
              ))}
            </ul>
            <div className="hidden lg:flex justify-center items-center space-x-12 ">
              <a href="#" className="px-3 py-2 border rounded-md">
                Sign In
              </a>
              <a
                href="#"
                className="bg-gradient-to-r from-orange-500 to bg-orange-800 py-2 px-3 rounded-md"
              >
                {" "}
                Create an account{" "}
              </a>
            </div>
            <div className="lg:hidden md:flex flex-col justify-end ">
              <button onClick={handleToggleNavBar}>
                {mobileDrawerOpen ? <X /> : <Menu />}
              </button>
            </div>
          </div>
          {/* nav view on small device  */}
          {mobileDrawerOpen && (
            <div className="lg:hidden fixed left-0 flex flex-col justify-start items-center  z-20 bg-neutral-900 w-[55%] py-4 rounded-r-md top-[4.04rem] h-screen ">
              <ul className=" ">
                {navItems.map((item) => (
                  <li key={item.label} className="py-2 ">
                    <a href={item.href}> {item.label} </a>
                  </li>
                ))}
              </ul>
              <div className=" flex flex-col justify- items-center space-y-3 ">
                <a href="#" className="px-3 py-2 border rounded-md hover:bg-gradient-to-r hover:from-orange-700 hover:to-orange-900 hover:border-none">
                  Sign In
                </a>
                <a
                  href="#"
                  className="bg-gradient-to-r from-orange-500 to bg-orange-800 py-2 px-3 rounded-md hover:bg-gradient-to-r hover:from-orange-700 hover:to-orange-900"
                >
                  Create an account{" "}
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

export default NavBar;
