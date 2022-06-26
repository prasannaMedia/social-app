import React from "react";

export const Login = () => {
  return (
    <div class="container ">
      <div class="row align-items-center ">
        <div class="col-md-4"></div>
        <div class="col-md-4">
          <div class="card p-4 rounded mt-4">
            <h3>Login</h3>
            <form action="#" method="post">
              <div class="row mt-4">
                <input
                  type="email"
                  class="form-control"
                  placeholder="Enter email"
                  name="email"
                  required=""
                />
              </div>
              <div class="row mt-4">
                <input
                  type="password"
                  class="form-control"
                  placeholder="Enter password"
                  name="password"
                  required=""
                />
              </div>
              <div class="row mt-4">
                <button
                  type="submit"
                  value="submit"
                  class="btn btn btn-primary w-auto"
                >
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
        <div class="col-md-4"></div>
      </div>
    </div>
  );
};
