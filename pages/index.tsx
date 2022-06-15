import React, { useContext, useEffect, useState } from "react";
import ListBox from "../components/ListBox";
import Navbar from "../components/Navbar";
import Link from "next/link";
import { useRouter } from "next/router";
import { FaTimes } from "react-icons/fa";
const Home = () => {
  const router = useRouter();
  const [name, setName] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [toggleName, setToggleName] = useState(false);
  const [getname, setGetName] = useState("");
  const [score, setScore] = useState([]);
  const [subject, setSubject] = useState([]);
  const [deficulty, setDeficulty] = useState([]);
  const SubmitBtn = () => {
    localStorage.setItem("name", JSON.stringify(name));
  };
  const deleteRecord = () => {
    localStorage.removeItem("name");
    localStorage.removeItem("subject");
    localStorage.removeItem("score");
    localStorage.removeItem("difficulty");
    router.reload();
  };
  const Select_Category = [
    "Sports",
    "General Knowledge",
    "Geography",
    "Politics",
    "History",
    "Books",
    "Film",
    "Music",
    "Musicals and Theatres",
    "Television",
    "Video games",
    "Board games",
    "Science and Nature",
    "Computers",
    "Mathematics",
    "Mythology",
    "Celebrities",
    "Animals",
    "Vehicles",
    "Art",
    "Comics",
    "Gadgets",
    "Cartoon and Animations",
  ];
  const Difficulty = ["Easy", "Medium", "Hard"];
  const No_of_Questions = [5, 10, 15, 20, 25, 30];
  useEffect(() => {
    setGetName(JSON.parse(localStorage.getItem("name")!));
    setScore(JSON.parse(localStorage.getItem("score")!));
    setSubject(JSON.parse(localStorage.getItem("subject")!));
    setDeficulty(JSON.parse(localStorage.getItem("difficulty")!));
  }, []);
  return (
    <main className="relative h-screen w-full overflow-hidden">
      <Navbar />
      {getname !== null && (
        <p className="animate-bounce w-full text-center mt-10 text-2xl md:text-4xl text-pink-600">
          Welcome {getname}
        </p>
      )}
      <section
        className={`${toggleName ? "invisible" : ""} ${
          showModal ? "opacity-5" : ""
        } w-11/12 md:w-3/4 py-10 my-0 mx-auto `}
      >
        <ListBox data={Select_Category} label="Select Category:" />
        <ListBox data={No_of_Questions} label="No of Questions:" />
        <ListBox data={Difficulty} label="Select Difficulty:" />
        {getname !== null ? (
          <Link passHref href={`/loader`}>
            <button
              type="submit"
              className="mt-4 w-full text-white transition duration-500 bg-pink-500 border-0 py-2 px-8 focus:outline-none hover:bg-pink-600 rounded text-lg"
            >
              Start Quiz
            </button>
          </Link>
        ) : (
          <button
            onClick={() => setToggleName(true)}
            type="submit"
            className="mt-4 w-full text-white transition duration-500 bg-pink-500 border-0 py-2 px-8 focus:outline-none hover:bg-pink-600 rounded text-lg"
          >
            Start Quiz
          </button>
        )}
      </section>
      {/* Name section */}
      <div
        className={` transition duration-300 ${
          !toggleName ? "hidden" : "block"
        }  shadow-xl p-10 bg-white w-[97%] md:w-1/2 max-w-xl rounded absolute top-1/3 left-1/2 transfrom  translate-x-[-50%] translate-y-[-50%]`}
      >
        <FaTimes
          className="absolute right-4 top-4 cursor-pointer text-pink-500 text-xl md:text-2xl "
          onClick={() => setToggleName(false)}
        />
        <h1 className="text-2xl font-bold mb-8">Enter your name please</h1>
        <div className="mb-4 relative">
          <input
            className="input border border-gray-400 appearance-none rounded w-full px-3 py-3 pt-5 pb-2 focus focus:border-pink-500 focus:outline-none active:outline-none active:border-pink-500"
            onChange={(e) => setName(e.target.value)}
            value={name}
            id="name"
            type="text"
          />
          <label
            htmlFor="name"
            className="label absolute mt-0 pt-4 pl-3 leading-tighter text-gray-400 text-base cursor-text"
          >
            Name
          </label>
        </div>
        {name.length > 3 && (
          <Link passHref href={`/loader`}>
            <button
              onClick={SubmitBtn}
              className="bg-pink-500 transition duration-500 hover:bg-pink-600 text-white font-bold py-3 px-6 rounded"
            >
              Submit
            </button>
          </Link>
        )}
      </div>
      {/* Modal */}
      <button
        className="fixed bottom-5 right-5 bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        type="button"
        onClick={() => setShowModal(true)}
      >
        Show Profile
      </button>
      {showModal ? (
        <>
          <div className="justify-center items-center flex  overflow-y-scroll fixed inset-0 z-50 outline-none focus:outline-none ">
            <div className="max-h-screen relative w-full  my-6 mx-auto md:w-1/2">
              {/*content*/}
              <div className="p-2 md:p-6 rounded-lg shadow-2xl relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between py-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold text-pink-600">
                    {"Name : " + getname}
                  </h3>
                </div>
                {/*body*/}
                <div className="relative  flex-auto">
                  <div className="relative overflow-x-auto shadow-2xl sm:rounded-lg">
                    {/* Table content */}
                    {score != null ? (
                      <table className="w-full text-sm text-left text-white bg-black dark:text-gray-400">
                        <thead className="text-xs text-black uppercase dark:bg-gray-300 dark:text-dark">
                          <tr>
                            <th scope="col" className="px-6 py-3">
                              S.No
                            </th>
                            <th scope="col" className="px-6 py-3">
                              Subject
                            </th>
                            <th scope="col" className="px-6 py-3">
                              Deficulty
                            </th>
                            <th scope="col" className="px-6 py-3">
                              Score
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {score !== null &&
                            score.map((item, index) => {
                              return (
                                <tr
                                  key={index}
                                  className="bg-white text-black border-b dark:bg-gray-300 dark:border-gray-700"
                                >
                                  <td className="px-6 py-4 font-medium text-gray-900 dark:text-black whitespace-nowrap">
                                    {index + 1}
                                  </td>
                                  <td className="px-6 py-4">
                                    {subject != null && subject[index]}
                                  </td>
                                  <td className="px-6 py-4">
                                    {deficulty != null && deficulty[index]}
                                  </td>
                                  <td className="px-6 py-4">{item}</td>
                                </tr>
                              );
                            })}
                        </tbody>
                      </table>
                    ) : (
                      <h2>No record to show</h2>
                    )}
                  </div>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                  {score != null && (
                    <button
                      className="bg-red-500 text-white active:bg-red-600 font-bold uppercase text-sm px-4 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="button"
                      onClick={deleteRecord}
                    >
                      Delete Record
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </main>
  );
};
export default Home;
