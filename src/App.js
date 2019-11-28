import React, { Suspense } from "react";
import { BrowserRouter } from "react-router-dom";
import Routes from "./routes";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Suspense fallback="loading">
          <Routes />
        </Suspense>
      </BrowserRouter>
    </div>
  );
}

export default App;
