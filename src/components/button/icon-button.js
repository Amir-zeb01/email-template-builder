import React from "react";

import Spinner from "react-bootstrap/Spinner";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function IconButton({
  label,
  icon = false,
  type = "button",
  color = "primary",
  loading = false,
  spinnerColor = "light",
  spinnerSize = "sm",
  labelStyle = "",
  iconStyle = "text-light",
  btnStyle = "",
  rounded = true,
  reverse = false,
  ...props
}) {
  const classes = rounded ? 'rounded-circle ' : '';
  return (
    <button
      type={type}
      className={`p-0 btn btn-${color}` + " " + (rounded ? 'rounded-circle ' : '') + btnStyle}
      {...props}
    >
      <div className="d-flex align-items-center justify-content-center" style={rounded?{width:'35px',height:'35px'}:{}}>
      {loading ?
        <Spinner
          size={spinnerSize}
          animation="border"
          variant={spinnerColor}
        />
        :
        <FontAwesomeIcon icon={icon} className={iconStyle} />
      }
      </div>
    </button>
  );
}
