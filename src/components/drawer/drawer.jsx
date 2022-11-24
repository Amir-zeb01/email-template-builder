import React, { useState, useEffect } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faSignIn } from "@fortawesome/free-solid-svg-icons";

import { useDispatch } from 'react-redux';
import moment from "moment/moment";

import NavBtn from "./ui-components/nav-btn";
import { paths } from "./paths";
import { logo } from "../../assets";
import { logout } from "../../store/reducer";

export default function Drawer({ closeMenu = () => {}, open = false }) {
  const [timer, setTimer] = useState(null);
  const dispatch = useDispatch();
  useEffect(() => {
    setInterval(() => {
      setTimer(moment().format("hh:mm:ss"));
    }, 1000);
  }, []);

  return (
    <aside className={`${open ? "open " : ""}primary_navigation`} id="drawer">
      <button
        className="bg-transparent border-0 position-absolute d-lg-none"
        style={{ right: "10px", top: "0px" }}
        aria-label="close-menu-btn"
        id="close-menu"
        onClick={closeMenu}
      >
        <FontAwesomeIcon icon={faTimes} />
      </button>
      <div
        className="brand_p0 border-bottom d-flex align-items-center justify-content-center"
        aria-label="site-brand"
      >
        <div className="text-center w-100">
          <img src={logo} width="120px" className="img-fluid" />
        </div>
      </div>
      <nav className="position-relative" aria-label="navigation">
        <ul className="px-0 py-5 m-0 list-unstyled">
          {paths.map((_v, _i) => {
            return (
              <NavBtn
                url={_v.url}
                key={_i}
                iconName={_v.icon}
                title={_v.title}
              />
            );
          })}
          <div className="d-block border-bottom my-5"></div>
          <li className={"nav_item mb-2 py-2 me-2 rounded-end"}>
            <button
              className="nav_link px-0 btn py-0 d-block w-100 text-decoration-none d-flex align-items-center"
              onClick={() => dispatch(logout())}
            >
              <span className="icon_wrapper mx-3 rounded-circle d-flex align-items-center justify-content-center">
                <FontAwesomeIcon icon={faSignIn} />
              </span>
              <h6 className="link_txt m-0">Logout</h6>
            </button>
          </li>
        </ul>
      </nav>
      <div
        id="dateTime"
        className="dt_wrapper border-top px-4 d-flex align-items-center"
      >
        {/* print current date and time */}
        <p>
          {timer ?? "00:00:00"}
          <span>{moment().format("MMMM DD YYYY")}</span>
        </p>
      </div>
    </aside>
  );
}
