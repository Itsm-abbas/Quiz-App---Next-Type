import React, { useContext, useEffect, useState } from "react";
import { useRouter } from "next/router";
import ContentLoader from "react-content-loader";
import { QuizContext } from "../context/category";

const Loader = () => {
  const { category, amount, difficulty } = useContext(QuizContext);
  const [innerWidth, setInnerWidth] = useState(false);
  const router = useRouter();
  useEffect(() => {
    router.replace(
      `startQuiz?category=${category}&amount=${amount}&difficulty=${difficulty.toLowerCase()}`
    );
    if (window.innerWidth > 750) {
      setInnerWidth(true);
    }
  }, [amount, category, difficulty, router]);
  return (
    <div
      style={{
        position: "absolute",
        top: "50%",
        right: "50%",
        transform: "translate(50%,-50%)",
      }}
    >
      {innerWidth ? (
        <ContentLoader
          speed={2}
          width={600}
          height={560}
          viewBox="0 0 400 160"
          backgroundColor="#d9d9d9"
          foregroundColor="#ededed"
        >
          <rect x="50" y="6" rx="4" ry="4" width="343" height="38" />
          <rect x="8" y="6" rx="4" ry="4" width="35" height="38" />
          <rect x="50" y="55" rx="4" ry="4" width="343" height="38" />
          <rect x="8" y="55" rx="4" ry="4" width="35" height="38" />
          <rect x="50" y="104" rx="4" ry="4" width="343" height="38" />
          <rect x="8" y="104" rx="4" ry="4" width="35" height="38" />
        </ContentLoader>
      ) : (
        <ContentLoader
          speed={2}
          width={400}
          height={460}
          viewBox="0 0 400 160"
          backgroundColor="#d9d9d9"
          foregroundColor="#ededed"
        >
          <rect x="50" y="6" rx="4" ry="4" width="343" height="38" />
          <rect x="8" y="6" rx="4" ry="4" width="35" height="38" />
          <rect x="50" y="55" rx="4" ry="4" width="343" height="38" />
          <rect x="8" y="55" rx="4" ry="4" width="35" height="38" />
          <rect x="50" y="104" rx="4" ry="4" width="343" height="38" />
          <rect x="8" y="104" rx="4" ry="4" width="35" height="38" />
        </ContentLoader>
      )}
    </div>
  );
};

export default Loader;
