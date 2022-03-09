import { Box } from "@mui/material";
import React from "react";
import Logo from "../assets/images/Logo.png";
import Algorismic from "../assets/images/Algorismic.png";

export default function Footer() {
  return (
    <Box sx={{   backgroundColor: "#C4C4C4",}}>
      <Box className="container" 
sx={{
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
 
    paddingY: '70px'
  }}>
        <Box>
          <img src={Logo} alt="logo" />
        </Box>
        <Box>
          <img src={Algorismic} alt="algorismic" />
        </Box>
      </Box>
    </Box>
  );
}


