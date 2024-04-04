import React, { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { BeatLoader } from "react-spinners";
import { IoIosArrowForward } from "react-icons/io";
import { useTranslation } from "react-i18next";
import "./Batafsil.css";

function Batafsil() {
  const [loader, setLoader] = useState(false);
  const [productData, setProductData] = useState(null);
  const [lang, setLang] = useState("en");
  const { t, i18n } = useTranslation();
  const { id } = useParams();
  useEffect(() => {
    setLoader(true);
    fetch(`https://strapi-store-server.onrender.com/api/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProductData(data);
        console.log(data);
      })
      .catch((err) => {
        console.error("Error fetching product data:", err);
      })
      .finally(() => {
        setLoader(false);
      });
  }, [id]);

  return (
    <div className="Card">
      <div className="Card1" style={{ marginLeft: "275px" }}>
        {productData ? (
          <div className="productdata">
            <NavLink
              style={{
                textDecoration: "none",
                marginTop: "100px",
                display: "inline-block",
                color: "#394E9A",
                marginRight: "25px",
              }}
              to="/"
            >
              Home
            </NavLink>
            <IoIosArrowForward
              color="black"
              style={{
                marginLeft: "-20px",
                fontSize: "15px",
                paddingTop: "3px",
                display: "inline-block",
              }}
            />
            <NavLink
              style={{
                textDecoration: "none",
                marginTop: "100px",
                display: "inline-block",
                color: "#394E9A",
              }}
              to="/Products"
            >
              Products
            </NavLink>
            <br />
            <p className="cardtitle">{productData.data.attributes.title}</p>
            <img
              className="cardimg"
              src={productData.data.attributes.image}
              alt=""
            />
            <h4 className="cardcompany">
              {productData.data.attributes.company}
            </h4>
            <span className="cardprice">
              ${productData.data.attributes.price}
            </span>
            <p className="cardDesc mt-6 leading-8">
              {productData.data.attributes.description}
            </p>
            <p className="cardcolor">Colors</p>
            <span>
              <span className="red"></span>
              <span className="red2"></span>
            </span>
            <p className="cardammount">Amount</p>
            <select className="cardselect">
              <option value=""> 1</option>
              <option value="">2</option>
              <option value="">3</option>
              <option value="">4</option>
              <option value="">5</option>
              <option value="">6</option>
              <option value="">7</option>
              <option value="">8</option>
              <option value="">9</option>
              <option value="">10</option>
              <option value="">11</option>
              <option value="">12</option>
              <option value="">13</option>
              <option value="">14</option>
            </select>
          </div>
        ) : (
          // <p>Loading...</p>
          <BeatLoader
            color="#36d7b7"
            size={"30px"}
            style={{ marginLeft: "500px" }}
            className="loader"
          />
        )}
      </div>
    </div>
  );
}

export default Batafsil;
