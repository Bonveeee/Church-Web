import React, { useState, useEffect } from "react";

const Sermon = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    // const apiKey = process.env.REACT_APP_RAPID_API_KEY;
    // const playlistId = process.env.REACT_APP_CHANNEL_API_KEY;

    const maxResults = 6;
    fetch(
      `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${playlistId}&maxResults=${maxResults}&order=date&type=video&key=${apiKey}`
    )
      .then((response) => response.json())
      .then((data) => {
        setVideos(data.items);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div className="container mx-auto my-8">
      <h2 className="text-2xl font-bold mb-7 text-center">Latest Sermon</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {videos.map((video) => (
          <a
            key={video.id}
            href={`https://www.youtube.com/watch?v=${video.snippet.resourceId.videoId}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="relative h-0" style={{ paddingBottom: "56.25%" }}>
              <img
                className="absolute inset-0 w-full h-full object-cover"
                src={video.snippet.thumbnails.medium.url}
                alt={video.snippet.title}
              />
            </div>
            <div className="mt-2 text-gray-800">{video.snippet.title}</div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Sermon;
