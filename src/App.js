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

        {/* Normal Routing.
        <Route path="/books" element={<h1>This is books</h1>} />
        <Route path="/books/:id" element={<h1>Inside a book</h1>} />
        <Route path="/books/new" element={<h1>Add a new book</h1>} />
        <Route path="*" element={<h1>Invalid Page</h1>} /> */}

        {/* Nested Routing */}
        <Route path="/books">
          <Route index element={<h1>This is Books</h1>} />
          <Route path=":id" element={<h1>Inside a Book</h1>} />
          <Route path="new" element={<h1>Add a new Book</h1>} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
