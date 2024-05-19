import axios from "../../api";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./DetailsProduct.scss";
import { CiHeart } from "react-icons/ci";

const DetailsProduct = () => {
    const [data, setSingleProduct] = useState(null);
    const { id } = useParams();
    useEffect(() => {
        axios
            .get(`products/${id}`)
            .then((res) => setSingleProduct(res.data))
            .catch((err) => console.log(err));
    }, []);
    console.log(data);
    return (
        <section id="single__product" class="single__product container">
            <div className="product__img">
                <div className="product__img__main">
                    <img src={data?.image} alt="img" />
                </div>
            </div>
            <div className="product__info">
                <h2 className="product__title">{data?.title}</h2>
                <p className="product__price">{data?.price}$</p>
                <p className="product__desc">{data?.description}</p>
                <div className="product__line"></div>
                <div className="product__colors">
                    <p>Colors: </p>
                    <div className="product__colors__input">
                        <input type="radio" name="radios" />
                        <input type="radio" name="radios" />
                    </div>
                </div>
                <div className="product__size">
                    <p>Size: </p>
                    <div className="product__size__btns">
                        <button>XS</button>
                        <button>S</button>
                        <button>M</button>
                        <button>L</button>
                        <button>Xl</button>
                    </div>
                </div>
                <div className="product__buy">
                    <div className="product__buy__btns">
                        <button className="product__buy__dec">-</button>
                        <div className="product__buy__count">2</div>
                        <button className="product__buy__inc">+</button>
                    </div>
                    <button className="product__buy__now">Buy now</button>
                    <button className="product__buy__heart">
                        <CiHeart />
                        {/* <i className="fa-regular fa-heart"></i> */}
                    </button>
                </div>
                <div className="product__delivery">
                    <div className="product__delivery-top">
                        {/* <img src="../images/product/icon-delivery.svg" alt="" /> */}
                        <div>
                            <p>Free Delivery</p>
                            <p>
                                Enter your postal code for Delivery Availability
                            </p>
                        </div>
                    </div>
                    <div className="product__delivery-bot">
                        {/* <img src="../images/product/icon-return.svg" alt="" /> */}
                        <div>
                            <p>Return Delivery</p>
                            <p>Free 30 Days Delivery Returns. Details</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        // <h1>
        //     Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum
        //     optio porro accusantium autem perferendis, ad deleniti libero sequi
        //     alias quae enim at beatae fugit fuga vitae soluta, mollitia
        //     voluptatibus explicabo labore. Laboriosam exercitationem dolorum
        //     enim hic quas reiciendis. Inventore eaque aut corporis similique
        //     omnis, ut, quia aliquam placeat voluptatibus a sapiente excepturi
        //     deserunt animi porro reprehenderit explicabo delectus cum
        //     consequuntur necessitatibus in, maiores accusantium nesciunt? Magni,
        //     nobis corrupti. Suscipit dicta, ipsum saepe ipsa provident
        //     recusandae mollitia expedita fugit neque tempore? Aliquid assumenda
        //     delectus eum rem maiores nam voluptatibus voluptate reprehenderit!
        //     Accusantium aliquam magni voluptas odit sit doloribus beatae velit
        //     ab?
        // </h1>
    );
};

export default DetailsProduct;
