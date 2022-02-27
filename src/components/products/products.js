import React from "react";
import "./products.scss";
import elumLogo from "../../images/elum-logo.png";
import blockChain from "../../images/block-chain.png";

const Products = () => {
  return (
    <section id="products" className="yellow-bg flex-display">
      <div>
        <div className="container products">
          <div className="technology">
            <h1 className="main-heading white-circle">Our Products</h1>
            <p>
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form.
            </p>
          </div>
          <div>
            <div className="elum-bg">
              <div className="parallel-line1"></div>
              <div className="parallel-line2"></div>
              <div className="elum">
                <img src={elumLogo} alt="elum-logo" />
              </div>
            </div>
            <hr />
            <div className="block-chain-bg">
              <div className="parallel-line1"></div>
              <div className="parallel-line2"></div>
              <div className="block-chain">
                <img src={blockChain} alt="block-chain-logo" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
