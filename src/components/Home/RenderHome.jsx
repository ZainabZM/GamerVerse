import * as React from "react";
import { Link } from "react-router-dom";
import "./RenderHome.css";
//-----> import mui

import {
  Box,
  Typography,
  CardMedia,
  Stack,
  Card,
  Divider,
  Chip,
  Tooltip,
  styled,
  Paper,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Avatar,
} from "@mui/material";

// -----> const

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

function RenderHome() {
  return (
    <div className="cardContainer">
      <Stack
        display="flex"
        flexDirection="column"
        spacing={5}
        useFlexGap
        flexWrap="wrap"
      >
        <Box display="flex" flexDirection="row" justifyContent="space-around">
          <Box className="container">
            <div className="slider-wrapper">
              <div className="slider">
                <img
                  id="slide-1"
                  src="./images/smashbrosultimate.jpeg"
                  alt="3D rendering of an imaginary orange planet in space"
                />
                <img
                  id="slide-2"
                  src="./images/skyrim.png"
                  alt="3D rendering of an imaginary green planet in space"
                />
                <img
                  id="slide-3"
                  src="./images/Warriors.png"
                  alt="3D rendering of an imaginary blue planet in space"
                />
              </div>
              <div className="slider-nav">
                <a href="#slide-1"></a>
                <a href="#slide-2"></a>
                <a href="#slide-3"></a>
              </div>
            </div>
          </Box>
          <List
            sx={{
              width: "40%",
              height: "50%",
              maxWidth: 450,
              bgcolor: "#272727",
              marginTop: 13,
              "@media screen and (max-width: 600px)": {
                display: "none",
              },
            }}
          >
            <Typography
              textAlign="start"
              paddingLeft={2}
              sx={{ color: "white", textTransform: "uppercase" }}
            >
              EN LIGNE - 3
            </Typography>
            <ListItem>
              <ListItemAvatar>
                <Avatar
                  alt="Kyoichiro"
                  src="/images/avatar/Kyoichiro.jpg"
                ></Avatar>
              </ListItemAvatar>
              <ListItemText
                sx={{ color: "teal" }}
                primary="Nolan"
                secondary="Nono - le tyran (Modérateur)"
              />
            </ListItem>
            <Divider variant="inset" component="li" />
            <ListItem>
              <ListItemAvatar>
                <Avatar alt="Goliath" src="/images/avatar/Goliath.jpg"></Avatar>
              </ListItemAvatar>
              <ListItemText
                sx={{ color: "teal" }}
                primary="Véronique"
                secondary="Aslinn - la jinx du groupe (Modératrice)"
              />
            </ListItem>
            <Divider variant="inset" component="li" />
            <ListItem>
              <ListItemAvatar>
                <Avatar alt="Shion" src="/images/avatar/Shion.jpg"></Avatar>
              </ListItemAvatar>
              <ListItemText
                sx={{ color: "teal" }}
                primary="Dennys"
                secondary="Dennys - le responsiveur (Modérateur)"
              />
            </ListItem>

            <Typography
              textAlign="start"
              paddingLeft={2}
              sx={{ color: "white", textTransform: "uppercase" }}
            >
              HORS LIGNE - 1
            </Typography>
            <ListItem>
              <ListItemAvatar>
                <Avatar alt="Futaba" src="/images/avatar/Futaba.jpg"></Avatar>
              </ListItemAvatar>
              <ListItemText
                sx={{ color: "grey" }}
                primary="Zaïnab"
                secondary="Zaï - supportrice (Modératrice)"
              />
            </ListItem>
          </List>
        </Box>
        <p className="selectPlatforme">
          Choisissez l'univers pour voir les posts correspondants :
        </p>
        <Box display="flex" justifyContent="center">
          <Box sx={{ bgcolor: "inherit" }} zIndex={1} width="70%">
            <Box
              display="flex"
              flexDirection="row"
              justifyContent="space-between"
            >
              <Box sx={{ maxWidth: 250, height: 145 }}>
                <Link
                  to="/PlayStation"
                  style={{ textDecoration: "none", color: "Black" }}
                >
                  <CardMedia
                    component="img"
                    image="/images/playstation.jpg"
                    alt="PlayStation"
                  />
                </Link>
              </Box>

              <Box sx={{ maxWidth: 250 }}>
                <Link
                  to="/Xbox"
                  style={{ textDecoration: "none", color: "Black" }}
                >
                  <CardMedia
                    component="img"
                    image="/images/Xbox.jpg"
                    alt="Xbox"
                  />
                </Link>
              </Box>

              <Box sx={{ maxWidth: 250 }}>
                <Link
                  to="/Xbox"
                  style={{ textDecoration: "none", color: "Black" }}
                >
                  <CardMedia
                    component="img"
                    image="/images/Xbox.jpg"
                    alt="Xbox"
                  />
                </Link>
              </Box>

              <Box sx={{ maxWidth: 250 }}>
                <Link
                  to="/Switch"
                  style={{ textDecoration: "none", color: "Black" }}
                >
                  <CardMedia
                    component="img"
                    image="/images/Switch.jpg"
                    alt="Switch"
                  />
                </Link>
              </Box>

              <Box sx={{ maxWidth: 250, boxShadow: 3 }}>
                <Link
                  to="/Computer"
                  style={{ textDecoration: "none", color: "Black" }}
                >
                  <CardMedia
                    component="img"
                    image="/images/PC.jpg"
                    alt="Computer"
                  />
                </Link>
              </Box>
            </Box>
          </Box>
        </Box>
      </Stack>
    </div>
  );
}

export default RenderHome;
