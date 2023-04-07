import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          //"Web Developer",
          "Aspiring Fullstack Software Engineer",
          "Graphic Designer",
          "Open Source Contributor",
          "CEO at LusiTech I.T Consult"
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
