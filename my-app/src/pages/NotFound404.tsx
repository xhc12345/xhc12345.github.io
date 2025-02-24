import React, { useEffect } from "react";

const NotFound404 = () => {
  useEffect(() => {
    document.title = "404 - xhc12345"; // Set page title for this route
  }, ["__INIT__"]);

  return (
    <div style={{ padding: "1em" }}>
      <h1>404 Page Not Found!</h1>
    </div>
  );
};

export default NotFound404;
