import React, { useState } from "react";

function GifSearch({handleSubmit}) {
  const [userData, setUserData] = useState("");

  return (
    <div>
      <div>
        <b>Enter Search</b>
        <form
          onSubmit={(e) => {
            e.preventDeafult();
            handleSubmit(userData);
          }}
        >
          <input
            type="search"
            placeholder="Search Gif"
            value={userData}
            onChange={(e) => setUserData(e.target.value)}
          />

          <input type="submit" value="search" />
        </form>
      </div>
    </div>
  );
}

export default GifSearch;