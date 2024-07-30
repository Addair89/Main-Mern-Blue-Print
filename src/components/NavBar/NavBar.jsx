import { Link } from "react-router-dom";
import * as userService from "../../utilities/users-service";
import { useState } from "react";

export default function NavBar({ setUser }) {
  function handleLogOut() {
    userService.logOut();
    setUser(null);
  }

  const [showMenu, setShowMenu] = useState(false);

  return (
    <nav
      className={`absolute rounded-md
        text-black flex flex-col items-start mt-10 p-2  ${
          showMenu ? "bg-white shadow-2xl" : ""
        }`}
    >
      <i
        onClick={() => setShowMenu(!showMenu)}
        className={`${
          showMenu ? "fa-solid fa-xmark ml-0" : "fa-solid fa-bars"
        } text-4xl mx-8 `}
      ></i>

      <div
        className={`transition-transform text-4xl text-[#7400B8]  flex flex-col gap-4 px-8 w-fit
          ${
            showMenu
              ? "duration-500 ease-out opacity-100 scale-y-100 h-auto"
              : "duration-100 ease-in scale-y-0 h-0"
          }`}
      >
        <Link className="hover:text-black" to="/">
          Dashboard
        </Link>
        <Link className="hover:text-black">Quizzes</Link>
        <Link className="hover:text-black">Flash Cards</Link>
        <Link className="hover:text-black" to="" onClick={handleLogOut}>
          Log Out
        </Link>
      </div>
    </nav>
  );
}
