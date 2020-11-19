import React from "react";
import { render } from "react-dom";
import NavigationBar from "./NavigationBar";

const App = () => {
  return (
    <div>
      <h1>Assandra Falls</h1>
      <NavigationBar name="Home" />
    </div>
  );
};

render(<App />, document.getElementById("root"));
