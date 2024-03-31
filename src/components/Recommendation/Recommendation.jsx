import React, { useEffect, useState } from "react";
import "./Recommendation.css";
import AxiosInstance from "../../utils/AxiosInstance";
import { converURLForSrc } from "../../utils/UtilFunctions";

const Recommendation = () => {
  const [recommendedShows, setrecommendedShows] = useState([]);
  useEffect(() => {
    const getRecommendedShows = async () => {
      try {
        const res = await AxiosInstance.get(
          `/Events?code=${process.env.REACT_APP_API_KEY}&type=reco`
        );
        setrecommendedShows(res.data.events);
      } catch (error) {
        console.log(error);
      }
    };

    getRecommendedShows();
  }, []);

  return (
    <section className="recommendation">
      <div className="recommendation-header">
        <div className="recommendation-title">
          Recommended Shows{" "}
          <img src="./assets/icons/right-arrow.svg" alt="right-arrow" />
        </div>
        <div className="see-all">see all</div>
      </div>
      <div className="recommendation-cards">
        {recommendedShows.map((show) => (
          <div className="recommendation-card" key={show.eventName}>
            <img
              src={converURLForSrc(show.imgUrl)}
              alt={show.eventName}
              className="cover"
            />
            <div className="recommendation-card-title">
              <div className="recommendation-info">
                <div>{show.eventName.split(" ").slice(0, 2).join(" ")}</div>
                <div className="recommendation-date">
                  {new Date(show.date).toLocaleDateString("en-US", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </div>
              </div>
              <div className="recommendation-place">
                <div className="recommendation-location">
                  <img
                    src="./assets/icons/location.svg"
                    alt="location-pin"
                    className="icon"
                  />
                  <div>{show.cityName}</div>
                </div>
                <div className="recommendation-other-info">
                  {show.weather
                    .split(" ")
                    .join(", ")
                    .slice(0, show.weather.length)}
                  °C | {parseInt(show.distanceKm) + " "}km
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Recommendation;
