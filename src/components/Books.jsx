import { Link } from "react-router-dom";
import allBooks from "../allBooks.json";

function Books() {
  return (
    <>
      <div className="container">
        <div class="row row-cols-1 row-cols-md-3 g-4 m-2">
          {allBooks.map((Book) => {
            return (
              <div class="card m-4 shadow-sm" style={{ width: "18rem" }}>
                <div class="card-body">
                  <h5 class="card-title border-bottom border-2">
                    {Book.title}
                  </h5>
                  <p class="card-texte">{Book.summary}</p>
                  <Link to={`/books/${Book.id}`} class="btn btn-light fs-5">
                    Rating: {Book.rating}
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
export default Books;
