import React from "react";
import RenderHome from "./RenderHome";
import "./Home.css";
import NavBar from "../layouts/NavBar";

function Home() {
   return (
      <>
         <NavBar />
         <RenderHome />
      </>
   );
}

export default Home;
