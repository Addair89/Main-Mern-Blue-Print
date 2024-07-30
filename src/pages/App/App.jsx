import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import AuthPage from "../AuthPage/AuthPage";
import NavBar from "../../components/NavBar/NavBar";
import { getUser } from "../../utilities/users-service";
import { set } from "mongoose";
import DashBoard from "../DashBoard/DashBoard";

export default function App() {
  const [user, setUser] = useState(getUser());

  return (
    <main className="App relative bg-[#6930C3] h-screen z-10">
      <div className="absolute top-[20%] -z-10 right-[1rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] bg-[#64DFDF] "></div>
      <div className="absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] bg-[#80FFDB] "></div>
      {user ? (
        <>
          <NavBar user={user} setUser={setUser} />
          <br />
          <div className="flex flex-col w-screen items-center mt-10">
            <Routes>
              <Route path="/" element={<DashBoard user={user} />} />
            </Routes>
          </div>
        </>
      ) : (
        <AuthPage setUser={setUser} />
      )}
    </main>
  );
}
