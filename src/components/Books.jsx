import allBooks from "../allBooks.json";
import { Link } from "react-router-dom";

function Books() {
  const bookStyle = {
    margin: "0",
    backgroundColor: "#b5bab97a",
  };

  return (
    <>
      <div className="bg-color" style={bookStyle}>
        <div className="container">
          <div class="row row-cols-1 row-cols-md-3 g-4">
            {allBooks.map((Book) => {
              return (
                <div
                  class="card mx-4 shadow d-flex flex-column my-5"
                  style={{ width: "18rem" }}
                >
                  <div class="card-body">
                    <h5 class="card-title border-bottom border-2">
                      {Book.title}
                    </h5>
                    <p class="card-texte">{Book.summary}</p>
                  </div>
                  <div class="mt-auto card-footer text-body-secondary border my-2 text-center">
                    Rating: {Book.rating}
                  </div>
                  <div class="my-3 d-grid">
                    <Link
                      to={`/books/${Book.id}`}
                      class="btn btn-outline-dark fs-5"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
export default Books;
