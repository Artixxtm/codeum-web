"use client";

import StretchedText from "./StretchedText";

const HeadText = ({className, words, wordsClassNames, fill = "#fff"}) => {
  return (
    <div className={`w-full relative h-auto ${className}`}>
      <StretchedText
        className={"w-full relative cursor-default"}
        fill={fill}
        words={words}
        wordsClassNames={wordsClassNames}
        basedVB="0 -2.92 137.97 18.84"
      />

      <StretchedText
        className={
          "w-full cursor-default z-[2] mix-blend-difference absolute inset-0"
        }
        fill={fill}
        words={words}
        wordsClassNames={wordsClassNames}
        basedVB="0 -2.92 137.97 18.84"
      />
    </div>
  );
};

export default HeadText;
