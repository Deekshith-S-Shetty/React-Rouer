import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<h1>HI</h1>} />
        <Route path="/about" element={<h1>This is about</h1>} />
      </Routes>
    </>
  );
}

export default App;
