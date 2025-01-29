"use client";
import Head from "next/head";
import { useState } from "react";

export default function Curriculum() {
  const [activeTab, setActiveTab] = useState("MBA");
  const [isYearIIDetailsVisible, setIsYearIIDetailsVisible] = useState(false);

  const mbaSubjects = ["MBA Subject 1", "MBA Subject 2", "MBA Subject 3", "MBA Subject 4"];
  const pgdmSubjects = ["PGDM Subject 1", "PGDM Subject 2", "PGDM Subject 3", "PGDM Subject 4"];

  return (
    <>
      <Head>
        <title>Curriculum - MBA & PGDM | Your Institution Name</title>
        <meta
          name="description"
          content="Explore the comprehensive curriculum for our MBA and PGDM programs, covering foundational, functional, and capstone areas designed for future managers."
        />
      </Head>

      <section className="bg-gray-100 py-12" aria-labelledby="curriculum-heading">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            id="curriculum-heading"
            className="text-3xl font-bold text-blue-900 mb-8 text-center"
          >
            CURRICULUM
          </h2>
          <div className="bg-white shadow-md rounded-lg p-6">
            <div className="flex flex-wrap justify-start gap-4 mb-6">
              <button
                onClick={() => setActiveTab("MBA")}
                className={`px-4 py-2 ${
                  activeTab === "MBA"
                    ? "bg-[#012060] text-white"
                    : "bg-gray-200 text-[#012060]"
                } rounded-lg font-medium`}
              >
                MBA
              </button>
              <button
                onClick={() => setActiveTab("PGDM")}
                className={`px-4 py-2 ${
                  activeTab === "PGDM"
                    ? "bg-[#012060] text-white"
                    : "bg-gray-200 text-[#012060]"
                } rounded-lg font-medium`}
              >
                PGDM
              </button>
            </div>

            <p className="text-gray-600 mb-6">
              Core courses cover foundational, common functional, and capstone
              areas that all potential managers need to appreciate. They provide
              the tools and frameworks for analyzing and defining the challenges
              from specific and integrative perspectives.
            </p>

            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                {activeTab} Year I
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full table-auto border-collapse">
                  <thead>
                    <tr className="bg-[#012060] text-white">
                      <th className="px-4 py-3 text-sm font-medium text-left">SUBJECT</th>
                      <th className="px-4 py-3 text-sm font-medium text-left">CREDITS</th>
                    </tr>
                  </thead>
                  <tbody>
                    {(activeTab === "MBA" ? mbaSubjects : pgdmSubjects).map(
                      (subject, index) => (
                        <tr
                          key={index}
                          className={index % 2 === 0 ? "bg-gray-100" : "bg-white"}
                        >
                          <td className="px-4 py-3 text-black">{subject}</td>
                          <td className="px-4 py-3 text-black">5</td>
                        </tr>
                      )
                    )}
                  </tbody>
                </table>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                {activeTab} Year II
              </h3>
              <div className="flex justify-end mb-4">
                <button
                  onClick={() =>
                    setIsYearIIDetailsVisible(!isYearIIDetailsVisible)
                  }
                  className="px-4 py-2 bg-[#012060] text-white rounded-lg flex items-center"
                >
                  {isYearIIDetailsVisible ? "Hide Details" : "Show Details"}
                  <span className="material-icons ml-2">
                    {isYearIIDetailsVisible ? "expand_less" : "expand_more"}
                  </span>
                </button>
              </div>

              {isYearIIDetailsVisible && (
                <div className="mt-4">
                  <p className="text-gray-600 mb-4">
                    Details for Year II curriculum...
                  </p>
                  <div className="overflow-x-auto">
                    <table className="w-full table-auto border-collapse">
                      <thead>
                        <tr className="bg-[#012060] text-white">
                          <th className="px-4 py-3 text-sm font-medium text-left">
                            SUBJECT
                          </th>
                          <th className="px-4 py-3 text-sm font-medium text-left">
                            CREDITS
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {(activeTab === "MBA" ? mbaSubjects : pgdmSubjects).map(
                          (subject, index) => (
                            <tr
                              key={index}
                              className={index % 2 === 0 ? "bg-gray-100" : "bg-white"}
                            >
                              <td className="px-4 py-3 text-black">{subject}</td>
                              <td className="px-4 py-3 text-black">5</td>
                            </tr>
                          )
                        )}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
