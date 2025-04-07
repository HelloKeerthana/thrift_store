import React from "react";
import { useNavigate } from "react-router-dom";
import "./PopularItems.css";

function PopularItems() {
  const navigate = useNavigate();

  return (
    
    <div className="popular-carousel-container">
      <div
        id="popularCarousel"
        className="carousel slide"
        data-bs-ride="carousel" 
        data-bs-interval="3000"
      >
        <div className="carousel-inner">

          <div className="carousel-item" onClick={() => navigate("/new")}>
            <img
              src="https://marketplace.canva.com/EAFoEJMTGiI/1/0/1600w/canva-beige-aesthetic-new-arrival-fashion-banner-landscape-cNjAcBMeF9s.jpg"
              className="carousel-img"
              alt="New Arrivals"
            />
            
          </div>

          <div className="carousel-item active" onClick={() => navigate("/women")}>
            <img
              src="https://img.freepik.com/free-vector/horizontal-sale-banner-template_23-2148897328.jpg?t=st=1743935740~exp=1743939340~hmac=8252f8bfbc5a2c0feafe5404c3033e08ae64b2c15a3432b84dbfbcd4959b730d&w=1380"
              className="carousel-img"
              alt="Women's Collection"
            />
            
          </div>

          <div className="carousel-item" onClick={() => navigate("/men")}>
            <img
              src="https://img.freepik.com/free-psd/urban-fashion-banner-template_23-2148652498.jpg?t=st=1743935834~exp=1743939434~hmac=b7b85a3f30f406a57798639ec3340f6cbb82048b74c9e4b4f181be78095a5bf4&w=1380"
              className="carousel-img"
              alt="Men's Collection"
            />
            
          </div>
        </div>

        <button className="carousel-control-prev" type="button" data-bs-target="#popularCarousel" data-bs-slide="prev">
          <span className="carousel-control-prev-icon dark-icon" aria-hidden="true"></span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#popularCarousel" data-bs-slide="next">
          <span className="carousel-control-next-icon dark-icon" aria-hidden="true"></span>
        </button>
      </div>
    </div>
  );
}

export default PopularItems;
