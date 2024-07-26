import React from "react";
import Typewriter from "typewriter-effect";

const Type = () => {
    return (
        <Typewriter
          options={{
            strings: [
              "Passionate Mobile Developer",
              "Dedicated Team Player & Contributor",
              "Experienced in Agile Envrionments",
              "Startup Enthuaist"
            ],
            autoStart: true,
            loop: true,
            deleteSpeed: 50,
          }}
        />
      )
}

export default Type