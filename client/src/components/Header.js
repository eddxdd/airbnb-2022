import SearchIcon from "@mui/icons-material/Search";
import LanguageIcon from "@mui/icons-material/Language";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import React, { useState } from "react";
import "../styles/Header.css";
import { Link } from "react-router-dom";
import { Avatar } from "@mui/material";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  const handlePress = (e) => {
    if (e.key === "Enter") {
      navigate("/search");
    }
  };

  return (
    <div className="header">
      <Link to="/">
        <img
          className="header__icon"
          src="https://i.pinimg.com/originals/3c/bf/be/3cbfbe148597341fa56f2f87ade90956.png"
          alt=""
        />
      </Link>

      <div className="header__center">
        <input
          type="text"
          placeholder="Where to?"
          onKeyPress={handlePress}
        ></input>
        <SearchIcon onClick={() => navigate("/search")} />
      </div>

      <div className="header__right">
        <a
          href="https://github.com/eddxdd"
          target="_blank"
          className="header__readme"
          rel="noopener noreferrer"
        >
          README
        </a>
        <LanguageIcon />
        <ExpandMoreIcon />
        <Avatar
          className="header__loginButton"
          variant="outlined"
          onClick={() => navigate("/loginpage")}
        />
      </div>
    </div>
  );
}

export default Header;
