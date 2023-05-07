import React from "react";

import LoginButton from "./components/LoginButton";
import LogoutButton from "./components/LogoutButton";
import Profile from "./components/Profile";
import { useAuth0 } from "@auth0/auth0-react";

import { Link } from "react-router-dom";

function Home() {
  const { user } = useAuth0;
  const letters = "ABCDEFGHIJKLMNOPQRSTVUWXYZ";
  function AnimatedText(e) {
    let iterations = 0;
    const interval = setInterval(() => {
      e.target.innerText = e.target.innerText
        .split("")
        .map((letter, index) => {
          if (index < iterations) {
            return e.target.dataset.value[index];
          }

          return letters[Math.floor(Math.random() * 26)];
        })
        .join("");

      if (iterations >= e.target.dataset.value.length) clearInterval(interval);
      iterations += 1 / 3;
    }, 30);
  }

  return (
    <div className="container">
      <div className="principalTitle">
        <h1
          onMouseOver={AnimatedText}
          id="Title"
          className="Title"
          data-value="CRITICS CORNER"
        >
          CRITICS CORNER
        </h1>
        <Profile></Profile>
        <div style={{ display: "flex", gap: "30px" }}>
          <LoginButton></LoginButton>

          <LogoutButton></LogoutButton>

          <button
            className="button-81"
            onClick={() => {
              window.location.href = "/bloglist";
            }}
          >
            <Link
              className="ButtonTitle"
              style={{ textDecoration: "none", color: "black" }}
              to="/bloglist"
            >
              Let's go to Bloglist!
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
