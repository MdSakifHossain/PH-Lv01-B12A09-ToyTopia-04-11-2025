import React, { use, useState } from "react";
import { AuthContext } from "../contexts/AuthContext/AuthContext";
import { LuSend, LuCircleX, LuSettings } from "react-icons/lu";
import { useIsMobile } from "../hooks/useIsMobile";
import { useTitle } from "../hooks/useTitle";
import { toast } from "sonner";
import CustomToast from "../components/CustomToast";
import { FaCircleCheck, FaCircleXmark } from "react-icons/fa6";
import { getRandom } from "../utils";

import { Constants } from "../constants/";

const ProfilePage = () => {
  const { user, updateUserProfile } = use(AuthContext);
  const [isOpenUpdateForm, setIsOpenUpdateForm] = useState(false);
  const [username, setUsername] = useState(user.displayName || "");
  const [userPhotoURL, setUserPhotoURL] = useState(user.photoURL || "");
  const { DEFAULT_AVATARS } = Constants;
  const isMobile = useIsMobile();

  const handleProfileUpdateFormSubmit = async (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const profileURL = e.target.profileURL.value;

    try {
      await updateUserProfile({
        displayName: name,
        photoURL: profileURL || getRandom(DEFAULT_AVATARS).url,
      });
      toast.custom(() => (
        <CustomToast>
          <FaCircleCheck className="text-xl lg:text-2xl text-gray-300" />
          <p className="text-lg font-medium lg:text-xl">
            Updated Successfully 🥳✨
          </p>
        </CustomToast>
      ));
    } catch (err) {
      console.error(err);
      toast.custom(() => (
        <CustomToast>
          <FaCircleXmark className="text-xl lg:text-2xl text-gray-300" />
          <p className="text-lg font-medium lg:text-xl">
            someting worng! Look in the console.
          </p>
        </CustomToast>
      ));
    }
  };

  useTitle("Profile");

  return (
    <div className="flex-1 pb-8 pt-4 font-outfit flex flex-col items-center justify-center gap-6 lg:gap-12">
      {!isOpenUpdateForm ? (
        <>
          <h1 className="text-4xl lg:text-5xl font-semibold">My Profile</h1>
          <section className="border-4 border-gray-500 retro-shadow w-full lg:w-6/12 px-6 lg:px-12 py-10 lg:py-12 rounded-2xl flex flex-col gap-6 lg:gap-8 items-center justify-center">
            <img
              className="rounded-full ring-3 lg:ring-4 ring-violet-500 size-24 lg:size-28"
              src={user.photoURL}
              alt={user.displayName}
            />
            <h2 className="text-3xl lg:text-4xl font-medium">
              {user.displayName}
            </h2>

            <hr className="border border-gray-500 w-full" />

            <div className="w-full text-base lg:text-lg flex flex-col gap-1.5 lg:gap-3">
              <div className="w-full flex items-center justify-between text-gray-300">
                <span>Name:</span>
                <span>{user.displayName}</span>
              </div>
              <div className="w-full flex items-center justify-between text-gray-300">
                <span>Email:</span>
                <span>{user.email}</span>
              </div>
              <div className="w-full flex items-center justify-between text-gray-300">
                <span>Varified:</span>
                <span>{user.emailVerified ? "Varified" : "Not Varified"}</span>
              </div>
              <div className="w-full flex items-center justify-between text-gray-300">
                <span>Last Login:</span>
                <span>
                  {new Intl.DateTimeFormat("en-US", {
                    day: "2-digit",
                    month: "short",
                    year: "numeric",
                    hour: "2-digit",
                    minute: "2-digit",
                    second: "2-digit",
                    hour12: true,
                  }).format(new Date(user.metadata.lastSignInTime))}
                </span>
              </div>
            </div>

            <hr className="border border-gray-500 w-full" />

            <button
              onClick={() => setIsOpenUpdateForm(true)}
              className="group px-12 py-4 text-base lg:text-xl border-3 border-gray-500 retro-shadow w-full md:w-auto font-medium flex items-center justify-center gap-2 transition-all duration-150 ease-out"
            >
              Update Profile{" "}
              <LuSettings className="text-xl lg:text-2xl transition-all duration-200 ease-out group-hover:rotate-45" />
            </button>
          </section>
        </>
      ) : (
        <>
          <h1 className="text-4xl lg:text-5xl font-semibold">Update Info*</h1>
          <form
            onSubmit={(e) => handleProfileUpdateFormSubmit(e)}
            className="border-4 border-gray-500 w-full lg:w-6/12 px-7 lg:px-12 py-8 lg:py-12 pb-16 rounded-2xl flex flex-col gap-7 lg:gap-8"
          >
            <label className="flex flex-col gap-2">
              <span className="text-lg">Name</span>
              <input
                className="
              retro-shadow px-6 py-4 w-full text-lg lg:text-xl border-3 border-gray-500 transition-all duration-200
              active:scale-95 
              focus-visible:outline-0"
                placeholder="Your Name"
                type="text"
                name="name"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </label>

            <label className="flex flex-col gap-2">
              <span className="text-lg flex items-center gap-3">
                Photo URL
                {isMobile && (
                  <LuCircleX
                    onClick={() => setUserPhotoURL("")}
                    className={`size-5 my-auto text-gray-200 ${
                      userPhotoURL.length === 0 && "hidden"
                    }`}
                  />
                )}
              </span>
              <div className="retro-shadow w-full text-lg lg:text-xl border-3 border-gray-500 flex items-center">
                <input
                  className="focus-visible:outline-0 px-6 py-4 w-full"
                  placeholder="Photo URL"
                  type="url"
                  name="profileURL"
                  value={userPhotoURL}
                  onChange={(e) => setUserPhotoURL(e.target.value)}
                />
                {!isMobile && (
                  <LuCircleX
                    onClick={() => setUserPhotoURL("")}
                    className={`size-6 my-auto text-gray-200 me-4 ${
                      userPhotoURL.length === 0 && "hidden"
                    }`}
                  />
                )}
              </div>
            </label>

            {/* will work on this soon */}
            {/* <label className="flex flex-col gap-2">
              <div className="divider">OR</div>
              <details className="dropdown dropdown-start select-none w-full">
                /* the trigger *
                <summary className="border-3 border-gray-500 retro-shadow font-medium px-4 lg:px-8 py-3.5 lg:py-4 flex items-center justify-between gap-2.5 lg:gap-4 transition-all duration-150 ease-out focus-visible:outline-0 focus-visible:scale-103">
                  <p>Choose from here:</p>
                  <img
                    className="size-12 rounded-full"
                    src={user.photoURL}
                    alt={user.displayName}
                  />
                </summary>
                /* the details container *
                <div className="flex-1 grid grid-cols-3 lg:grid-cols-4 gap-5 lg:gap-8 retro-shadow border-4 border-gray-500 px-4 lg:px-8 py-4 lg:py-8 pb-6 lg:pb-12">
                  {DEFAULT_AVATARS.map((obj) => (
                    <img
                      onClick={() => setUserPhotoURL(obj.url)}
                      className="w-full"
                      key={obj.id}
                      src={obj.url}
                    />
                  ))}
                </div>
              </details>
            </label> */}

            <div className="*:flex-1 *:rounded-lg flex items-center gap-4 *:select-none">
              <button
                onClick={() => {
                  setIsOpenUpdateForm(false);
                  setUserPhotoURL(user.photoURL);
                }}
                className="py-4 text-base lg:text-xl border-3 border-gray-500 retro-shadow w-full md:w-auto font-medium flex items-center justify-center gap-1 lg:gap-2 transition-all duration-150 ease-out hover:scale-103 active:scale-99 focus-visible:outline-0 focus-visible:scale-103"
              >
                Cancel
              </button>
              <button className="py-4 text-base lg:text-xl border-3 border-gray-500 retro-shadow w-full md:w-auto font-medium flex items-center justify-center gap-1 lg:gap-2 transition-all duration-150 ease-out hover:scale-103 active:scale-99 focus-visible:outline-0 focus-visible:scale-103">
                Update <LuSend className="text-xl lg:text-2xl" />
              </button>
            </div>
          </form>
        </>
      )}
    </div>
  );
};

export default ProfilePage;
