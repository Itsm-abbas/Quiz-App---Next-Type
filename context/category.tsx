import React, { useState, createContext } from "react";
export const QuizContext = createContext<{
  setCategory: React.Dispatch<React.SetStateAction<number>>;
  category: number;
  setAmount: React.Dispatch<React.SetStateAction<number>>;
  amount: number;
  setDifficulty: React.Dispatch<React.SetStateAction<string>>;
  difficulty: string;
  setName: React.Dispatch<React.SetStateAction<string>>;
  name: string;
}>(
  //@ts-ignore
  null
);
type Props = {
  children: React.ReactNode;
};
const QuizContextProvider = ({ children }: Props) => {
  const [category, setCategory] = useState<number>(9);
  const [amount, setAmount] = useState<number>(10);
  const [difficulty, setDifficulty] = useState<string>("easy");
  const [name, setName] = useState<string>("");

  return (
    <QuizContext.Provider
      value={{
        setCategory,
        category,
        setAmount,
        amount,
        setDifficulty,
        difficulty,
        setName,
        name,
      }}
    >
      {children}
    </QuizContext.Provider>
  );
};

export default QuizContextProvider;
