import React, { useState, useEffect } from "react";
import "./AnimePage.css";

function AnimePage(props) {
  const [anime, setAnime] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const str = window.location.href;
  let id = '';

  const splitUrl = str.split("/");

  const index = splitUrl.indexOf("anime");
  if (index !== -1 && index + 1 < splitUrl.length) {
      var number = splitUrl[index + 1];
      console.log("The number after 'anime/' is: " + number);
      id = number;
  } else {
      console.log("No number found after 'anime/'.");
  }



  useEffect(() => {
    fetch(`https://api.jikan.moe/v4/anime/${id}/full`)
      .then((response) => response.json())
      .then((data) => {
        setAnime(data);
        setIsLoading(false);
      });
  }, [id]);

  
  return (
    <div>
      {isLoading ? (
        <div className="loading">Loading...</div>
      ) : (
    
        <div className="pageContainer">
          <div className="animePage">
            <div className="imgAnime">
              <img
                src={anime.data.images.jpg.image_url}
                alt="anime"
              />
            </div>
            <div className="pfooter">
              <div className="animePageTitle">
                <span > Anime Name :  </span>

                {anime.data.title}
              </div>
              <div className="synopsis">
              <span className="nn"> Anime synopsis :  </span>

                {anime.data.synopsis}
              </div>

              <div className="episodes">
              <span > Anime episodes :  </span>

                {anime.data.episodes}
              </div>

              <div className="ratingRank">
              <span > Anime ratingRank :  </span>

                {anime.data.rank}
              </div>

              <div className="trailer">
              {/* <span > Trailer  </span> */}
              { anime.data.trailer.embed_url ? (
                <iframe width="420" height="315"
                src= {anime.data.trailer.embed_url}>
                </iframe>
              ) : (
                <p> No Trailer </p>
              )
                
              }
               
              </div>
              
            </div>
          </div>
        </div>
      )}
     
    </div>
  );
}

export default AnimePage;