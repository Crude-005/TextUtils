// import logo from './logo.svg';
import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Textbox from "./components/Textbox";

function App() {
  const [darkMode, toggleDarkMode] = useState(0);
  const toggleMode = () => {
    if (darkMode) {
      toggleDarkMode(0);
      document.body.style.backgroundColor = "#fff";
      document.body.style.color = "#212529";
    } else {
      toggleDarkMode(1);
      document.body.style.backgroundColor = "#212529";
      document.body.style.color = "#fff";
    }
  };
  return (
    <>
      <Navbar title="TextUtils" mode={darkMode} toggleMode={toggleMode} />
      <div className="container my-3">
        <Textbox heading="Enter your text" mode={darkMode} toggleMode={toggleMode} />
      </div>
    </>
  );
}

export default App;
