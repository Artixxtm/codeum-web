"use client";

import { useEffect, useRef, useState } from "react";

const StretchedText = ({ className, basedVB, fill, words, wordsClassNames, stroke = "none", strokeWidth }) => {
  const svgRef = useRef(null);
  const textRef = useRef(null);
  const [viewBox, setViewBox] = useState(basedVB);

  useEffect(() => {
    const updateViewBox = () => {
      if (textRef.current) {
        const bbox = textRef.current.getBBox();
        setViewBox(`${bbox.x} ${bbox.y} ${bbox.width} ${bbox.height}`);
      }
    };

    const timeout = setTimeout(() => {
      updateViewBox();
      if (svgRef.current) {
        const observer = new ResizeObserver(updateViewBox);
        observer.observe(svgRef.current);
        return () => observer.disconnect();
      }
    }, 100);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <svg
      ref={svgRef}
      viewBox={viewBox}
      className={className}
      fill={fill}
      stroke={stroke}
      strokeWidth={strokeWidth}
      preserveAspectRatio="none"
    >
      <text
        ref={textRef}
        x="0"
        y="0"
        textAnchor="start"
        lengthAdjust="spacingAndGlyphs"
        alignmentBaseline="baseline"
        dominantBaseline="hanging"
      >
        {words.map((word, index) => (
          <tspan
            key={index}
            alignmentBaseline="baseline"
            className={wordsClassNames[index]}
          >
            {word}
          </tspan>
        ))}
      </text>
    </svg>
  );
};

export default StretchedText;
