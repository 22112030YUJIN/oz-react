import { useParams } from "react-router-dom";
import axios from '../../api/axios';
import { useEffect, useState } from "react";
import { imageBasePath } from "../../components/constant";

const DetailPage = () => {
  
  const{movieId} = useParams(); 
  const [movie, setMovie] = useState(null);
 
  useEffect(()=> {
    async function fetchData() {
        const response = await axios.get(
            `/movie/${movieId}`
        );
        setMovie(response.data);
        console.log("영화 정보 : ", response.data)
    }
    fetchData();
  }, [movieId])


  if(!movie) return null;
  

    return (
    <section>


        <img 
            src={`${imageBasePath}${movie.backdrop_path}`}
            alt="detail"
        />
        
        
        <h1>{movie.title}</h1>
        <h3>장르: {movie.genres.map(genre => genre.name).join(" ")}</h3>
        <h3>상영시간: {movie.runtime} 분</h3>
        
        <p>{movie.overview}</p>


    </section>
  )
}

export default DetailPage 

