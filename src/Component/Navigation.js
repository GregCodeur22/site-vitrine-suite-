import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div>
      <div className="navigation">
        <ul>
          <NavLink
            to="/"
            className={(nav) => (nav.isactive ? "nav-active hover" : "hover")}
          >
            <li>acceuil</li>
          </NavLink>

          <li className="nav-portfolio">
            portfolio
            <ul className="nav-projects">
              <NavLink
                to="/project-1"
                className={(nav) =>
                  nav.isactive ? "nav-active hover" : "hover"
                }
              >
                <li>project 1</li>
              </NavLink>
              <NavLink
                to="/project-2"
                className={(nav) =>
                  nav.isactive ? "nav-active hover" : "hover"
                }
              >
                <li>project 2</li>
              </NavLink>
              <NavLink
                to="/project-3"
                className={(nav) =>
                  nav.isactive ? "nav-active hover" : "hover"
                }
              >
                <li>project 3</li>
              </NavLink>
              <NavLink
                to="/project-4"
                className={(nav) =>
                  nav.isactive ? "nav-active hover" : "hover"
                }
              >
                <li>project 4</li>
              </NavLink>
            </ul>
          </li>

          <NavLink
            to="/contact"
            className={(nav) => (nav.isactive ? "nav-active hover" : "hover")}
          >
            <li>contact</li>
          </NavLink>
        </ul>
      </div>
    </div>
  );
};

export default Navigation;
