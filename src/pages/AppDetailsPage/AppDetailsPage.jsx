import React, { useContext } from "react";
import { useLoaderData, useParams } from "react-router";
import { toast } from "sonner";
import {
  ComposedChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import { InstalledContext } from "../../contexts/InstalledContext";
import ToastElement from "../../components/ToastElement";
import AppNotFound from "../../components/AppNotFound";

const AppDetailsPage = () => {
  const { data: allApps } = useLoaderData();
  const { id: givenID } = useParams();
  const [globalInstalledList, setGlobalInstalledList] =
    useContext(InstalledContext);

  let app = allApps.find((appObj) => appObj.id === parseInt(givenID));
  const isAppInstalled = globalInstalledList.includes(app?.id);

  const handleInstallButtonClick = (appId) => {
    if (isAppInstalled) return;

    setGlobalInstalledList((prev) => [...prev, appId]);
    toast.success(
      <ToastElement message={`${app.title} has Installed Successfully!`} />
    );
  };

  return (
    <>
      {app ? (
        <section className="w-full flex-1 p-5 md:p-20 flex flex-col justify-center gap-10">
          <div className="flex items-start justify-start flex-col md:flex-row gap-10">
            <img
              src={app.image}
              alt={app.title}
              className="max-w-80 h-auto mx-auto"
            />
            <div className="flex-1 flex flex-col items-start gap-4">
              <div className="w-full border-b-2 border-gray-300 pb-4 mb-3.5">
                <h3 className="font-bold text-2xl md:text-[2rem] text-heading-color">
                  {app.title}
                </h3>
                <p className="text-lg md:text-xl leading-8 text-subheading-color">
                  <span>Developed by</span>{" "}
                  <span className="font-semibold bg-gradient-to-br from-dark-purple to-light-purple text-transparent bg-clip-text">
                    {app.companyName}
                  </span>
                </p>
              </div>

              <div className="w-full flex items-start flex-col sm:flex-row gap-6 *:items-center *:md:items-start">
                <div className="lg:max-w-40 w-full flex flex-col gap-2 items-start">
                  <img
                    className="size-10"
                    src="/images/icon-downloads.png"
                    alt="downloads"
                  />
                  <p className="leading-6 text-heading-color">Downloads</p>
                  <p className="font-extrabold text-[2.5rem] leading-10 text-heading-color">
                    {app.downloads}
                  </p>
                </div>
                <div className="lg:max-w-40 w-full flex flex-col gap-2 items-start">
                  <img
                    className="size-10"
                    src="/images/icon-ratings.png"
                    alt="ratings"
                  />
                  <p className="leading-6 text-heading-color">
                    Average Ratings
                  </p>
                  <p className="font-extrabold text-[2.5rem] leading-10 text-heading-color">
                    {app.ratingAvg}
                  </p>
                </div>
                <div className="lg:max-w-40 w-full flex flex-col gap-2 items-start">
                  <img
                    className="size-10"
                    src="/images/icon-review.png"
                    alt="reviews"
                  />
                  <p className="leading-6 text-heading-color">Total Reviews</p>
                  <p className="font-extrabold text-[2.5rem] leading-10 text-heading-color">
                    {app.reviews}
                  </p>
                </div>
              </div>

              <button
                onClick={() => handleInstallButtonClick(app.id)}
                disabled={isAppInstalled && true}
                className="bg-my-accent px-5 py-3.5 mx-auto sm:mx-0 rounded font-semibold text-xl text-white transition-opacity duration-150 ease-out disabled:opacity-50 disabled:bg-gray-600 disabled:px-8"
              >
                {isAppInstalled ? "Installed" : `Install Now (${app.size} MB)`}
              </button>
            </div>
          </div>

          <div className="divider"></div>
          <div className="flex flex-col gap-6">
            <h2 className="font-semibold text-2xl leading-8 text-heading-color">
              Ratings
            </h2>
            <div style={{ width: "100%", height: 300 }}>
              <ResponsiveContainer>
                <ComposedChart
                  layout="vertical"
                  data={app.ratings.toReversed()}
                >
                  <XAxis type="number" dataKey="count" />
                  <YAxis dataKey="name" type="category" scale="band" />
                  <Tooltip />
                  <Bar
                    dataKey="count"
                    barSize={30}
                    className="fill-my-accent2"
                  />
                </ComposedChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="divider"></div>

          <div className="flex flex-col gap-6">
            <h2 className="font-semibold text-2xl leading-8 text-heading-color">
              Description
            </h2>
            <p className="text-base md:text-xl leading-7 md:leading-8 text-subheading-color">
              {app.description}
            </p>
          </div>
        </section>
      ) : (
        <section className="w-full flex-1 p-5 md:p-20 flex flex-col justify-center gap-10">
          <AppNotFound />
        </section>
      )}
    </>
  );
};

export default AppDetailsPage;
