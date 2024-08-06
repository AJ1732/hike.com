import { useState } from "react";
import MenuIcon from "../svg/MenuIcon";
import Button from "../ui/Button";

const Navbar = () => {
  const navlinks: string[] = [
    "about us",
    "trails",
    "guides",
    "community",
    "blog",
  ];

  const [openNav, setOpenNav] = useState(false);

  return (
    <header className="full-width content-grid relative">
      <nav className="text-smm flex items-center justify-between pb-5 pt-6">
        <button
          onClick={() => setOpenNav((prev) => !prev)}
          className="z-20 mr-12 lg:hidden"
        >
          <MenuIcon />
        </button>

        <h1 className="z-20 cursor-pointer text-xl font-semibold uppercase">
          HIKE.COM
        </h1>

        {/* TABLET & DESKTOP NAVIGATION */}
        <ul className="text-grey ml-auto mr-20 hidden items-center justify-between gap-2.5 *:p-2.5 lg:flex">
          {navlinks.map((link) => (
            <li key={link}>{link}</li>
          ))}
        </ul>

        <div className="hidden items-center justify-center gap-5 md:flex">
          <button className="p-2.5 font-medium transition-all duration-300 hover:underline">
            Login
          </button>
          <Button>Get Started</Button>
        </div>
      </nav>

      {/* <div className="absolute top-2 rounded-l-lg rounded-tr-lg -left-5 h-20 w-20 bg-rose-300" /> */}

      {/* MOBILE NAVIGATION */}
      <div
        className={`${!openNav && "!hidden"} full-width content-grid absolute inset-x-0 top-[100%] min-h-[calc(100dvh-5.5rem)] w-full lg:!hidden`}
      >
        <div
          onClick={() => setOpenNav((prev) => !prev)}
          className="full-width absolute inset-0 size-full bg-white"
        ></div>

        <nav
          className={`bg-soot z-10 h-fit space-y-8 rounded-lg px-4 py-6 text-white`}
        >
          <ul className="ml-auto mr-20 flex w-full flex-col items-start justify-between gap-2.5 px-6 text-left uppercase *:p-2.5">
            {navlinks.map((link) => (
              <li key={link} className="text-neutral-300 hover:text-white">
                {link}
              </li>
            ))}
          </ul>

          <div className="flex items-center justify-center gap-5 lg:hidden">
            <Button className="w-full bg-neutral-950/10">Login</Button>
            <Button className="w-full bg-white text-black hover:bg-neutral-50">
              Get Started
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
};
export default Navbar;
