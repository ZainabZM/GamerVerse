// import { Password, RepartitionRounded } from "@mui/icons-material";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import NavBar from "../layouts/NavBar";
import SuccessAlert from "../Alerts/SuccesAlert";
import ErrorAlert from "../Alerts/ErrorAlert";
import "./Login.css";
//import mui
import LockIcon from "@mui/icons-material/Lock";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import { Box, styled, Button, FormControl, InputLabel, InputAdornment, IconButton, FilledInput, Typography } from "@mui/material";
import { teal } from "@mui/material/colors";
import { Visibility, VisibilityOff } from "@mui/icons-material";

export default function Login() {
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
   const navigate = useNavigate();
   const [error, setError] = useState("");
   const [emailError, setEmailError] = useState("");
   const [passwordError, setPasswordError] = useState("");
   const [showPassword, setShowPassword] = useState(false);
   const [showSuccessAlert, setShowSuccessAlert] = useState(false);
   const [showErrorAlert, setShowErrorAlert] = useState(false);

   const handleInputEmail = (e) => {
      setEmail(e.target.value);
   };

   const handleInputPassword = (e) => {
      setPassword(e.target.value);
   };

   // Appelez l'API du serveur pour vérifier si l'identifiant de messagerie donné existe déjà
   const getLogin = async (e) => {
      e.preventDefault();

      // définir les valeurs d'erreur
      setEmailError("");
      setPasswordError("");

      let options = {
         method: "POST",
         headers: {
            "Content-Type": "application/json",
         },
         body: JSON.stringify({
            email: email,
            password: password,
         }),
      };

      //Appel Api
      try {
         const response = await fetch(`https://social-network-api.osc-fr1.scalingo.io/gamer-verse/login`, options);
         const data = await response.json();
         if (data.success) {
            localStorage.setItem("@TokenUser", data.token);
            setShowSuccessAlert(true);
            setTimeout(() => {
               setShowSuccessAlert(false);
               navigate("/");
            }, 2000);
         } else {
            setShowErrorAlert(true);
            setTimeout(() => {
               setShowErrorAlert(false);
            }, 5000);
            setError(data.message || "Une erreur s'est produite.");
         }
      } catch (error) {
         setError("Une erreur s'est produite lors de la connexion.");
      } // Utilise les données renvoyées par l'API
   };

   // Connectez-l'utilisateur en utilisant l'e-mail et le mdp

   //Couleur button matérial
   const ColorButton = styled(Button)(({ theme }) => ({
      color: theme.palette.getContrastText(teal[500]),
      backgroundColor: teal[500],
      "&:hover": {
         backgroundColor: teal[700],
      },
   }));

   return (
      <>
         <NavBar />
         <div className="mainContainer">
            <SuccessAlert showSuccessAlert={showSuccessAlert} />
            <ErrorAlert showErrorAlert={showErrorAlert} />
            <Box>
               <Typography className="titleContainer" mt={2}>
                  Connexion à votre compte
               </Typography>

               <Box className="inputContainer" alignItems="center" display="flex">
                  <PersonOutlineIcon fontSize="large" sx={{ color: "rgb(175, 179, 199)" }} className="iconInput" />

                  <FormControl sx={{ m: 2, width: "52ch", mt: 3 }} variant="filled">
                     <InputLabel htmlFor="filled-adornment-email">Email</InputLabel>
                     <FilledInput id="filled-adornment-email" type="text" onChange={handleInputEmail} placeholder="Pas d'email..pas de connexion!" variant="filled" value={email} />
                  </FormControl>

                  <label className="errorLabel">{emailError}</label>
               </Box>

               <Box className="inputContainer" alignItems="center" display="flex">
                  <LockIcon fontSize="large" sx={{ color: "rgb(175, 179, 199)" }} className="iconInput" />

                  <FormControl sx={{ m: 2, width: "52ch", mb: 3, mt: 3 }} variant="filled">
                     <InputLabel htmlFor="filled-adornment-password">Password</InputLabel>
                     <FilledInput
                        id="filled-adornment-password"
                        value={password}
                        placeholder="Par ici ton mdp...!"
                        onChange={handleInputPassword}
                        type={showPassword ? "text" : "password"}
                        endAdornment={
                           <InputAdornment position="end">
                              <IconButton aria-label="toggle password visibility" onClick={() => setShowPassword(!showPassword)} onMouseDown={() => setShowPassword(!showPassword)} edge="end">
                                 {showPassword ? <VisibilityOff /> : <Visibility />}
                              </IconButton>
                           </InputAdornment>
                        }
                        label="Password"
                     />
                  </FormControl>
               </Box>
               <Box display="flex" flexDirection="row" gap={2} justifyContent="center" alignItems="center">
                  <ColorButton className={"inputButton"} type="button" onClick={getLogin} value={"Connexion"} id="loginButton">
                     CONNEXION
                  </ColorButton>

                  <Typography
                     sx={{
                        fontSize: 12,
                        textDecoration: "solid",
                        color: "rgb(175, 179, 199)",
                     }}
                  >
                     Mot de passe oublié ?
                  </Typography>
                  <div className="forgetContainer">
                     <div></div>
                  </div>
               </Box>
               <Box textAlign="center" sx={{ mt: 3, fontStyle: "italic", color: "rgb(175, 179, 199)" }}>
                  Vous n'avez pas encore de compte ?
                  <Link to="/Register">
                     <Button> S'inscrire</Button>
                  </Link>
               </Box>
            </Box>
         </div>
         <div className="mario">
            <img src="images\pixel-connectbubble (1).gif" alt="" id="bubble" />
            <img src="https://i.pinimg.com/originals/46/53/d8/4653d885a6dd4bff3b6bcea47a8f8d5a.png" alt="" />
         </div>
      </>
   );
}
