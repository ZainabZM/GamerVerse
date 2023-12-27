import React from "react";
import { Alert } from "@mui/material";
import { useNavigate } from "react-router";

function NeedConnexionAlert() {
   const navigate = useNavigate();

   const renderAlert = () => {
      setTimeout(() => {
         console.log("TEST");
         <Alert variant="filled" severity="error">
            Merci de vous connectez pour accéder à cette fonctionnalité.
         </Alert>;
         navigate("/login");
      }, 3000);
   };

   return <>{renderAlert()}</>;
}

export default NeedConnexionAlert;
