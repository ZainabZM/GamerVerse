// import { Box, Typography } from "@mui/material";
import React from "react";
// import "./leftbar.css";

export default function Leftbar(props) {
  return (
    <div className="leftbarContainer">
      <h1 className="saloonTitle">{props.saloonTitle}</h1>
    </div>
  );
}
