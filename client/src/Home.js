import "./App.css";
import { Navbar } from "./Header/Navbar";

function Home() {
  return (
    <>
      <Navbar />
      <div class="container">
        <div class="row">
          <div class="col-md-3"></div>
          <div class="col-md-6">
            <div class="card mt-4">
              <div class="card-header text-center">Home Page</div>
              <div class="card-body p-1">
                <img
                  src="https://images.unsplash.com/photo-1562577309-4932fdd64cd1"
                  alt=""
                  class="img-fluid"
                />
              </div>
              <div class="card-footer text-center">
                Welcome to the Rubric home page.
              </div>
            </div>
          </div>
          <div class="col-md-3"></div>
        </div>
      </div>
    </>
  );
}

export default Home;
