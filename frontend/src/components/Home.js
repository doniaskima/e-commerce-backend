import React from "react";
import "./Home.css";
import Product from "./Products/ProductCard"

function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img
                    className="home__image"
                    src="https://m.media-amazon.com/images/I/71o1uVhSZjL._SX3000_.jpg"
                    alt=""
                />
                <div className="home-row">
                    <Product title="the learn start" price={29.99} image="https://images-eu.ssl-images-amazon.com/images/G/08/EUBluefield/YourRewards/Stitch/XCM_Manual_1332127_1708202_DE_de_bluefield_reward_3873141_379x304_1X_de_DE._SY304_CB652322396_.jpg" rating={4} />
                    <Product title="the learn start" price={29.99} image="https://m.media-amazon.com/images/I/61mIgPva2UL._SX3000_.jpg" rating={4} />
                    <Product title="the learn start" price={29.99} image="https://images-eu.ssl-images-amazon.com/images/G/08/EUBluefield/YourRewards/Stitch/XCM_Manual_1332127_1708202_DE_de_bluefield_reward_3873141_379x304_1X_de_DE._SY304_CB652322396_.jpg" rating={4} />
                </div>
                <div className="home-row">
                    <Product title="the learn start" price={29.99} image="https://images-eu.ssl-images-amazon.com/images/I/51ZyUQ9Ej8L._AC_SX184_.jpg" rating={4} />
                    <Product title="the learn start" price={29.99} image="https://images-eu.ssl-images-amazon.com/images/I/31+q5JyyaVL._AC_SX184_.jpg" rating={4} />
                </div>
                <div className="home-row">
                     
                </div>
            </div>
        </div>
    );
}

export default Home;