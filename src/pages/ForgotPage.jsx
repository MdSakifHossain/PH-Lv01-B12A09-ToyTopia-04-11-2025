import React, { useState } from "react";
import { toast } from "sonner";
import CustomToast from "../components/CustomToast";
import { FaCircleCheck } from "react-icons/fa6";
import { useNavigate } from "react-router";

const ForgotPage = () => {
  const navigate = useNavigate();
  const [isSendClicked, setIsSendClicked] = useState(false);

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
    <div className="flex-1 font-outfit flex flex-col items-center justify-center gap-12">
      {!isSendClicked ? (
        <>
          <h1 className="text-5xl font-bold border-b-4 border-violet-500 pb-2 px-4">
            Reset Password
          </h1>
          <form
            onSubmit={(e) => handleFormSubmit(e)}
            className="border-4 border-gray-500 w-6/12 px-12 py-12 pb-16 rounded-2xl flex flex-col gap-6"
          >
            <label className="flex flex-col gap-2">
              <span className="text-lg">Email</span>
              <input
                className="
                  retro-shadow px-6 py-4 w-full text-xl border-3 border-gray-500 transition-all duration-200
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
              className={`grid grid-cols-3 *:flex-1 *:rounded-lg *:select-none`}
            >
              <button className="col-start-3 px-12 py-3 text-xl border-3 border-gray-500 retro-shadow w-full md:w-auto font-medium flex items-center justify-center gap-2 transition-all duration-150 ease-out hover:scale-103 active:scale-99 focus-visible:outline-0 focus-visible:scale-103">
                Send Link
              </button>
            </div>
          </form>
        </>
      ) : (
        <p className="text-7xl flex flex-col items-center gap-4">
          Link has been Sent ✅{" "}
          <span className="font-extrabold text-violet-500">&&</span>
          Redirecting to the login page shortly 🔗
        </p>
      )}
    </div>
  );
};

export default ForgotPage;
