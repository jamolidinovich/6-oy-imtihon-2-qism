import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { BeatLoader } from "react-spinners";
import { NavLink, useNavigate } from "react-router-dom";
import "./Product.css";
function Product() {
  const [products, setProducts] = useState([]);
  const [loader, setLoader] = useState(false);
  const [lang, setLang] = useState("en");
  const { t, i18n } = useTranslation();
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };
  function getDataApi() {
    setLoader(true);
    fetch("https://strapi-store-server.onrender.com/api/products ")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.data);
      })
      .catch((err) => console.log(err))
      .finally(() => {
        setLoader(false);
      });
  }
  useEffect(() => {
    getDataApi();
  }, []);
  const navigate = useNavigate();
  function handleBatafsil(id) {
    navigate(`/Batafsil/${id}`, { state: products });
  }
  return (
    <>
      <div className="wrappper">
        <div className="filtir">
          <p>{t("Search Product")}</p>
          <p style={{ marginLeft: "300px" }}>{t("Select Category")}</p>
          <p style={{ marginLeft: "520px" }}>{t("Select Company")}</p>
          <p style={{ marginLeft: "760px" }}>{t("Sort By")}</p>
          <form className="form">
            <input
              type="text"
              className="input-one"
              placeholder="Search Product"
            />

            <select className="select">
              <option value="0">{t("ham")}</option>
              <option value="1">Tables</option>
              <option value="2">Chairs</option>
              <option value="3">Kids</option>
              <option value="4">Sofas</option>
              <option value="5">Beds</option>
            </select>

            <select className="selectt">
              <option value="0">{t("ham")}</option>
              <option value="1">Modenza</option>
              <option value="2">Luxora</option>
              <option value="3">Artifex</option>
              <option value="4">Comfora</option>
              <option value="5">Homestead</option>
            </select>
            <select className="selectt">
              <option value="0">{t("a-z")}</option>
              <option value="2">z-a</option>
              <option value="3">hight</option>
              <option value="4">low</option>
            </select>
          </form>
          <div className="buttons">
            <div style={{ marginTop: "-30px" }}>
              {" "}
              <p
                id="price"
                style={{
                  color: "#394e6a",
                  marginLeft: "-300px",
                  marginTop: "-15px",
                }}
              >
                Select Price
                <h3
                  style={{
                    marginTop: "-1px",
                    marginLeft: "30px",
                    fontSize: "14px",
                  }}
                >
                  $1,000.00
                </h3>
              </p>
              <input
                style={{
                  marginLeft: "-300px",
                  width: "180px",
                  display: "inline-block",
                  paddingTop: "-100px",
                  marginRight: "215px",
                }}
                type="range"
                id="range"
                name="price"
                min="0"
                max="100000"
                className="range range-primary range-sm"
                step="1000"
                value="100000"
              />
            </div>
            <span
              className="free"
              style={{
                display: "flex",
                display: "inline-block",
                position: "absolute",
                marginLeft: "-30px",
                marginTop: "-20px",
                color: "black",
                marginBottom: "5px",
              }}
            >
              Free Shipping
            </span>
            <input
              type="checkbox"
              style={{
                // marginLeft: "-180px",
                borderRadius: "50px",
                position: "absolute",
                display: "inline-block",
                // marginTop: "-5px",
                width: "20px",
                height: "20px",
              }}
            />
            <h4
              style={{
                color: "#394E82",
                marginLeft: "-300px",
                fontSize: "14px",
              }}
            >
              0
              <h4
              id="max"
                style={{
                  marginTop: "-20px",
                  marginLeft: "80px",
                  paddingBottom: "20px",
                  fontSize: "14px",
                  
                }}
              >
                Max:$1,000.00
              </h4>
            </h4>
            <button className="btn-onee">{t("onebtn")}</button>
            <button className="btn-two">{t("twobtn")}</button>
          </div>
        </div>

        <div style={{ display: "flex" }}>
          <h4 className="products">{t("22 products")}</h4>
        </div>
        <div className="cardssss">
          {loader && (
            <BeatLoader color="#36d7b7" size={"30px"} className="loader" />
          )}
          {!loader &&
            products.map((element, index) => {
              return (
                <div
                  onClick={() => {
                    handleBatafsil(element.id);
                  }}
                  key={index}
                  className="cardlar"
                >
                  <img src={element.attributes.image} alt="" />
                  <h3>{element.attributes.title}</h3>
                  <span>${element.attributes.price}</span>
                </div>
              );
            })}
          {}
        </div>
      </div>
    </>
  );
}

export default Product;
