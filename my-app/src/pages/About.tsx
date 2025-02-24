import React, { useEffect } from "react";

const About = () => {
  useEffect(() => {
    document.title = "About - xhc12345"; // Set page title for this route
  }, ["__INIT__"]);

  return (
    <div style={{ padding: "1em" }}>
      <h1>About</h1>
      <label>
        This is xhc12345's GitHub page where I host some cool stuff.
      </label>
    </div>
  );
};

export default About;
