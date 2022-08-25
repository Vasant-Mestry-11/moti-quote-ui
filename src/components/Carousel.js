import axios from "axios";
import React from "react";
import Loader from "./Loader";

const Carousel = () => {
  const [quotes, setQuotes] = React.useState([]);
  const baseURL = process.env.REACT_APP_PROD_URL;

  React.useEffect(() => {
    axios.get(`${baseURL}/moti-quotes`).then((res) => {
      setQuotes(res.data);
    });
  }, [baseURL]);

  const slide = quotes.map(({ _id, quote, author }, index) => (
    <div className={`carousel-item ${index === 0 ? "active" : ""}`} key={_id}>
      <div className="d-flex justify-content-center align-items-center quote flex-column">
        <div>
          <>{quote && quote}</>
          {author && (
            <div className=" align-self-start blockquote-footer mt-2">
              {author}
            </div>
          )}
        </div>
      </div>
    </div>
  ));

  if (!quotes.length > 0) return <Loader />;

  return (
    <div
      id="quote-carousel"
      className="carousel slide carousel-fade container carousel-container"
      data-bs-ride="carousel"
    >
      <div className="items-container">{slide}</div>

      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#quote-carousel"
        data-bs-slide="prev"
      >
        <span
          className="carousel-control-prev-icon control-btn d-none"
          aria-hidden="true"
        ></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next d-none"
        type="button"
        data-bs-target="#quote-carousel"
        data-bs-slide="next"
      >
        <span
          className="carousel-control-next-icon control-btn"
          aria-hidden="true"
        ></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Carousel;
