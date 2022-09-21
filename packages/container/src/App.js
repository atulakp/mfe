import React from "react";
import MarketingApp from "./components/MarketingApp";

function App(props) {
  return (
    <div>
      Hi There from Container App and passing marketing App
      <hr />
      <MarketingApp />
    </div>
  );
}

export default App;
