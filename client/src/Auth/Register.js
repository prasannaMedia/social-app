import React from "react";

export const Register = () => {
  return (
    <div class="container h-100">
      <div class="row align-items-center h-100">
        <div class="col-md-4"></div>
        <div class="col-md-4 h-100">
          <div class="card p-4 rounded mt-4">
            <h3>Register</h3>
            <form >
              <div class="row mt-4">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Enter Username"
                  name="username"
                  required=""
                />
              </div>
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
                  Register
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
