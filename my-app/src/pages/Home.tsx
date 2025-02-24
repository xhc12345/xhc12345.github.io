import React, { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    document.title = "Home - xhc12345"; // Set page title for this route
  }, ["__INIT__"]);

  return (
    <div style={{ padding: "1em" }}>
      <h1>Home Page</h1>
      <h2>xhc12345</h2>
      <label>Welcome to my home page.</label>
      <br />
      <label>This page is hosted by GitHub.io</label>
      <br />
    </div>
  );
};

export default Home;
