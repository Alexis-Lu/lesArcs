import React from "react";
import Video from "./Video";
import Activities from "./Activities";

function Feed() {
  return (
    <div>
      <Video />
      <div className="w-5/6 float-right px-8">
        <Activities />
      </div>
    </div>
  );
}

export default Feed;
