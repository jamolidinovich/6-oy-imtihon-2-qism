import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import img from "../../assets/pixel.jpeg";
import img1 from "../../assets/img1.webp";
import "./Card.css";
function Card() {
  const [info, setInfo] = useState([]);
  const { t, i18n } = useTranslation();
  function getDataApi() {
    fetch("https://strapi-store-server.onrender.com/api/34e3wewe?featured=true")
      .then((res) => res.json())
      .then((data) => {
        setInfo(data.data);
      })
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    getDataApi();
  }, []);

  const handleDelete = (index) => {
    const updatedInfo = [...info];
    updatedInfo.splice(index, 1);
    setInfo(updatedInfo);
  };

  return (
    <>
      <div className="cards1">
        <h1>{t("Shopping Cart")}</h1>
        <div className="card1">
          <div className="card-img">
            <img width={"100px"} src={img} alt="" />
          </div>
          <div className="desc">
            <h5>{t("Comfy Bed")}</h5>
            <span>{t("Modenza")}</span>
            <br />
            <span className="color">
              {t("Color :")} <span className="doira"></span>
            </span>
          </div>
          <div className="carddesc">
            <p>{t("Amount")}</p>
            <select name="" id="select">
              <option value="">1</option>
              <option value="">2</option>
              <option value="">3</option>
              <option value="">4</option>
              <option value="">5</option>
              <option value="">6</option>
              <option value="">7</option>
              <option value="">8</option>
              <option value="">9</option>
              <option value="">10</option>
            </select>
            <br />
            <a href="#" className="remove">
              {t("remove")}
            </a>
          </div>
          <div className="price">
            <h5>$129.99</h5>
          </div>
        </div>
        <dic className="table">
          <div className="jadval">
            <table>
              <tr className="tr">
                <td className="td">{t("Subtotal")}</td>
                <td className="td">$6,299.65</td>
              </tr>

              <br />
              <tr>
                <td className="td">{t("Shipping")}</td>
                <td>$5.00</td>
              </tr>
              <br />
              <tr>
                <td className="td">{t("Tax")}</td>
                <td>$629.97</td>
              </tr>
              <tr>
                <td className="th">{t("Order Total")}</td>
                <td className="th">$6,934.61</td>
              </tr>
            </table>
          </div>
          <button
            className="button1"
            id="button1"
            style={{
              marginLeft: "830px",
              marginTop: "20px",
              width: "320px",
              position: "absolute",

              borderRadius: "10px",
              border: "none",
              fontSize: "25px",
              background: "#057AFF",
              color: "white",
              padding: "13px",
            }}
          >
            {t(" Please login")}
          </button>
        </dic>
      </div>
      <div className="cards1">
        <div className="card1" style={{ marginTop: "-55px" }}>
          <div className="card-img">
            <img width={"100px"} src={img} alt="" />
          </div>
          <div className="desc">
            <h5>{t("Coffee Table")}</h5>
            <span>{t("Modenza")}</span>
            <br />
            <span className="color">
              {t("Color :")}
              <span style={{ background: "yellow" }} className="doira"></span>
            </span>
          </div>
          <div className="carddesc">
            <p>{t("Amount")}</p>
            <select name="" id="select">
              <option value="">1</option>
              <option value="">2</option>
              <option value="">3</option>
              <option value="">4</option>
              <option value="">5</option>
              <option value="">6</option>
              <option value="">7</option>
              <option value="">8</option>
              <option value="">9</option>
              <option value="">10</option>
            </select>
            <br />
            <a href="#" className="remove">
              {t("remove")}
            </a>
          </div>
          <div className="price">
            <h5>$129.99</h5>
          </div>
        </div>
      </div>
      <div className="cards1">
        <div className="card1">
          <div className="card-img">
            <img width={"100px"} src={img1} alt="" />
          </div>
          <div className="desc" id="desc">
            <h5>{t("Avant-Garde Lamp")}</h5>
            <span>{t("Modenza")}</span>
            <br />
            <span className="color">
              {t("Color :")}
              <span style={{ background: "#33FF57" }} className="doira"></span>
            </span>
          </div>
          <div className="carddesc" id="carddesc">
            <p>{t("Amount")}</p>
            <select name="" id="select">
              <option value="">1</option>
              <option value="">2</option>
              <option value="">3</option>
              <option value="">4</option>
              <option value="">5</option>
              <option value="">6</option>
              <option value="">7</option>
              <option value="">8</option>
              <option value="">9</option>
              <option value="">10</option>
            </select>
            <br />
            <a href="#" className="remove">
              {t("remove")}
            </a>
          </div>
          <div className="price">
            <h5>$129.99</h5>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
