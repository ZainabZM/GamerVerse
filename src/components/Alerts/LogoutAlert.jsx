import React from "react";
import { Alert } from "@mui/material";

function LogoutAlert({ showLogoutAlert }) {
   return (
      showLogoutAlert && (
         <Alert variant="filled" severity="warning">
            Vous vous êtes bien déconnecter. Vous allez être redirigé vers la page de connexion.
         </Alert>
      )
   );
}

export default LogoutAlert;
