import axios from 'axios';
import { useState } from 'react';

 const YourComponent = () => {

    const searchVideos = async (query) => {
        const API_KEY = 'AIzaSyCU0psCWQViDya9dPNCgTsqwh6wQYeftcQ';
        const res = await axios.get('https://www.googleapis.com/youtube/v3/search', {
          params: {
            q: query,
            part: 'snippet',
            key: API_KEY,
            type: 'video',
          },
        });
        return res.data;
      }

  const [results, setResults] = useState([]);

  const handleSearch = async (query) => {
    const data = await searchVideos(query);
    setResults(data.items);
  }

  return (
    <div>
      <input type="text" onChange={e => handleSearch(e.target.value)} />
      {results.map(result => (
        <div key={result.id.videoId}>
          <img src={result.snippet.thumbnails.default.url} alt={result.snippet.title} />
          <p>{result.snippet.title}</p>
        </div>
      ))}
    </div>
  );
};

export default YourComponent