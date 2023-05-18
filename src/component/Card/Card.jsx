import { RequestTrendingMovies } from "../servises/Servises";
import { H2 } from './Card.styled'
import { useState, useEffect } from "react";

function Card() {
      const [trendMovie, setTrendMovie] = useState([]);

      useEffect(() => {
          const fetchData = async () => {
              try {
                  const trendingMovieArray = await RequestTrendingMovies();
                  setTrendMovie(trendingMovieArray);
                } catch (error) {
                    console.log("🚀  error Trending", error);
                }  
            }
            fetchData();
        }, []);
        
        console.log("🚀  trendMovie:", trendMovie);
    
     return (
        <div>
             <H2>{trendMovie.length >= 1? trendMovie[0].title : 'WAIT'}</H2>
        </div>
    )
    
    
};

export default Card;