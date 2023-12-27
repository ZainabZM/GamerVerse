import * as React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";

import MenuIcon from "@mui/icons-material/Menu";

import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";

import { ThemeProvider, createTheme } from "@mui/material/styles";

import LogoutAlert from "../Alerts/LogoutAlert";
import NeedConnexionAlert from "../Alerts/NeedConnexionAlert";
import { Alert } from "@mui/material";

// const token = localStorage.getItem("@TokenUser");

// variable pour les liens des pages de la navbar
const gamerverse = ["GAMERVERSE"];
const pages = ["PlayStation", "Xbox", "Switch", "Computer"];
const logins = ["Connexion"];
const logouts = ["Déconnexion"];
const registers = ["Inscription"];

// Palette de la navbar
const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#1976d2",
    },
  },
});

//NavBar
function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);
  const navigate = useNavigate();
  const [showLogoutAlert, setShowLogoutAlert] = useState(false);
  const [token, setToken] = useState(localStorage.getItem("@TokenUser"));
  const [isButtonClicked, setIsButtonClicked] = useState(false);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleButtonClick = () => {
    setIsButtonClicked(true);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleClickLogout = () => {
    const getout = confirm(
      "Voulez-vous reellement quittez cet endroit incroyable ?"
    );
    if (getout == true) {
      localStorage.clear();
      setShowLogoutAlert(true);
      setToken(null); // Effacer le token dans l'état local
      setTimeout(() => {
        setShowLogoutAlert(false);
        navigate("/login");
      }, 2000);
    }
  };

  return (
    <>
      {/* Box de gauche */}
      <Stack spacing={2} sx={{ flexGrow: 1 }}>
        <Box flex={4} justifyContent="space-between">
          <ThemeProvider theme={darkTheme}>
            <AppBar position="fixed">
              <Container maxWidth="xl">
                <Toolbar disableGutters>
                  <SportsEsportsIcon
                    sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}
                  />
                  {gamerverse.map((Home) => (
                    <Typography
                      key={Home}
                      onClick={handleCloseNavMenu}
                      variant="h6"
                      noWrap
                      sx={{
                        mr: 2,
                        display: { xs: "none", md: "flex" },
                        fontFamily: "monospace",
                        fontWeight: 700,
                        letterSpacing: ".3rem",
                        color: "inherit",
                        textDecoration: "none",
                      }}
                    >
                      <Link
                        style={{ textDecoration: "none", color: "white" }}
                        to={`/`}
                      >
                        {Home}
                      </Link>
                    </Typography>
                  ))}

                  <Box
                    sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
                  >
                    <IconButton
                      size="large"
                      aria-label="account of current user"
                      aria-controls="menu-appbar"
                      aria-haspopup="true"
                      onClick={handleOpenNavMenu}
                      color="inherit"
                    >
                      <MenuIcon />
                    </IconButton>
                    <Menu
                      id="menu-appbar"
                      anchorEl={anchorElNav}
                      anchorOrigin={{
                        vertical: "bottom",
                        horizontal: "left",
                      }}
                      keepMounted
                      transformOrigin={{
                        vertical: "top",
                        horizontal: "left",
                      }}
                      open={Boolean(anchorElNav)}
                      onClose={handleCloseNavMenu}
                      sx={{
                        display: { xs: "block", md: "none" },
                      }}
                    >
                      {pages.map((page) => (
                        <MenuItem key={page} onClick={handleCloseNavMenu}>
                          <Typography textAlign="center">
                            <Link
                              style={{ textDecoration: "none", color: "white" }}
                              to={`/${page}`}
                            >
                              {page}
                            </Link>
                          </Typography>
                        </MenuItem>
                      ))}
                    </Menu>
                  </Box>
                  <Link to={`/`}>
                    <SportsEsportsIcon
                      sx={{
                        display: { xs: "flex", md: "none" },
                        mr: 1,
                        color: "white",
                      }}
                    />
                  </Link>
                  <Typography
                    variant="h5"
                    noWrap
                    component="a"
                    href="#app-bar-with-responsive-menu"
                    sx={{
                      mr: 2,
                      display: { xs: "flex", md: "none" },
                      flexGrow: 1,
                      fontFamily: "monospace",
                      fontWeight: 700,
                      letterSpacing: ".3rem",
                      color: "inherit",
                      textDecoration: "none",
                    }}
                  ></Typography>
                  <Box
                    sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}
                  >
                    {pages.map((page) => (
                      <Button
                        key={page}
                        onClick={handleCloseNavMenu}
                        sx={{ my: 2, color: "white", display: "block" }}
                      >
                        <Link
                          style={{ textDecoration: "none", color: "white" }}
                          to={`/${page}`}
                        >
                          {page}
                        </Link>
                      </Button>
                    ))}
                  </Box>

                  {/* Box de droite */}
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "flex-end",
                    }}
                  >
                    <Box style={{ alignSelf: "center" }}>
                      <Tooltip title="Vers ton profil">
                        {!token ? (
                          <></>
                        ) : (
                          <Link to={`/ProfilPage`}>
                            <IconButton>
                              <AccountCircleIcon fontSize="large" />
                            </IconButton>
                          </Link>
                        )}
                      </Tooltip>
                    </Box>

                    {!token ? (
                      <>
                        <Box style={{ marginRight: 10 }}>
                          {logins.map((login) => (
                            <Button
                              key={login}
                              onClick={handleCloseNavMenu}
                              variant="contained"
                              sx={{
                                my: 2,
                                color: "white",
                                backgroundColor: "teal",
                                display: "block",
                              }}
                            >
                              <Link
                                style={{
                                  textDecoration: "none",
                                  color: "white",
                                }}
                                to={`/Login`}
                              >
                                {login}
                              </Link>
                            </Button>
                          ))}
                        </Box>
                        <Box>
                          {registers.map((Register) => (
                            <Button
                              key={Register}
                              onClick={handleCloseNavMenu}
                              variant="outlined"
                              sx={{
                                my: 2,
                                color: "teal",
                                border: " 1px solid teal",
                                display: "block",
                              }}
                            >
                              <Link
                                style={{
                                  textDecoration: "none",
                                  color: "white",
                                }}
                                to={`/Register`}
                              >
                                {Register}
                              </Link>
                            </Button>
                          ))}
                        </Box>
                      </>
                    ) : (
                      <>
                        <Box>
                          {logouts.map((logout) => (
                            <Button
                              key={logout}
                              onClick={handleClickLogout}
                              variant="contained"
                              sx={{
                                my: 2,
                                color: "white",
                                backgroundColor: "red",
                                display: "block",
                              }}
                            >
                              <Link
                                style={{
                                  textDecoration: "none",
                                  color: "white",
                                }}
                                to={``}
                              >
                                {logout}
                              </Link>
                            </Button>
                          ))}
                        </Box>
                      </>
                    )}
                  </Box>
                </Toolbar>
              </Container>
              <LogoutAlert showLogoutAlert={showLogoutAlert} />
            </AppBar>
          </ThemeProvider>
        </Box>
      </Stack>
    </>
  );
}
export default ResponsiveAppBar;
