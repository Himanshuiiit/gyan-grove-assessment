import React, { useEffect, useState } from "react";
import "./UpcomingEvents.css";
import AxiosInstance from "../../utils/AxiosInstance";
import { InfiniteScroll } from "../Commons";
import { converURLForSrc } from "../../utils/UtilFunctions";

const UpcomingEvents = () => {
  const [upcomingEvents, setUpcomingEvents] = useState([]);
  const [page, setPage] = useState(1);

  const updateUpcomingEvents = async () => {
    try {
      setPage(page + 1);
      const res = await AxiosInstance.get(
        `/Events?code=${process.env.REACT_APP_API_KEY}&page=${page}&type=upcoming`
      );
      if (page * res.data.pageSize > res.data.totalEvents) {
        return;
      }
      setUpcomingEvents((prev) => [...prev, ...res.data.events]);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const controller = new AbortController();
    const getUpcomingEvents = async () => {
      try {
        const res = await AxiosInstance.get(
          `/Events?code=${process.env.REACT_APP_API_KEY}&page=1&type=upcoming`
        );
        setUpcomingEvents(res.data.events);
      } catch (error) {
        console.log(error);
      }
    };
    getUpcomingEvents();
    return () => controller.abort();
  }, []);

  return (
    <section className="upcomingEvents">
      <div className="upcomingEvents-title">
        <span>Upcoming events</span>
        <img
          src="./assets/icons/right-arrow-black.svg"
          alt="right-arrow"
          className="icon"
        />
      </div>
      <div className="upcomingEvents-cards">
        <InfiniteScroll fetchMore={updateUpcomingEvents}>
          {upcomingEvents.map((event, index) => (
            <div className="upcomingEvents-card" key={index}>
              <div className="upcomingEvents-card-img">
                <img src={converURLForSrc(event.imgUrl)} alt="event" />
                <div className="upcomingEvents-card-date">
                  {new Date(event.date).toLocaleDateString("en-US", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </div>
              </div>
              <div className="upcomingEvents-card-name">
                {event.eventName.split(" ").slice(0, 2).join(" ")}
              </div>
              <div className="upcomingEvents-card-details">
                <span className="upcomingEvents-card-location">
                  <img
                    src="./assets/icons/location.svg"
                    alt="location-pin"
                    className="icon"
                  />
                  <span>{event.cityName}</span>
                </span>
                <span className="upcomingEvents-card-weather">
                  {event.weather
                    .split(" ")
                    .join(", ")
                    .slice(0, event.weather.length)}
                  °C | {parseInt(event.distanceKm) + " "}km
                </span>
              </div>
            </div>
          ))}
        </InfiniteScroll>
      </div>
    </section>
  );
};

export default UpcomingEvents;
