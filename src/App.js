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
        <Route path="/books" element={<h1>This is books</h1>} />
        <Route path="/books/:id" element={<h1>Inside a book</h1>} />
        <Route path="*" element={<h1>Invalid Page</h1>} />
      </Routes>
    </>
  );
}

export default App;
