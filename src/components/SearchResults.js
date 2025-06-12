import React from "react";
import { useParams } from "react-router-dom";

const API_KEY = process.env.TMDB_API_KEY;

function SearchResults() {
  const { searchTxt } = useParams();
  const [searchResults, setSearchResults] = useState({});
  const url = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${searchTxt}`;
  useEffect(() => {
    fetchData = async () => {
      const res = await fetch(url);
      const data = await res.json();

      setSearchResults(data);
    };

    fetchData();
  }, [searchTxt]);
  return <div></div>;
}

export default SearchResults;
