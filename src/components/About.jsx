import { Link } from "react-router-dom";

function About() {
  return (
    <>
      <div class="container py-4">
        <header class="pb-3 mb-4 border-bottom">
          <Link
            to="/about"
            class="d-flex align-items-center text-body-emphasis text-decoration-none"
          >
            <span class="fs-4">About Us</span>
          </Link>
        </header>

        <div class="p-5 mb-4 bg-body-tertiary rounded-3">
          <div class="container-fluid py-5">
            <h1 class="display-5 fw-bold">The Books Lookout</h1>
            <p class="col-md-8 fs-4">
              We are an open source book community where you can get information
              about any books that you want from our website in just one click.
            </p>
            <Link class="btn btn-primary btn-lg" to="/books">
              Show Books
            </Link>
          </div>
        </div>

        <div class="row align-items-md-stretch">
          <div class="col-md-6">
            <div class="h-100 p-5 text-bg-dark rounded-3">
              <h2>Change the background</h2>
              <p>
                Swap the background-color utility and add a `.text-*` color
                utility to mix up the jumbotron look. Then, mix and match with
                additional component themes and more.
              </p>
              <button class="btn btn-outline-light" type="button">
                Example button
              </button>
            </div>
          </div>
          <div class="col-md-6">
            <div class="h-100 p-5 bg-body-tertiary border rounded-3">
              <h2>Add borders</h2>
              <p>
                Or, keep it light and add a border for some added definition to
                the boundaries of your content. Be sure to look under the hood
                at the source HTML here as we've adjusted the alignment and
                sizing of both column's content for equal-height.
              </p>
              <button class="btn btn-outline-secondary" type="button">
                Example button
              </button>
            </div>
          </div>
        </div>

        <footer class="pt-3 mt-4 text-body-secondary border-top">© 2023</footer>
      </div>
    </>
  );
}

export default About;
