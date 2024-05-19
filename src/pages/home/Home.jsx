import React, { useEffect, useState } from "react";
import axios from "../../api";
import heroIcon from "../../assets/images/hero/hero-icon.svg";
import heroImg from "../../assets/images/hero/hero-img.svg";
import { Link } from "react-router-dom";
import starGold from "../../assets/images/products/star-gold.svg";
import starSilver from "../../assets/images/products/star-silver.svg";
import "./Home.scss";

const Home = () => {
  const [products, setProducts] = useState(null);
  const [offset, setOffset] = useState(1);
  const perPageCount = 4;

  useEffect(() => {
    axios
      .get("products", {
        params: {
          limit: offset * perPageCount,
        },
      })
      .then((res) => setProducts(res.data))
      .catch((err) => console.log(err));
  }, [offset]);

  let productsData = products?.map((product) => (
    <div key={product.id} className="products__card">
      <div className="products__card__top">
        <Link to={`/product/${product.id}`}>
          <img className="card__img" src={product.image} alt={product.title} />
        </Link>
        <button className="products__card__add">Add to Cart</button>
      </div>
      <div className="products__card__bottom">
        <h3 className="products__card__title">${product.title}</h3>
        <div className="products__card__info">
          <p className="products__card__price">${product.price}</p>
          <div className="products__card__rate">
            <img src={starGold} alt="" />
            <img src={starGold} alt="" />
            <img src={starGold} alt="" />
            <img src={starSilver} alt="" />
            <img src={starSilver} alt="" />
          </div>
          <p className="products__card__count">(${product.rating.count})</p>
        </div>
      </div>
    </div>
  ));

  return (
    <>
      <section id="hero">
        <div className="container hero">
          <div className="hero__desc">
            <div className="hero__text">
              <img src={heroIcon} alt="icon" />
              <p>iPhone 14 Series</p>
            </div>
            <h1 className="hero__title">Up to 10% off Voucher</h1>
            <Link className="hero__link" href="#">
              Shop Now
            </Link>
          </div>
          <div className="hero__img">
            <img src={heroImg} alt="img" />
          </div>
        </div>
      </section>
      <section id="products">
        <div className="container products">
          <div className="subtitle">
            <img src="./images/sub-img.svg" alt="" />
            <p>Our Products</p>
          </div>
          <div className="products__cards">{productsData}</div>
          <button
            className="see__more-btn"
            onClick={() => setOffset((p) => p + 1)}
          >
            See More
          </button>
        </div>
      </section>
    </>
  );
};

export default Home;
