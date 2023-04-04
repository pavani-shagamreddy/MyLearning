import React from "react";
import { NavLink } from "react-router-dom";
function MyLearningOne() {
  const mystyle = {
    backgroundColor: "#ede7f6",
  };
  return (
    <div class={mystyle}>
      <nav
        class="navbar navbar-expand-lg navbar-dark  justify-content-center"
        style={{
          position: "sticky",
          backgroundColor: "#009fdb",
          height: "60px",
        }}
      >
        <h1 class="text-white">TRACKS</h1>
      </nav>
      <div className="container mt-2">
        <div className="row my-5 align-items-center justify-content-center">
          <div className="col-md-3 mt-5">
            <div className="card">
              <img
                class="card-img-top"
                src="https://th.bing.com/th/id/OIP.Y_sY0gD0wKumAdCyUWK5pgHaEK?pid=ImgDet&rs=1"
                alt="frontend"
              ></img>
              <div class="card-body">
                <h5 class="card-title">Front-end</h5>
                <button
                  type="button"
                  class="btn btn-primary"
                  style={{ backgroundColor: "#009fdb" }}
                >
                  <NavLink
                    to="/frontend"
                    className="sideNav_Link"
                    style={{ textDecoration: "none" }}
                  >
                    <h6 class="text-white">TRACK-1</h6>
                  </NavLink>
                </button>
              </div>
            </div>
          </div>
          <div className="col-md-3 mt-5">
            <div className="card">
              <img
                class="card-img-top"
                src="https://th.bing.com/th/id/OIP.IFS6BChELXFCVmG_TynJWwHaEO?pid=ImgDet&rs=1"
                alt="backend"
              ></img>
              <div class="card-body">
                <h5 class="card-title">Back-end</h5>
                <button
                  class="btn btn-primary"
                  style={{ backgroundColor: "#009fdb" }}
                >
                  <NavLink
                    to="/backend"
                    className="sideNav_Link"
                    style={{ textDecoration: "none" }}
                  >
                    <h6 class="text-white">TRACK-2</h6>
                  </NavLink>
                </button>
              </div>
            </div>
          </div>
          <div className="col-md-3 mt-5">
            <div className="card">
              <img
                class="card-img-top"
                src="https://myventurepad.com/wp-content/uploads/2017/07/database.jpg"
                alt="database"
              ></img>
              <div class="card-body">
                <h5 class="card-title">Database</h5>
                <button
                  class="btn btn-primary"
                  style={{ backgroundColor: "#009fdb" }}
                >
                  <NavLink
                    to="/backend"
                    className="sideNav_Link"
                    style={{ textDecoration: "none" }}
                  >
                    <h6 class="text-white">TRACK-3</h6>
                  </NavLink>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyLearningOne;
