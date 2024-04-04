import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, NavLink, Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { IoMoonSharp } from "react-icons/io5";
import { IoSunnySharp } from "react-icons/io5";
import { SlBasket } from "react-icons/sl";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Product from "./Components/Products/Product";
import Card from "./Components/Card/Card";
import Batafsil from "./Components/Batafsil/Batafsil";
import "./App.css";
function App() {
  const [lang, setLang] = useState("en");
  const [darkMode, setDarkMode] = useState(false);
  const { t, i18n } = useTranslation();

  function handleChangeLang(e) {
    setLang(e.target.value);
    i18n.changeLanguage(e.target.value);
  }

  function handleToggleDarkMode() {
    setDarkMode((prevDarkMode) => !prevDarkMode);
  }

  useEffect(() => {
    document.body.classList.toggle("dark-mode", darkMode);
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);
  return (
    <>
      <BrowserRouter>
        <header>
          <div className="header">
            <div className="headerLink">
              <Link className="sign">{t("Sign in / Guest")}</Link>
              <Link className="sign2">{t("Create Account")}</Link>
            </div>
          </div>
          <div className="Nav">
            <nav id="nav" className="nav" style={{}}>
              <a
                id="logo"
                className="hidden lg:flex btn btn-primary text-3xl items-center active"
                href="/"
                aria-current="page"
              >
                C
              </a>
              <div className="navlivk">
                <NavLink className="one" to="/">
                  {t("home")}
                </NavLink>
                <NavLink className="one" to="/About">
                  {t("about")}
                </NavLink>
                <NavLink className="one" to="/Products">
                  {t("product")}
                </NavLink>
                <NavLink className="one" to="/Card">
                  {t("Card")}
                </NavLink>
              </div>
              <div className="info">
                <span onClick={handleToggleDarkMode}>
                  {darkMode ? (
                    <IoSunnySharp fontSize={"20px"} color="white" />
                  ) : (
                    <IoMoonSharp
                      className="dark"
                      fontSize={"20px"}
                      color="black"
                    />
                  )}
                </span>

                <SlBasket className="korzinka dark" />

                <li className="li">
                  <select
                    className="select"
                    style={{ width: "120px" }}
                    onChange={(e) => handleChangeLang(e)}
                    value={lang}
                  >
                    <option value="uz">Uzbek</option>
                    <option value="ru">Rus</option>
                    <option value="en">English</option>
                  </select>
                </li>
              </div>
            </nav>
          </div>
        </header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Products" element={<Product />} />
          <Route path="/Card" element={<Card />} />
          <Route path="/Batafsil/:id" element={<Batafsil></Batafsil>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
