import React from "react";
import "./Signin.css";
// import logo from "../assets"

export default function SignIn() {
  return (
    <section className="ftco-section">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6 text-center mb-4">
            <h2 className="heading-section">Signin</h2>
            <div
              className="container-icono"
              style={{ display: "flex", justifyContent: "space-around" }}
            >
              <img
                src="https://entel-iot.pe/img/logo.png"
                style={{ width: "180px" }}
                alt="Entel"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-lock"
                viewBox="0 0 16 16"
              >
                <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2zM5 8h6a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1z" />
              </svg>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-md-6 col-lg-4">
            <div className="login-wrap p-0">
              <form action="#" className="signin-form">
                <div className="form-group mb-3">
                  <input
                    type="text"
                    className="form-control"
                    style={{
                      background: "rgba(255, 255, 255, 0.08)",
                      color: "#fff",
                    }}
                    placeholder="Username"
                    required
                  />
                </div>
                <div className="form-group mb-3">
                  <input
                    id="password-field"
                    type="password"
                    className="form-control"
                    style={{
                      background: "rgba(255, 255, 255, 0.08)",
                      color: "#fff",
                    }}
                    placeholder="Password"
                    required
                  />
                  <span className="fa fa-fw fa-eye field-icon toggle-password"></span>
                </div>
                <div className="form-group">
                  <button
                    type="submit"
                    className="form-control btn btn-primary submit px-3"
                  >
                    Sign In
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
