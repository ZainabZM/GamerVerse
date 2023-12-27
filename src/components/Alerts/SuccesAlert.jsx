import { Alert } from "@mui/material";
import React from "react";

function SuccessAlert({ showSuccessAlert }) {
   return (
      showSuccessAlert && (
         <Alert variant="filled" severity="success" sx={{ width: "75%" }}>
            Vous êtes connecté.
         </Alert>
      )
   );
}

export default SuccessAlert;
