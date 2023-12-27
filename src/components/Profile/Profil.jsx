import NavBar from "../layouts/NavBar";
import Footer from "../layouts/Footer";
import GetUser from "./GetUser";
import "./Profil.css";

function ProfilPage() {
  return (
    <div className="Background">
      <NavBar />
        <GetUser />
      <Footer />
    </div>
  );
}

export default ProfilPage;
