import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComments } from "@fortawesome/free-solid-svg-icons";
import { NavLink, useMatch } from "react-router-dom";

export default function NavBtn({ url, iconName, title }) {
    const isCurrentRoute = useMatch(url);
    return (
        <li className={`${isCurrentRoute? "active ": ""}  nav_item mb-2 py-2 me-2 rounded-end`}>
            <NavLink
                to={url}
                className="nav_link text-decoration-none d-flex align-items-center"
            >
                <span className="icon_wrapper mx-3 rounded-circle d-flex align-items-center justify-content-center">
                    <FontAwesomeIcon icon={iconName} />
                </span>
                <h6 className="link_txt m-0">{title}</h6>
            </NavLink>
        </li>
    );
}