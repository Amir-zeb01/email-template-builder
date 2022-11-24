import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faBell, faSearch } from "@fortawesome/free-solid-svg-icons";
import { avatar } from "../../assets";
export default function Header({openMenu=()=>{}}) {
  return (
    <header className="header_s0 px-2 p-3">
      <div className="row">
        <div className="col-1 align-self-center me-2">
          <button
            className="btn focus_none d-lg-none px-1 py-1"
            aria-label="open-menu-btn"
            onClick={openMenu}
          >
            <FontAwesomeIcon icon={faBars} className="fs-5 text-dark" />
          </button>
        </div>
        <div className="col">
          <ul className="p-0 m-0 ms-auto list-unstyled d-flex align-items-center justify-content-end">
            <li>
              <form action="">
                <div className="input-group border rounded">
                  <input
                    type="text"
                    className="form-control border-0 focus_none"
                  />
                  <button className="bg-transparent border-0 px-2">
                    <FontAwesomeIcon icon={faSearch} />
                  </button>
                </div>
              </form>
            </li>
            <li>
              <button
                type="button"
                className="btn position-relative p-0 mx-3 focus_none"
              >
                <FontAwesomeIcon icon={faBell} className="text-dark fs-5" />
                <span className="position-absolute top-0 start-100 translate-middle badge border border-light rounded-circle bg-danger p-1">
                  <span className="visually-hidden">unread messages</span>
                </span>
              </button>
            </li>
            <li>
              <a href="#">
                <img
                  src={avatar}
                  alt=""
                  width="35px"
                  className="img-fluid"
                />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
