import React from "react";

import Spinner from "react-bootstrap/Spinner";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function MyButton({
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
  reverse = false,
  ...props
}) {
  return (
    <button
      type={type}
      className={`btn btn-${color}` + " " + btnStyle}
      {...props}
    >
      <div
        className={
          "d-flex align-items-center justify-content-center" +
          (reverse ? " flex-row-reverse" : "")
        }
      >
        {loading || icon ?
          <div className={reverse ? "ms-2" : "me-2"}>
            {loading && (
              <Spinner
                size={spinnerSize}
                animation="border"
                variant={spinnerColor}
              />
            )}
            {!loading && icon && (
              <FontAwesomeIcon icon={icon} className={iconStyle} />
            )}
          </div>
          :
          null
        }
        <p className={"mb-0" + " " + labelStyle}>{label}</p>
      </div>
    </button>
  );
}
