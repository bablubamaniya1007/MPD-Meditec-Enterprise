import React from "react";
import Photos from "../components/Photos";
import MPDNote from "../components/MPDNote";
import News from "../components/News";
import Clients from "../components/Clients";
function HomePage() {
  return (
    <div>
      <Photos />
      <MPDNote />
      <News />
      <Clients />
    </div>
  );
}

export default HomePage;
