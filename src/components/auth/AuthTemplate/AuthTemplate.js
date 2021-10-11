import React from "react";
import { Link } from "react-router-dom";

import "./AuthTemplate.css";

// eslint-disable-next-line react/prop-types
const AuthTemplate = ({ children }) => {
  return (
    // eslint-disable-next-line react/prop-types
    <div className={`auth__template__${children.props.type}`}>
      <div className="auth__float-box">
        <Link to="/" className="auth__brand">
          라이트보드테스트
        </Link>
        {children}
      </div>
    </div>
  );
};

export default AuthTemplate;
