import React, { useState, useEffect, useRef } from "react";

const InfiniteScroll = ({ children, fetchMore }) => {
  const [isFetching, setIsFetching] = useState(false);
  const observer = useRef();

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 1.0,
    };

    observer.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !isFetching) {
          setIsFetching(true);
          fetchMore().then(() => {
            setIsFetching(false);
          });
        }
      });
    }, options);

    if (observer.current) {
      observer.current.observe(document.getElementById("sentinel"));
    }

    return () => {
      if (observer.current) {
        observer.current.disconnect();
      }
    };
  }, [fetchMore, isFetching]);

  return (
    <>
      {children}
      <div id="sentinel" style={{ height: "10px" }}></div>
    </>
  );
};

export default InfiniteScroll;
