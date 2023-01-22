import React from "react";

import NavBar from "./NavBar";

import GifListcontainer from "./GifListContainer";

// the App component should render out the GifListContainer component

function App() {
  return (
    <div>
      <NavBar color="black" title="Giphy Search" />
      <GifListcontainer />
    </div>
  );
}

export default App;
