import React from "react";
import "./Header.css";
import InvertColorsIcon from "@material-ui/icons/InvertColors";
import Tooltip from "@material-ui/core/Tooltip";
import Button from "@material-ui/core/Button";
const Header = () => {
  return (
    <div className="header">
      <div className="leftHeader">
        <img
          src="https://www.gstatic.com/images/branding/product/1x/keep_2020q4_48dp.png"
          alt=""
        />
        <h1>Keep</h1>
      </div>
      <div className="centerHeader">
        <input type="text" placeholder="Search" />
      </div>
      <div className="rightHeader">
        <Button style={{ color: "gold" }}>
          <Tooltip title="Dark Theme Coming soon">
            <InvertColorsIcon />
          </Tooltip>
        </Button>
      </div>
    </div>
  );
};

export default Header;
