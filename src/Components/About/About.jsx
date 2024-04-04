import React, { useTransition } from "react";
import { useState } from "react";
import "./About.css";
import { useTranslation } from "react-i18next";
function About() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };
  const [lang, setLang] = useState("en");
  const { t, i18n } = useTranslation();
  return (
    <>
      <div id="wrap" className={isDarkMode ? "dark-mode" : "light-mode"}>
        <div className="wrappperr">
          <div className="text">
            <h1>{t("bug")}</h1>
            <button>{t("comfy")}</button>
          </div>
          <div className="twoo">
            <h3>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore
              quae quam <br /> blanditiis vitae, dolor non eveniet ipsum
              voluptatibus, quia optio aut! Perferendis <br /> ipsa cumque ipsam
              nostrum reprehenderit ad illo sed officiis ea <br /> tempore!
              Similique eos minima sit porro, ratione aspernatur!
            </h3>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
