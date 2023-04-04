import React from "react";
import { NavLink } from "react-router-dom";
function MyLearningOne() {
  const mystyle = {
    backgroundColor: "#ede7f6",
  };
  return (
    <div class={mystyle}>
      <nav
        class="navbar navbar-expand-lg navbar-dark bg-primary justify-content-center"
        style={{ position: "sticky" }}
      >
        <h1 class="text-white">TRACKS</h1>
      </nav>
      <div className="container mt-2">
        <div className="row my-5 align-items-center justify-content-center">
          <div className="col-md-3 mt-5">
            <div className="card">
              <img
                class="card-img-top"
                src="https://www.trickyenough.com/wp-content/uploads/2020/08/development-1024x689.jpg"
                alt="frontend"
              ></img>
              <div class="card-body">
                <h5 class="card-title">Front-end</h5>
                <button class="btn btn-primary">
                  <NavLink to="/frontend" className="sideNav_Link">
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
                src="https://hashstudioz.com/images/BACK-END-DEVELOPMENT.png"
                alt="backend"
              ></img>
              <div class="card-body">
                <h5 class="card-title">Back-end</h5>
                <button class="btn btn-primary">
                  <NavLink to="/backend" className="sideNav_Link">
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
                src="https://th.bing.com/th/id/OIP.PzuvFP1sqK6mPZMKVJX2PwHaFj?w=232&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7"
                alt="database"
              ></img>
              <div class="card-body">
                <h5 class="card-title">Database</h5>
                <button class="btn btn-primary">
                  <NavLink to="/backend" className="sideNav_Link">
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
