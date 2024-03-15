import React, { useState } from "react";
import "../App.css";

const CardsForData = ({ item }) => {
  const [showMore, setShowMore] = useState(false); // Handling Show More State in Card

  return (
    <>
      <div class="ag-courses_box">
        {item.map((e, i) => {
          return (
            <div key={i} class="ag-courses_item">
              <a href="#" class="ag-courses-item_link">
                <div class="ag-courses-item_bg"></div>
                {e.current_status === "open" ? (
                  <h5 style={{ color: "green" }}>Open Currently</h5>
                ) : (
                  <h5 style={{ color: "red" }}>Close Currently</h5>
                )}

                <div class="ag-courses-item_title">Type - {e.market_type}</div>
                <h6 style={{ marginTop: "-20px", color: "white" }}>
                  Country : {e.region}
                </h6>
                <h6 style={{ color: "white" }}>
                  Primary Exchage - {e.primary_exchanges}
                </h6>
                {e.current_status !== "open" ? (
                  <div class="ag-courses-item_date-box">
                    Opening Time:
                    <span class="ag-courses-item_date"> {e.local_open}</span>
                  </div>
                ) : (
                  <div class="ag-courses-item_date-box">
                    Closing Time :
                    <span class="ag-courses-item_date"> {e.local_close}</span>
                  </div>
                )}
              </a>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default CardsForData;
