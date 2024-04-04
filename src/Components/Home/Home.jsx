import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { BeatLoader } from "react-spinners";
import { NavLink, useNavigate } from "react-router-dom";
import Batafsil from "../Batafsil/Batafsil";
import img1 from "../../assets/img1.jpg";
import img2 from "../../assets/img2.jpg";
import img3 from "../../assets/img3.jpg";
import img4 from "../../assets/img4.jpg";
import "./Home.css";
function Home() {
  const [loader, setLoader] = useState(false);
  const [info, setInfo] = useState([]);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };
  function getDataApi() {
    fetch("https://strapi-store-server.onrender.com/api/products?featured=true")
      .then((res) => res.json())
      .then((data) => {
        setInfo(data.data);
      })
      .catch((err) => console.log(err))
      .finally(() => {
        setLoader(false);
      });
  }
  useEffect(() => {
    setLoader(true);
    getDataApi();
  }, []);

  const [lang, setLang] = useState("en");
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  function handleBatafsil(id) {
    navigate(`/Batafsil/${id}`, { state: info });
  }
  return (
    <>
      <div id="dark" className={isDarkMode ? "dark-mode" : "light-mode"}>
        <div className="dive">
          <div className="wraper">
            <div className="text">
              <h3 className="title">{t("title")}</h3>
            </div>
            <div className="two-text">
              <h4 className="title">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. <br />{" "}
                Tempore repellat explicabo enim soluta temporibus asperiores{" "}
                <br /> aut obcaecati perferendis porro nobis.
              </h4>
            </div>
            <div className="btnn">
              <button>{t("btn")}</button>
            </div>
          </div>
          <div className="slideShow">
            <div className="carouselItem">
              <img className="imageWrapper" src={img1} alt="" />
            </div>
            <div className="carouselItem">
              <img className="imageWrapper" src={img2} alt="" />
            </div>
            <div className="carouselItem">
              <img className="imageWrapper" src={img4} alt="" />
            </div>
            <div className="carouselItem" style={{ paddingRight: "20px" }}>
              <img className="imageWrapper" src={img3} alt="" />
            </div>
          </div>
        </div>
        <div className="wraper-footer">
          <div className="textt">
            <h2>{t("titl")}</h2>
          </div>
          <hr className="hr" />

          <div className="cardss">
            {loader && (
              <BeatLoader color="#36d7b7" size={"30px"} className="loader" />
            )}
            {!loader &&
              info.map((element, index) => {
                return (
                  <div
                    onClick={() => {
                      handleBatafsil(element.id);
                    }}
                    key={index}
                    className="cards"
                  >
                    <img src={element.attributes.image} alt="" />
                    <h2>{element.attributes.title}</h2>
                    <span>${element.attributes.price}</span>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
