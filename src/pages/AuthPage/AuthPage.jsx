import SignUpForm from "../../components/SignUpForm/SignUpForm";
import LoginForm from "../../components/LoginForm/LoginForm";
import { useState } from "react";
import Logo from "../../images/techTutorLogo.png";

const AuthPage = ({ setUser }) => {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <main className="AuthPage grid grid-cols-2 justify-center items-center  h-screen relative bg-[#5E60CE]/10">
      <div>
        <img src={Logo} alt="" className=" w-4/6 m-auto rounded-full" />
      </div>
      <div className="mx-auto w-3/5 flex flex-col items-center">
        {showLogin ? (
          <LoginForm setUser={setUser} />
        ) : (
          <SignUpForm setUser={setUser} />
        )}
        {showLogin ? "Dont have an Acct?" : "Already have an Acct?"}
        <button
          className="text-1xl p-4 bg-[#7400B8] rounded-full m-4 text-white hover:bg-[#48BFE3] hover:text-[#7400B8] transition-all duration-300 ease-in-out"
          onClick={() => setShowLogin(!showLogin)}
        >
          {showLogin ? "SIGN UP" : "LOG IN"}
        </button>
      </div>
    </main>
  );
};

export default AuthPage;
