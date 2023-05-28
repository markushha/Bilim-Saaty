import { BsFillSunFill } from "react-icons/bs";
import { AiFillGithub } from "react-icons/ai";
import { FaUserCircle } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { toggleTheme } from "@/app/redux/theme/themeSlice";

import Link from "next/link";

function Navbar() {
  const theme = useSelector((state: any) => state.theme);
  const dispatch = useDispatch();

  const toggleThemeHandler = () => {
    theme === "dark"
      ? dispatch(toggleTheme("light"))
      : dispatch(toggleTheme("dark"));
  };

  return (
    <div className="flex justify-between p-8 h-16 lg:w-[70%] mx-auto">
      <div className="flex items-center xxs:text-lg font-semibold lg:text-3xl text-xl">
        <Link href="/">Bilim Saaty</Link>
        <div className="flex xxs:none">
          <div
            className="cursor-pointer p-1.5 rounded-sm ml-6 mr-2 dark:hover:bg-slate-600 hover:bg-slate-300"
            onClick={toggleThemeHandler}
          >
            <BsFillSunFill
              color={theme === "dark" ? "white" : "black"}
              size={26}
            />
          </div>
          <a
            target="_blank"
            href="https://github.com/markushha/Bilim-Saaty"
            className="cursor-pointer p-1.5 rounded-sm dark:hover:bg-slate-600 hover:bg-slate-300"
          >
            <AiFillGithub
              color={theme === "dark" ? "white" : "black"}
              size={26}
            />
          </a>
        </div>
      </div>
      <div className="flex w-[30%] justify-end items-center">
        <div className="cursor-pointer p-1.5 rounded-sm dark:hover:bg-slate-600 hover:bg-slate-300">
          <FaUserCircle
            color={theme === "dark" ? "white" : "black"}
            size={30}
          />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
