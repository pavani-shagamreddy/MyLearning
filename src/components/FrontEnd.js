import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import AddResource from "./AddResource";
function FrontEnd() {
  const [open, setOpen] = useState(false);

  const handleClickToOpen = () => {
    setOpen(true);
  };

  const handleToClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Frontend</h1>
      <div className="row  m-4">
        <div className="col-xl-6 mr-4">
          <div className="card" style={{ width: "95%" }}>
            <div className="card-body">
              <div className="d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center">
                  <button type="button" class="btn btn-secondary ">
                    WEEK
                    <br /> (1 - 2)
                  </button>
                  <div className="ms-3">
                    <p className="fw-bold mb-1">React fundamentals and Hooks</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="card-footer border-0 bg-light p-1 d-flex justify-content-around">
              <div class="card-footer border-0 bg-light p-1 d-flex justify-content-around">
                <button
                  type="button"
                  class="btn btn-outline-primary btn-sm"
                  style={{ marginRight: "40px" }}
                  onClick={handleClickToOpen}
                >
                  Add Resource
                </button>
                <AddResource isOpen={open} onClose={handleToClose} />
                <button type="button" class="btn btn-outline-primary btn-sm ">
                  <NavLink
                    to="/viewresource"
                    role="button"
                    style={{ textDecoration: "none" }}
                  >
                    View Resources
                  </NavLink>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row  m-4">
        <div className="col-xl-6 mr-4">
          <div className="card" style={{ width: "95%" }}>
            <div className="card-body">
              <div className="d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center">
                  <button type="button" class="btn btn-secondary ">
                    WEEK <br />
                    (3 - 4)
                  </button>
                  <div className="ms-3">
                    <p className="fw-bold mb-1">React Routing, Redux and Git</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="card-footer border-0 bg-light p-1 d-flex justify-content-around">
              <div class="card-footer border-0 bg-light p-1 d-flex justify-content-around">
                <button
                  type="button"
                  class="btn btn-outline-primary btn-sm"
                  style={{ marginRight: "40px" }}
                  onClick={handleClickToOpen}
                >
                  Add Resource
                </button>
                <AddResource Open={open} onClose={handleToClose} />
                <button type="button" class="btn btn-outline-primary btn-sm ">
                  <NavLink
                    to="/viewresource"
                    role="button"
                    style={{ textDecoration: "none" }}
                  >
                    View Resources
                  </NavLink>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row  m-4">
        <div className="col-xl-6 mr-4">
          <div className="card" style={{ width: "95%" }}>
            <div className="card-body">
              <div className="d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center">
                  <button type="button" class="btn btn-secondary ">
                    WEEK <br />
                    (5 - 6)
                  </button>
                  <div className="ms-3">
                    <p className="fw-bold mb-1">
                      React Testing and Folder structure
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="card-footer border-0 bg-light p-1 d-flex justify-content-around">
              <div class="card-footer border-0 bg-light p-1 d-flex justify-content-around">
                <button
                  type="button"
                  class="btn btn-outline-primary btn-sm"
                  style={{ marginRight: "40px" }}
                  onClick={handleClickToOpen}
                >
                  Add Resource
                </button>
                <AddResource isOpen={open} onClose={handleToClose} />
                <button type="button" class="btn btn-outline-primary btn-sm ">
                  <NavLink
                    to="/viewresource"
                    role="button"
                    style={{ textDecoration: "none" }}
                  >
                    View Resources
                  </NavLink>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row  m-4">
        <div className="col-xl-6 mr-4">
          <div className="card" style={{ width: "95%" }}>
            <div className="card-body">
              <div className="d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center">
                  <button type="button" class="btn btn-secondary ">
                    WEEK <br />
                    (7 - 8)
                  </button>
                  <div className="ms-3">
                    <p className="fw-bold mb-1">Project</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="card-footer border-0 bg-light p-1 d-flex justify-content-around">
              <div class="card-footer border-0 bg-light p-1 d-flex justify-content-around">
                <button
                  type="button"
                  class="btn btn-outline-primary btn-sm"
                  style={{ marginRight: "40px" }}
                  onClick={handleClickToOpen}
                >
                  Add Resource
                </button>
                <AddResource isOpen={open} onClose={handleToClose} />
                <button type="button" class="btn btn-outline-primary btn-sm ">
                  <NavLink
                    to="/viewresource"
                    role="button"
                    style={{ textDecoration: "none" }}
                  >
                    View Resources
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

export default FrontEnd;
