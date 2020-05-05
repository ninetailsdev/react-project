import React from "react";
import Homage from "./HomePage";
import AboutPage from "./AboutPage";
import Header from "./common/Header";

function App() {
  function getPage() {
    const route = window.location.pathname;
    if (route == "/about") return <AboutPage />;
    return <Homage />;
  }

  return (
    <div className="container-fluid">
      <Header />
      {getPage()}
    </div>
  );
}

export default App;
