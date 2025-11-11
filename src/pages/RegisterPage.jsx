import React, { use, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";

import { FaCircleCheck, FaCircleXmark, FaGoogle } from "react-icons/fa6";
import { LuEye, LuEyeOff } from "react-icons/lu";
import Divider from "./../components/Divider";

import { AuthContext } from "../contexts/AuthContext/AuthContext";
import { toast } from "sonner";
import CustomToast from "../components/CustomToast";
import { useTitle } from "../hooks/useTitle";
import { getRandom } from "../utils";
import { Constants } from "../constants/";

const RegisterPage = () => {
  const { signInWithGoogle, createUser, updateUserProfile } = use(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const [showPass, setShowPass] = useState(false);
  const { DEFAULT_AVATARS } = Constants;

  useTitle("Register");

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const profileURL = e.target.profile.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    const regexUpper = /^(?=.*[A-Z]).+$/;
    const regexLower = /^(?=.*[a-z]).+$/;

    if (password.length < 6) {
      toast.custom(() => (
        <CustomToast>
          <FaCircleXmark className="text-xl lg:text-3xl text-gray-300" />
          <p className="text-lg font-medium lg:text-xl">
            Password must-be 6 character or longer
          </p>
        </CustomToast>
      ));
      return;
    }

    if (!regexLower.test(password)) {
      toast.custom(() => (
        <CustomToast>
          <FaCircleXmark className="text-xl lg:text-3xl text-gray-300" />
          <p className="text-lg font-medium lg:text-xl">
            Use at least one lowerCase letter
          </p>
        </CustomToast>
      ));
      return;
    }

    if (!regexUpper.test(password)) {
      toast.custom(() => (
        <CustomToast>
          <FaCircleXmark className="text-xl lg:text-3xl text-gray-300" />
          <p className="text-lg font-medium lg:text-xl">
            Use at least one upperCase letter
          </p>
        </CustomToast>
      ));
      return;
    }

    try {
      await createUser(email, password);
      await updateUserProfile({
        displayName: name,
        photoURL: profileURL || getRandom(DEFAULT_AVATARS).url,
      });
      navigate(location.state || "/");
      toast.custom(() => (
        <CustomToast>
          <FaCircleCheck className="text-xl lg:text-3xl text-gray-300" />
          <p className="text-lg font-medium lg:text-xl">
            Account Created! 🎯⭐✨
          </p>
        </CustomToast>
      ));
    } catch (err) {
      // console.error(err);

      let message = "";
      if (err.code === "auth/email-already-in-use") {
        message = "Email already in use.";
      } else if (err.code === "auth/invalid-email") {
        message = "Invalid email address.";
      } else if (err.code === "auth/operation-not-allowed") {
        message = "Account type not allowed.";
      } else if (err.code === "auth/weak-password") {
        message = "Weak password. Min 6 chars.";
      } else if (err.code === "auth/missing-password") {
        message = "Enter your password.";
      } else if (err.code === "auth/missing-email") {
        message = "Enter your email.";
      } else if (err.code === "auth/internal-error") {
        message = "Server error. Try again.";
      } else if (err.code === "auth/network-request-failed") {
        message = "Network error. Check connection.";
      } else if (err.code === "auth/too-many-requests") {
        message = "Too many tries. Wait a bit.";
      } else {
        message = "Something went wrong.";
      }

      toast.custom(() => (
        <CustomToast>
          <FaCircleXmark className="text-xl lg:text-3xl text-gray-300" />
          <p className="text-lg font-medium lg:text-xl">{message}</p>
        </CustomToast>
      ));
    }
  };

  const handleGoogleLogin = async () => {
    try {
      await signInWithGoogle();
      navigate(location.state || "/");
      toast.custom(() => (
        <CustomToast>
          <FaCircleCheck className="text-xl lg:text-2xl text-gray-300" />
          <p className="text-lg font-medium lg:text-xl">Login successful! ✨</p>
        </CustomToast>
      ));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex-1 font-outfit px-4 sm:px-8 py-12 grid grid-cols-1 xl:grid-cols-2 gap-8 lg:gap-12 my-auto">
      <section className="flex items-center justify-center flex-col gap-4">
        <div className="tooltip xl:tooltip-top">
          <div className="hidden xl:block tooltip-content p-0">
            <img
              className="rounded"
              src="https://i.giphy.com/bcKmIWkUMCjVm.webp"
              alt="welcome-back"
            />
          </div>
          <div className="flex flex-col justify-center items-center gap-2 lg:gap-4">
            <h1 className="text-[2.625rem] lg:text-6xl">Welcome to ToyTopia</h1>
            <p className="hidden sm:block text-base lg:text-xl text-gray-200 text-center">
              Use any method you desire to Create an Account. <br />
              We just want your data.. that's all.
            </p>
          </div>
        </div>
      </section>

      <section className="w-full sm:px-12 sm:py-12 sm:pb-16 sm:border-4 sm:border-gray-500 sm:rounded-4xl flex flex-col gap-8 lg:gap-14">
        <h1 className="hidden sm:block text-4xl lg:text-5xl text-center font-medium text-gray-200">
          Create Account
        </h1>

        <form
          className="w-full 
              text-lg sm:*:text-xl 
              flex flex-col gap-3 items-start 
              caret-lime-400 
              "
          onSubmit={(e) => handleFormSubmit(e)}
        >
          <label className="w-full flex flex-col gap-0.5">
            <span className="text-lg">
              Name <span className="text-red-600">*</span>
            </span>
            <input
              className="w-full
            retro-shadow px-5 py-3.5 md:py-4 border-3 border-gray-500 transition-all duration-200
            focus-visible:outline-0"
              placeholder="Name"
              type="text"
              name="name"
              required
            />
          </label>

          <label className="w-full flex flex-col gap-0.5">
            <span className="text-lg select-none">Profile URL</span>
            <input
              className="w-full
            retro-shadow px-5 py-3.5 md:py-4 border-3 border-gray-500 transition-all duration-200
            focus-visible:outline-0"
              placeholder="Profile URL"
              type="url"
              name="profile"
            />
          </label>

          <label className="w-full flex flex-col gap-0.5">
            <span className="text-lg select-none">
              Email <span className="text-red-600">*</span>
            </span>
            <input
              className="w-full
            retro-shadow px-5 py-3.5 md:py-4 border-3 border-gray-500 transition-all duration-200
            focus-visible:outline-0"
              placeholder="Email"
              type="email"
              name="email"
              required
            />
          </label>

          <label className="w-full flex flex-col gap-2">
            <span className="text-lg select-none flex items-center gap-4">
              <span>
                Password <span className="text-red-600">*</span>
              </span>
              {showPass === false ? (
                <LuEye
                  onClick={() => setShowPass(true)}
                  className={`size-6 my-auto text-gray-200`}
                />
              ) : (
                <LuEyeOff
                  onClick={() => setShowPass(false)}
                  className={`size-6 my-auto text-gray-200`}
                />
              )}
            </span>
            <div className="retro-shadow w-full text-lg lg:text-xl border-3 border-gray-500 flex items-center">
              <input
                className="focus-visible:outline-0 px-6 py-4 w-full"
                placeholder="Password"
                type={showPass ? "text" : "password"}
                name="password"
                required
              />
            </div>
          </label>

          <input
            className="w-full sm:w-1/2 mx-auto sm:mx-0 sm:ms-auto px-10 py-2 md:py-3 mt-2 border-3 border-gray-500 retro-shadow font-medium transition-all duration-150 ease-out active:scale-99 focus-visible:outline-0 focus-visible:scale-103"
            type="submit"
            value="Create"
          />
        </form>

        <Divider
          className="border-0 border-b-3 border-dashed border-gray-500 mx-auto my-2"
          w="w-4/12"
          h="h-0"
        />

        <section className="w-full flex flex-col gap-8 items-center">
          <button
            onClick={() => handleGoogleLogin()}
            className="w-full sm:w-10/12 text-lg lg:text-xl font-medium border-4 border-gray-500 retro-shadow px-10 py-4 flex items-center justify-center gap-4 transition-all duration-150 active:scale-95 focus-visible:outline-0 focus-visible:scale-103"
          >
            <FaGoogle />
            Login with Google
          </button>

          <p className="text-base lg:text-lg text-gray-300">
            Don't have an account?{" "}
            <Link className="text-sky-500 lg:font-semibold" to={`/login`}>
              Login
            </Link>
          </p>
        </section>
      </section>
    </div>
  );
};

export default RegisterPage;
