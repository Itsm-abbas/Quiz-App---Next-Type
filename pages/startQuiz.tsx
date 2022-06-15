import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
type Props = {
  data: any[];
};

const StartQuiz = ({ data }: Props) => {
  const [value, setValue] = useState<number>(0);
  const [single, setSingle] = useState(data[0]);
  const [score, setScore] = useState(1);
  const [click, setClick] = useState(false);
  const [clickValue, setClickValue] = useState("");
  const [index, setIndex] = useState(0);
  let addquote = single?.question.replace(/&#039;/g, `'`);
  let newQuestion = addquote?.replace(/&quot;/g, `"`);

  //Pushing answers object to data..
  if (single != undefined) {
    single.answers = [...single?.incorrect_answers, single?.correct_answer];
  }

  // Next button handler
  const NextHandler = () => {
    setValue(value + 1);
    setSingle(data[value + 1]);
    setClick(false);
  };

  // UseRef
  const refs = useRef(single?.answers.map(() => React.createRef()));

  // Answer click handler
  const clickHandler = (e: any, index: number) => {
    setIndex(index);
    setClickValue(e.target.innerText);
    setClick(true);
  };

  // Save to local storage
  const StoreBtn = () => {
    // Save Score
    let GetScore = JSON.parse(localStorage.getItem("score")!);
    if (GetScore === null) GetScore = [];
    GetScore.push(score + "/" + data.length);
    localStorage.setItem("score", JSON.stringify(GetScore));
    // Save Subject
    let GetSubject = JSON.parse(localStorage.getItem("subject")!);
    if (GetSubject === null) GetSubject = [];
    GetSubject.push(single.category);
    localStorage.setItem("subject", JSON.stringify(GetSubject));
    //Save Deficulty
    let GetDifficulty = JSON.parse(localStorage.getItem("difficulty")!);
    if (GetDifficulty === null) GetDifficulty = [];
    GetDifficulty.push(single.difficulty);
    localStorage.setItem("difficulty", JSON.stringify(GetDifficulty));
  };
  useEffect(() => {
    if (clickValue === single?.correct_answer) {
      setScore((prev) => prev + 1);
    }
    if (click) {
      refs.current[index].current.classList.add("bg-gray-500");
      refs.current[index].current.classList.add("text-white");
    }
  }, [
    click,
    clickValue,
    data,
    index,
    single?.correct_answer,
    single.incorrect_answers,
    value,
  ]);
  if (data.length != 0) {
    return (
      <section className="bg-gray-200 min-h-screen">
        <main className="w-11/12 md:w-3/4 py-10 my-0 mx-auto ">
          <h1 className="font-extrabold text-center text-pink-500 text-4xl md:text-5xl mb-10 ">
            {single.category} Quiz
          </h1>
          {value < data.length - 1 && (
            <div className="flex flex-col justify-start items-start md:w-11/12 lg:w-3/4 m-auto py-12 px-6 md:px-16 shadow-md rounded-md bg-white">
              <h1 className="text-gray-800 md:text-xl font-bold mb-7">
                {newQuestion}
              </h1>
              {single.answers.map((answer: string, index: number) => {
                return (
                  <div
                    ref={refs.current[index]}
                    onClick={(e) => clickHandler(e, index)}
                    key={index}
                    className={`${
                      click && "pointer-events-none"
                    }  hover:bg-gray-200 cursor-pointer p-3 border-[1px] border-gray-400 w-full mb-4 rounded-md`}
                  >
                    {answer}
                  </div>
                );
              })}

              <div className="mt-10 w-full">
                {click && (
                  <button
                    onClick={NextHandler}
                    className="float-right bg-pink-500 hover:bg-pink-400 text-white font-bold py-2 px-4 rounded-md"
                  >
                    Next
                  </button>
                )}
              </div>
            </div>
          )}
          {value == data.length - 1 && (
            <div className="p-4 ">
              <div className="h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center">
                <h1 className="title-font sm:text-4xl text-4xl font-medium text-gray-900 mb-10">
                  Score : {score}
                </h1>
                <div className="text-center mt-2 leading-none flex justify-center absolute bottom-0 left-0 w-full py-4"></div>
                <div className="p-2 w-full">
                  {(score / data.length) * 100 >= 50 ? (
                    <Link href={"/"} passHref>
                      <button
                        onClick={StoreBtn}
                        className="flex mx-auto text-white bg-pink-500 border-0 py-2 px-8 focus:outline-none hover:bg-pink-400 rounded text-lg"
                      >
                        Congratulations your score is{" "}
                        {(score / data.length) * 100}% <br />
                        Click me to go back
                      </button>
                    </Link>
                  ) : (
                    <Link href={"/"} passHref>
                      <button
                        onClick={StoreBtn}
                        className="flex mx-auto text-white bg-pink-500 border-0 py-2 px-8 focus:outline-none hover:bg-pink-400 rounded text-lg"
                      >
                        Your score is below 50% but you can try again. <br />
                        Click me to go back
                      </button>
                    </Link>
                  )}
                </div>
              </div>
            </div>
          )}
        </main>
      </section>
    );
  } else {
    return (
      <div role="alert">
        <div className="bg-red-500 text-white font-bold rounded-t px-4 py-2">
          Alert
        </div>
        <div className="border border-t-0 border-red-400 rounded-b bg-red-100 px-4 py-3 text-red-700">
          <p>
            Not enought questions available.Please select less questions to
            start
          </p>
          <Link href={"/"} passHref>
            <button className="mt-10 w-36 h-10 bg-blue-600 text-white">
              Go back
            </button>
          </Link>
        </div>
      </div>
    );
  }
};

export default StartQuiz;
export const getServerSideProps = async (context: {
  query: { category: number; amount: number; difficulty: string; type: string };
}) => {
  const category = context.query.category;
  const amount = context.query.amount;
  const difficulty = context.query.difficulty;
  const data = await fetch(
    `https://opentdb.com/api.php?amount=${amount}&category=${category}&difficulty=${difficulty}&type=multiple`
  );
  const result = await data.json();
  return {
    props: {
      data: result.results,
    },
  };
};
