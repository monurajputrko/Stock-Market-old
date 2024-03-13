import React, { useState } from 'react';
import '../App.css'

const CardsForData = ({ item }) => {

    const [showMore, setShowMore] = useState(false); // Handling Show More State in Card

  // Function For Split String into certen Words
    function truncateString(str, numWords) {
      const words = str.split(" ");

      const truncatedWords = words.slice(0, numWords);

      const truncatedString = truncatedWords.join(" ");

      return truncatedString;
  }

    const truncatedString = truncateString(item.title, 8); // Function Invocation for Desired Length of Title
 

    return (
      <div class="card">
        <div class="image"></div>
        <div class="content">
          <h5>Topic : {item.topic ? item.topic : "Not Availble"}</h5>
          <p>
            <span class="title">
              Sector - {item.sector ? item.sector : "Not Availble"}
            </span>
          </p>

          {showMore ? (
            <p class="desc">{item.title ? item.title : "Not Availble"}</p>
          ) : (
            `${truncatedString}`
          )}
          {showMore ? (
            // When See More is active
            <>
              <p class="desc">{item.insight ? item.insight : "Not Availble"}</p>
              <p class="desc">
                {item.published ? item.published : "Not Availble"}
              </p>
              <p class="desc">
                Region : {item.region ? item.region : "Not Availble"}
              </p>
              <p class="desc">
                Country : {item.country ? item.country : "Not Availble"}
              </p>
              <p
                style={{ cursor: "pointer" }}
                onClick={() => {
                  setShowMore(!showMore);
                }}
                class="desc"
              >
                See Less...
              </p>
            </>
          ) : (
            // When See More is not active
            <p
              style={{ cursor: "pointer" }}
              onClick={() => {
                setShowMore(!showMore);
              }}
              class="desc"
            >
              See More...
            </p>
          )}
          {/* Link For Find Out More */}
          <a target="blank" href={item.url}>
            Find out more
            <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    );
}

export default CardsForData
