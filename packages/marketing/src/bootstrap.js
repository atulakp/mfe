import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

// Declare a Mount function to start app
const mount = (el) => {
  ReactDOM.render(<App />, el);
};

// check if we running in dev if yes go ahead and call mount function
if (process.env.NODE_ENV == "development") {
  const devRoot = document.querySelector("#_marketing-dev-root");
  if (devRoot) {
    mount(devRoot);
  }
}

// running via container
export { mount };
