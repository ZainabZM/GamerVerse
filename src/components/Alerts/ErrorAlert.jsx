import React from "react";
import { Alert } from "@mui/material";

function ErrorAlert({ showErrorAlert }) {
   return (
      showErrorAlert && (
         <Alert variant="filled" severity="error">
            Adresse email ou mot de passe incorect. Merci de recommencer.
         </Alert>
      )
   );
}

export default ErrorAlert;
