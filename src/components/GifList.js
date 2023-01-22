import React from "react";

function GifList({gifs}) {
  const disGif = gifs.map((gif) => {
    return (
      <li key={gif.id}>
        <img src={gif} alt="gif" />
      </li>
    );
  });

  return (
    <ul>
     {disGif}
    </ul>
   );
}

export default GifList;