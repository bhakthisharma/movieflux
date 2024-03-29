import React from "react";
import { useState } from "react";

const Cinema = () => {
  const [color, setColor] = useState("white");
  return (
    <svg
      onMouseOver={() => setColor("dodgerblue")}
      onMouseOut={() => setColor("white")}
      xmlns="http://www.w3.org/2000/svg"
      width="28px"
      height="28px"
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      stroke-width="1.2"
      stroke-linecap="round"
      stroke-linejoin="round"
      class="lucide lucide-clapperboard"
    >
      <path d="M4 11v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8H4Z" />
      <path d="m4 11-.88-2.87a2 2 0 0 1 1.33-2.5l11.48-3.5a2 2 0 0 1 2.5 1.32l.87 2.87L4 11.01Z" />
      <path d="m6.6 4.99 3.38 4.2" />
      <path d="m11.86 3.38 3.38 4.2" />
    </svg>
  );
};

export default Cinema;
