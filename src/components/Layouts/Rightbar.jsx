import { Box, Typography, Avatar, ListItemText } from "@mui/material";
import React from "react";
import "./rightbar.css";

export default function Rightbar() {
  return (
    <Box
      bgcolor="inherit"
      width={300}
      flex={2}
      p={2}
      sx={{ display: { xs: "none", sm: "block" } }}
    >
      <Box position="fixed" sx={{ marginRight: 5 }}>
        <Typography variant="h6" fontWeight={100}>
          Ami(e)s Connecté(e)s
        </Typography>
        <div className="friendsContainer">
          <div className="avatar">
            <Avatar alt="Kyoichiro" src="/images/avatar/Kyoichiro.jpg" />
            <span>Nolan</span>
          </div>
          <div className="avatar">
            <Avatar alt="Kengo" src="/images/avatar/dragon.jpg" />
            <span>Arnaud</span>
          </div>
          <div className="avatar">
            <Avatar alt="Goliath" src="/images/avatar/Goliath.jpg" />
            <span>Aslinn</span>
          </div>
          <div className="avatar">
            <Avatar alt="Shion" src="/images/avatar/Shion.jpg" />
            <span>Dennys</span>
          </div>
          <div className="avatar">
            <Avatar alt="Futaba" src="/images/avatar/Futaba.jpg" />
            <span>Zaïnab</span>
          </div>
        </div>
        <Typography variant="h6" color="#272727" fontWeight={300} mt={3}>
          DERNIÈRES SORTIES DE JEUX
        </Typography>
        <section className="carrouselContainer">
          <div className="slider-wrapper">
            <div className="slider">
              <div className="itemCarrousel">
                <ListItemText
                  id="slide-1"
                  primary="Assassin's Creed® Mirage"
                  secondary={
                    <React.Fragment>
                      {
                        "Découvrez l'histoire de Basim, voleur à la tire habile mais atteint de visions cauchemardesques, qui cherche désespérément des réponses, mais aussi la justice, dans les rues animées du Bagdad du IXe siècle. Par l'intermédiaire d'une société aussi ancienne que mystérieuse appelée Ceux qu'on ne voit pas, il va devenir un tueur redoutable et son sort va prendre une tournure qu'il n'aurait jamais imaginée."
                      }
                    </React.Fragment>
                  }
                />
              </div>
              <div className="itemCarrousel">
                <ListItemText
                  id="slide-2"
                  primary="EA SPORTS FC™ 24"
                  secondary={
                    <React.Fragment>
                      {
                        "Jouez avant le 1er novembre 2023 pour devenir membre fondateur et bénéficier d'avantages exclusifs dans EA SPORTS FC™ 24 et au-delà*."
                      }
                    </React.Fragment>
                  }
                />
              </div>
              <div className="itemCarrousel">
                <ListItemText
                  id="slide-3"
                  primary="The Crew™ Motorfest"
                  secondary={
                    <React.Fragment>
                      {
                        "Bienvenue au Motorfest, l'expérience de pilotage ultime ! Explorez le monde ouvert foisonnant de l'île d'O'ahu, à Hawaï, en participant à des courses intenses, des épreuves thématiques et bien plus encore ! Grâce aux centaines de voitures emblématiques à collectionner, vous aurez de nombreuses occasions de prouver votre talent."
                      }
                    </React.Fragment>
                  }
                />
              </div>
            </div>
            <div className="slider-nav">
              <a href="#slide-1"></a>
              <a href="#slide-2"></a>
              <a href="#slide-3"></a>
            </div>
          </div>
        </section>
      </Box>
    </Box>
  );
}
