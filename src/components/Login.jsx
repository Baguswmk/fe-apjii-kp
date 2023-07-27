import Footer from "./Footer.jsx";
import bgLogin from "../img/bg-login.png";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
      <div className="login-wrapper h-screen relative" style={{ height: "calc(100vh - 160px)" }}>
        <div className="login-bg bg-cover bg-center h-64 w-full z-0  top-0 left-0">
          <img src={bgLogin} alt="" className="w-full h-screen" style={{ height: "calc(100vh - 150px)" }} />
        </div>
        <div className="login-card z-10 bg-white border-solid border-2 border-white text-white rounded text-center m-auto w-1/3 p-5 h-2/4 relative">
          <div className="login-title text-[#474747]">
            <p className="text-4xl font-bold">Login</p>
            <p className="mt-3">To Start Your Session</p>
          </div>
          <div className="login-form flex flex-col mt-5">
            <div>
              <label htmlFor="email" className="block text-sm mb-2 w-[42%] text-black text-center">
                Username
              </label>
              <div className="relative">
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="py-3 px-4 block w-[70%] m-auto border border-black border-solid rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 bg-white dark:text-black"
                  required
                  aria-describedby="email-error"
                />
                <div className="hidden absolute inset-y-0 right-0 items-center pointer-events-none pr-3">
                  <svg className="h-5 w-5 text-red-500" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" aria-hidden="true">
                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                  </svg>
                </div>
              </div>
              <p className="hidden text-xs text-red-600 mt-2" id="email-error">
                Please include a valid email address so we can get back to you
              </p>
            </div>
            <div>
              <div className="flex justify-center items-center mt-5">
                <label htmlFor="password" className="block text-sm text-left mb-2 w-[50%] text-black">
                  Password
                </label>
                <a className="text-sm text-blue-600 decoration-2 hover:underline font-medium" href="../examples/html/recover-account.html">
                  Forgot password?
                </a>
              </div>
              <div className="relative">
                <input
                  type="password"
                  id="password"
                  name="password"
                  className="py-3 px-4 block w-[70%] m-auto border border-black border-solid rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 bg-white dark:text-black"
                  required
                  aria-describedby="password-error"
                />
                <div className="hidden absolute inset-y-0 right-0 items-center pointer-events-none pr-3">
                  <svg className="h-5 w-5 text-red-500" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" aria-hidden="true">
                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                  </svg>
                </div>
              </div>
              <p className="hidden text-xs text-red-600 mt-2" id="password-error">
                8+ characters required
              </p>
            </div>
            <Link to="/login">
              <button className="rounded-full bg-[#215385] text-white w-40 h-10 mt-5">LOGIN</button>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Login;
