import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Where Talent Meets Opportunity",
          "Connecting Ambitions with Possibilities",
          "Your Gateway to a Dream Career",
          "Empowering Students, Building Careers",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
