import logo from "./logo.svg";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";
import "./App.css";

let name = "ADITI";

function App() {
  return (
    <>
      <Navbar title="TextUtils" aboutText="About TextUtils" />
      <div className="container my-3">
        <About />
      </div>
    </>
  );
}

export default App;
// export Navbar from "Navbar";
