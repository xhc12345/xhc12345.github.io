import React, { useEffect } from "react";

const joinPath = (...inputs: string[]): string => {
  let ret: string = "/";
  let joinedInputs = inputs.join("/");
  ret += joinedInputs;
  return ret;
};

const BASE_FOLDER: string = "simulators";
const SIMULATORS_PAGES: { fileName: string; text: string }[] = [
  { fileName: "mech-link-nand-demo.html", text: "2-inputs NAND gate" },
];
const SIMULATORS_PATHS: string[] = SIMULATORS_PAGES.map((p) =>
  joinPath(BASE_FOLDER, p.fileName)
);

const MechanicalGateSimulator = () => {
  useEffect(() => {
    document.title = "Simulators - xhc12345"; // Set page title for this route
  }, ["__INIT__"]);

  return (
    <div style={{ padding: "1em" }}>
      <h1>MechanicalGateSimulator</h1>
      <label>Here a list of the HTMLs simulators for mechanical gates.</label>
      <ul>
        {SIMULATORS_PATHS.map((path, i) => {
          const fName = path.split("/").pop();
          return (
            <li key={i}>
              <a
                href={path}
                title="Open in new tab"
                target="_blank"
                rel="noopener noreferrer"
                style={{ marginRight: "1em" }}
              >
                {SIMULATORS_PAGES[i].text}
              </a>
              <a href={path} download={fName} title="Download the simulator">
                <button>Download</button>
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default MechanicalGateSimulator;
