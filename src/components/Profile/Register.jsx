import { useState } from "react";
import "./Register.css";
import { useNavigate } from "react-router-dom";
import NavBar from "../layouts/NavBar";
import Footer from "../layouts/Footer";

function Register() {
  const [password, setPassword] = useState("");
  const [lastname, setLastname] = useState("");
  const [firstname, setFirstname] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const navigate = useNavigate();
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [firstnameError, setFirstnameError] = useState("");
  const [lastnameError, setLastnameError] = useState("");
  const [ageError, setAgeError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleRegister = async (e) => {
    e.preventDefault();

    if ("" === email) {
      setEmailError("Veuillez entrer votre email");
      return;
    }

    if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
      setEmailError("Veuillez entrer un email valide");
      return;
    }

    if ("" === password) {
      setPasswordError("Veuillez entrer un mot de passe");
      return;
    }

    if ("" === firstname) {
      setFirstnameError("Veuillez entrer un prénom");
      return;
    }

    if ("" === lastname) {
      setLastnameError("Veuillez entrer un nom");
      return;
    }

    if ("" === age) {
      setAgeError("Veuillez entrer un âge");
      return;
    }

    let options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
        firstname: firstname,
        lastname: lastname,
        age: age,
      }),
    };

    await fetch(
      `https://social-network-api.osc-fr1.scalingo.io/gamer-verse/register`,
      options
    )
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          navigate("/login");
        } else {
          alert(data.message);
        }
      });
  };

  return (
    <>
      <NavBar />
      <div className="mainRegister">
        <div className="subRegister">
          <img src="images\pixel-registerbubble.gif" alt="" id="bubble" />
          <img
            src="https://media.discordapp.net/attachments/1154418633741709372/1162003370727460864/soldat.png?ex=653a5af8&is=6527e5f8&hm=8613018b16e6c80345fb2d5eb26c832bd4d048249468887cbc63932bff9dfc84&=&width=918&height=516"
            alt=""
            id="soldier"
          />
          <div className="cont">
            <div className="registerForm">
              <form method="POST" id="registerForm">
                <h2 id="registerH2">INSCRIPTION</h2>
                <br />
                <div className="registerSection">
                  <input
                    onChange={(e) => setLastname(e.target.value)}
                    type="text"
                    className="registerInput"
                    name="lastname"
                    id="lastname"
                    placeholder="Nom"
                  />
                  <label className="errorLabel">{lastnameError}</label>
                </div>
                <div className="registerSection">
                  <input
                    onChange={(e) => setFirstname(e.target.value)}
                    type="text"
                    className="registerInput"
                    name="firstname"
                    id="firstname"
                    placeholder="Prénom"
                  />
                  <label className="errorLabel">{firstnameError}</label>
                </div>
                <div className="registerSection">
                  <input
                    onChange={(e) => setAge(e.target.value)}
                    type="number"
                    className="registerInput"
                    name="age"
                    id="age"
                    placeholder="Age"
                  />
                  <label className="errorLabel">{ageError}</label>
                </div>
                <div className="registerSection">
                  <input
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    className="registerInput"
                    name="email"
                    id="email"
                    placeholder="Email"
                  />
                  <label className="errorLabel">{emailError}</label>
                </div>
                <div className="registerSection">
                  <input
                    onChange={(e) => setPassword(e.target.value)}
                    type={showPassword ? "text" : "password"}
                    className="registerInput"
                    name="password"
                    id="password"
                    placeholder="Mot de passe"
                  />
                  <label className="errorLabel">{passwordError}</label>
                  <label className="showPassword">
                    <input
                      type="checkbox"
                      className="checkbox"
                      onClick={() => setShowPassword(!showPassword)}
                    />
                    Afficher le mot de passe
                  </label>
                </div>
                <div className="registerSection">
                  <label className="checkbox">
                    <input type="checkbox" name="terms" id="terms" />
                    <span className="checkmark"></span>
                  </label>
                  <label htmlFor="agree-term" className="labelTerms">
                    J'accepte les{" "}
                    <a href="#" className="termLink">
                      Termes et Conditions {""}
                    </a>
                    générales d'utilisation
                  </label>
                </div>
                <br />
                <div className="section">
                  <button onClick={handleRegister} className="submit">
                    S'INSCRIRE
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Register;
