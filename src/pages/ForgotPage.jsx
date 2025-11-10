import React, { useState } from "react";
import { toast } from "sonner";
import CustomToast from "../components/CustomToast";
import { FaCircleCheck } from "react-icons/fa6";
import { Link, useNavigate } from "react-router";
import { useTitle } from "../hooks/useTitle";

const ForgotPage = () => {
  const navigate = useNavigate();
  const [isSendClicked, setIsSendClicked] = useState(false);

  useTitle("Forgot Password");

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setIsSendClicked(true);
    toast.custom(() => (
      <CustomToast>
        <FaCircleCheck className="text-xl lg:text-2xl text-gray-300" />
        <p className="text-lg font-medium lg:text-xl">Check your Inbox ✨</p>
      </CustomToast>
    ));
    setTimeout(() => {
      navigate("/login");
      window.open("https://mail.google.com/", "_blank");
    }, 2000);
  };

  return (
    <div className="flex-1 font-outfit pb-8 pt-4 flex flex-col items-start lg:items-center justify-center gap-8 lg:gap-12">
      {!isSendClicked ? (
        <>
          <h1 className="text-3xl lg:text-5xl font-bold border-b-4 border-violet-500 pb-2 lg:px-4 ms-2">
            Reset Password
          </h1>
          <form
            onSubmit={(e) => handleFormSubmit(e)}
            className="border-4 border-gray-500 retro-shadow w-full lg:w-6/12 px-6 lg:px-9 py-6 lg:py-12 rounded-2xl flex flex-col gap-6 lg:gap-8"
          >
            <label className="flex flex-col gap-2">
              <span className="text-lg">Email</span>
              <input
                className="
                  retro-shadow px-6 py-4 w-full text-lg lg:text-xl border-3 border-gray-500 transition-all duration-200
                  active:scale-95 
                  focus-visible:outline-0"
                placeholder="Your Email"
                type="email"
                name="email"
                required
                autoFocus
              />
            </label>

            <div
              className={`lg:grid lg:grid-cols-3 *:flex-1 *:rounded-lg *:select-none`}
            >
              <button className="lg:col-start-3 py-3 text-base lg:text-lg border-3 border-gray-500 retro-shadow w-full font-medium flex items-center justify-center gap-2 transition-all duration-150 ease-out hover:scale-103 active:scale-99 focus-visible:outline-0 focus-visible:scale-103">
                Send Link
              </button>
            </div>

            <div className="flex flex-col items-center gap-2 lg:gap-0.5">
              <p className="text-sm lg:text-base text-center text-gray-400">
                Password gone bye-bye? 🤣
              </p>
              <p className="text-gray-300 text-base lg:text-lg font-medium">
                Back to{" "}
                <Link
                  className="text-sky-500 lg:font-semibold underline underline-offset-3"
                  to={`/login`}
                >
                  Login Page
                </Link>
              </p>
            </div>
          </form>
        </>
      ) : (
        <p className="text-3xl lg:text-6xl text-center font-medium text-gray-200 flex flex-col items-center gap-2 lg:gap-4">
          Link has been Sent ✅{" "}
          <span className="font-extrabold text-violet-500 text-4xl lg:text-7xl">
            &&
          </span>
          Redirecting to the login page shortly 🔗
        </p>
      )}
    </div>
  );
};

export default ForgotPage;
