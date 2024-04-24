// import logo from "./logo.svg";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
// import About from "./components/About";
import React, { useState } from "react";
import "./App.css";

// let name = "ADITI";

function App() {
  const [mode, setMode] = useState("light"); // whether darkmode is enabled or not
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      // document.body.style.backgroundColor = "yellow";
    } else {
      setMode("light");
    }
  };
  return (
    <>
      <Navbar
        title="TextUtils"
        mode={mode}
        toggleMode={toggleMode}
        aboutText="About TextUtils"
      />
      <div className="container my-3">
        <TextForm />
      </div>
    </>
  );
}

export default App;
// export Navbar from "Navbar";
