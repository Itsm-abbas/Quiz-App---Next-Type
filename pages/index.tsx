import React from "react";
import ListBox from "../components/ListBox";
import Navbar from "../components/Navbar";
import Link from "next/link";
const Home = () => {
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
  return (
    <>
      <Navbar />
      <section className=" w-11/12 md:w-3/4 py-10 my-0 mx-auto">
        <ListBox data={Select_Category} label="Select Category:" />
        <ListBox data={No_of_Questions} label="No of Questions:" />
        <ListBox data={Difficulty} label="Select Difficulty:" />
        <Link passHref href={`/loader`}>
          <button
            type="submit"
            className="mt-4 w-full text-white bg-pink-500 border-0 py-2 px-8 focus:outline-none hover:bg-pink-600 rounded text-lg"
          >
            Start Quiz
          </button>
        </Link>
      </section>
    </>
  );
};
export default Home;
