import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

function GetUser() {
  const [user, setUser] = useState({});
  const [editing, setEditing] = useState(false);

  const getUser = async () => {
    try {
      const options = {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("@TokenUser"),
        },
      };

      const response = await fetch(
        "https://social-network-api.osc-fr1.scalingo.io/gamer-verse/user",
        options
      );

      if (response.ok) {
        const data = await response.json();
        setUser(data);
      } else {
        console.error("Failed to fetch user data.");
      }
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  const ModifProfil = async () => {
    try {
      const options = {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("@TokenUser"),
        },
        body: JSON.stringify(user),
      };

      const response = await fetch(
        "https://social-network-api.osc-fr1.scalingo.io/gamer-verse/user",
        options
      );

      if (response.ok) {
        const data = await response.json();
        getUser()
      } else {
        console.error("Failed to update user data.");
      }
    } catch (error) {
      console.error("Error updating user data:", error);
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  const handleSave = () => {
    ModifProfil();
    setEditing(false);
  };



  return (
    <div className="profilInput">
      <h1 className="title">Profil</h1>
      {editing ? (
        <div className="identity">
          <div className="getFirstName">
            Nom:{" "}
            <input
              type="text"
              value={user.firstname}
              className="changeProfil"
              onChange={(e) => setUser({ ...user, firstname: e.target.value })}
            />
          </div>

          <div className="getLastName">
            Prénom:{" "}
            <input
              type="text"
              value={user.lastname}
              className="changeProfil"
              onChange={(e) => setUser({ ...user, lastname: e.target.value })}
            />
          </div>

          <div className="getAge">
            Age :{" "}
            <input
              type="text"
              value={user.age}
              className="changeProfil"
              onChange={(e) => setUser({ ...user, age: e.target.value })}
            />
          </div>

          <button onClick={handleSave} className="saveButton">
            Sauvegarder
          </button>
        </div>
      ) : (
        <>
        <div className="identity">
          <div className="getFirstName">Nom: {user.firstname}</div>
          <div className="getLastName">Prénom: {user.lastname}</div>
          <div className="getAge">Age: {user.age}</div>
        </div>
        </>
        
      )}

      <div className="mailInput">
        <div className="getEmail">Mail: {user.email}</div>
      </div>

      <div>
        <select
          name="Plateforme"
          value={user.occupation}
          className="getPlatforme"
        >
          <option>Plateforme :</option>
          <option>Playstation</option>
          <option>Xbox</option>
          <option>Switch</option>
          <option>Pc</option>
        </select>
      </div>

      <div>
        {editing ? (
          <button onClick={() => setEditing(false)} className="cancelButton">
            Annuler
          </button>
        ) : (
          <button onClick={() => setEditing(true)} className="editButton">
            Modifier
          </button>
        )}
      </div>
    </div>
  );
}

export default GetUser;
