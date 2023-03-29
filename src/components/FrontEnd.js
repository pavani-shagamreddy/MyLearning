import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import AddResource from "./AddResource";
import { NavLink } from "react-router-dom";
import ViewResource from "./ViewResource";

function FrontEnd() {
  const [open, setOpen] = useState(false);

  const handleClickToOpen = () => {
    setOpen(true);
  };

  const handleToClose = () => {
    setOpen(false);
  };

  return (
    <>
      <div stlye={{}}>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>week</th>
              <th>courseName</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1 - 2</td>
              <td>React fundamenals and Hooks</td>
              <td>
                <Button
                  variant="outlined"
                  color="primary"
                  onClick={handleClickToOpen}
                >
                  Add Resource
                </Button>
                <AddResource isOpen={open} onClose={handleToClose} />
              </td>
              <td>
                <NavLink to="/viewresource">
                  <button>viewresource</button>
                </NavLink>
              </td>
            </tr>
            <tr>
              <td>2 - 4</td>
              <td>React Redux</td>
              <td>
                <Button
                  variant="outlined"
                  color="primary"
                  onClick={handleClickToOpen}
                >
                  Add Resource
                </Button>
                <AddResource isOpen={open} onClose={handleToClose} />
              </td>
              <td>
                <button>viewresource</button>
              </td>
            </tr>
            <tr>
              <td>5 - 6</td>
              <td>Unit Testing using RTL</td>
              <td>
                <Button
                  variant="outlined"
                  color="primary"
                  onClick={handleClickToOpen}
                >
                  Add Resource
                </Button>
                <AddResource isOpen={open} onClose={handleToClose} />
              </td>
              <td>
                <button>viewresource</button>
              </td>
            </tr>
            <tr>
              <td>7 - 8</td>
              <td>Project</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default FrontEnd;
