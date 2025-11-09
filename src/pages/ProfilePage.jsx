import React, { use, useState } from "react";
import { AuthContext } from "../contexts/AuthContext/AuthContext";
import { LuSend, LuCircleX, LuSettings } from "react-icons/lu";

const ProfilePage = () => {
  const { user } = use(AuthContext);
  const [isOpenUpdateForm, setIsOpenUpdateForm] = useState(false);
  const [username, setUsername] = useState(user.displayName);
  const [userPhotoURL, setUserPhotoURL] = useState(user.photoURL);

  return (
    <div className="flex-1 font-outfit flex flex-col items-center justify-center gap-12">
      {!isOpenUpdateForm ? (
        <>
          <h1 className="text-5xl font-semibold">My Profile</h1>
          <section className="border-4 border-gray-500 retro-shadow w-6/12 px-12 py-12 rounded-2xl flex flex-col gap-8 items-center justify-center">
            <img
              className="rounded-full ring-4 ring-violet-500 size-28"
              src={user.photoURL}
              alt={user.displayName}
            />
            <h2 className="text-4xl font-medium">{user.displayName}</h2>

            <hr className="border border-gray-500 w-full" />

            <div className="w-full flex flex-col gap-3">
              <div className="w-full flex items-center justify-between text-lg text-gray-300">
                <span>Name:</span>
                <span>{user.displayName}</span>
              </div>
              <div className="w-full flex items-center justify-between text-lg text-gray-300">
                <span>Email:</span>
                <span>{user.email}</span>
              </div>
              <div className="w-full flex items-center justify-between text-lg text-gray-300">
                <span>Varified:</span>
                <span>{user.emailVerified ? "Varified" : "Not Varified"}</span>
              </div>
              <div className="w-full flex items-center justify-between text-lg text-gray-300">
                <span>Login Since:</span>
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
              // className="group px-12 py-4 text-xl border-3 border-gray-500 retro-shadow w-full md:w-auto font-medium flex items-center justify-center gap-2 transition-all duration-150 ease-out hover:scale-103 active:scale-99 focus-visible:outline-0 focus-visible:scale-103"
              className="group px-12 py-4 text-xl border-3 border-gray-500 retro-shadow w-full md:w-auto font-medium flex items-center justify-center gap-2 transition-all duration-150 ease-out"
            >
              Update Profile{" "}
              <LuSettings className="text-2xl transition-all duration-200 ease-out group-hover:rotate-90" />
            </button>
          </section>
        </>
      ) : (
        <form
          onSubmit={(e) => e.preventDefault()}
          className="border-4 border-gray-500 w-6/12 px-12 py-12 pb-16 rounded-2xl flex flex-col gap-8"
        >
          <label className="flex flex-col gap-2">
            <span className="text-lg">Name</span>
            <input
              className="
            retro-shadow px-6 py-4 w-full text-xl border-3 border-gray-500 transition-all duration-200
            active:scale-95 
            focus-visible:outline-0"
              placeholder="Your Email"
              type="text"
              name="name"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </label>

          <label className="flex flex-col gap-2">
            <span className="text-lg">Photo URL</span>

            <div
              className="
              retro-shadow w-full pe-4 text-xl border-3 border-gray-500
              flex items-center justify-between gap-4
              "
            >
              <input
                //   className="
                // retro-shadow px-6 py-4 w-full text-xl border-3 border-gray-500 transition-all duration-200
                // active:scale-95
                // focus-visible:outline-0"
                className="flex-1 ps-4 py-4 focus-visible:outline-0"
                placeholder="Your Email"
                type="url"
                name="name"
                value={userPhotoURL}
                onChange={(e) => setUserPhotoURL(e.target.value)}
              />
              <LuCircleX
                onClick={() => setUserPhotoURL("")}
                className={`size-8 transition-all duration-75 active:scale-75 
                  ${!(userPhotoURL.length > 0) && "hidden"}
                  `}
              />
            </div>
          </label>

          <div className="*:flex-1 *:rounded-lg flex items-center gap-4 *:select-none">
            <button
              onClick={() => {
                setIsOpenUpdateForm(false);
                setUserPhotoURL(user.photoURL);
              }}
              className="px-12 py-4 text-xl border-3 border-gray-500 retro-shadow w-full md:w-auto font-medium flex items-center justify-center gap-2 transition-all duration-150 ease-out hover:scale-103 active:scale-99 focus-visible:outline-0 focus-visible:scale-103"
            >
              Cancel
            </button>
            {/* this update button will navigate you to the /profile route */}
            <button className="px-12 py-4 text-xl border-3 border-gray-500 retro-shadow w-full md:w-auto font-medium flex items-center justify-center gap-2 transition-all duration-150 ease-out hover:scale-103 active:scale-99 focus-visible:outline-0 focus-visible:scale-103">
              Update Profile <LuSend className="text-2xl" />
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default ProfilePage;
