import React, { useEffect, useState } from "react";

const API_KEY = process.env.TMDB_API_KEY;
const imgURLPrefix = "https://image.tmdb.org/t/p/w500";

function CastDetails(props) {
  const { id } = props;
  const [castDetails, setcastDetails] = useState({});

  const url = `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${API_KEY}&language=en-US`;

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(url);
      const data = await res.json();
      setcastDetails(data);
    };

    fetchData();
  }, []);
  return (
    <main id="movie-cast">
      {castDetails?.cast?.map((obj, index) => (
        <div key={index} className="cast-card">
          <img src={imgURLPrefix + obj.profile_path} alt={obj.name} />
          <div className="cast-name">{obj.name}</div>
          <div className="cast-character">{obj.character}</div>
        </div>
      ))}
    </main>
  );
}

export default CastDetails;
