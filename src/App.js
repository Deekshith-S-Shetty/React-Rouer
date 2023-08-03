import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Home from "./components/Home";
import Books from "./components/Books";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />

        {/* Normal Routing.
        <Route path="/books" element={<h1>This is books</h1>} />
        <Route path="/books/:id" element={<h1>Inside a book</h1>} />
        <Route path="/books/new" element={<h1>Add a new book</h1>} />
        <Route path="*" element={<h1>Invalid Page</h1>} /> */}

        {/* Nested Routing */}
        <Route path="/books">
          <Route index element={<Books />} />
          <Route path=":id" element={<h1>Inside a Book</h1>} />
          <Route path="new" element={<h1>Add a new Book</h1>} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
