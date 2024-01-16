import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Home.css";


export default function HomePage(props) {
  const [anime, setAnime] = useState(props.anime);
  const [isLoading, setIsLoading] = useState(true);
  const search = props.title;

  useEffect(() => {
    if (search === "" || search === undefined) {
      fetch(`https://api.jikan.moe/v4/top/anime?filter=bypopularity&sort=asc&sfw`)
        .then((response) => response.json())
        .then((data) => {
          setAnime(data);
          console.log(anime)
          setIsLoading(false);
          // console.log(data.data[0].title)

        });
    } else {
      fetch(
        `https://api.jikan.moe/v4/anime?q=${search}&order_by=popularity&sort=asc&sfw`
      )
        .then((response) => response.json())
        .then((data) => {
          setAnime(data);
          setIsLoading(false);
        });
    }
  }, [search]);

  console.log(anime, search)
 

  return (
    <div className="all">
      {isLoading ? (
        <div className="loading">Loading...</div>
      ) : (
        <div className="container">
          <div className="features-div"> 
            <h1> Welcome to Anime World </h1>
            <p> Track and Discover your favorite Anime with Anime World. </p>
            <div class="feature-container">
              <div class="feature">
                <img src="icon1.png" alt="Icon 1" />
                <h3>Discover your obsessions</h3>
                <p>What are your highest rated genres or most watched voice actors? Follow your watching habits over time with in-depth statistics.</p>
              </div>
              <div class="feature">
                <img src="icon1.png" alt="Icon 1" />
                <h3>Discover your obsessions</h3>
                <p>What are your highest rated genres or most watched voice actors? Follow your watching habits over time with in-depth statistics.</p>
              </div>
              <div class="feature">
                <img src="icon1.png" alt="Icon 1" />
                <h3>Discover your obsessions</h3>
                <p>What are your highest rated genres or most watched voice actors? Follow your watching habits over time with in-depth statistics.</p>
              </div>
              <div class="feature">
                <img src="icon1.png" alt="Icon 1" />
                <h3>Discover your obsessions</h3>
                <p>What are your highest rated genres or most watched voice actors? Follow your watching habits over time with in-depth statistics.</p>
              </div>
            </div>
          </div>
          

          {anime.data.length ? (anime.data.map((anime,index) => (
            <div  className="animeCard" key={index}>
              {console.log(anime)}
          
              <div className="imgCard">
                <img src={anime.images.jpg.image_url} alt="anime" />
              </div>
              <div className="footer">
              <div className="animeTitle">
                    <Link  className="animeTitle" to={`/anime/${anime.mal_id}`}>
                      {anime.title}
                    </Link>
                  </div>
                {/* <div className="averageRating">
                  {anime.rating}
                </div> */}
               
              </div>
            </div>
          ))): (<img src={logo} alt="404" />)}
         
        </div>
      )}
    </div>
  );
}
