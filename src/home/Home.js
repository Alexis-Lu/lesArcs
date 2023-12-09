import React from "react";
import Header from "./component/Header";
import Menu from "./component/Menu";
import Feed from "./component/Feed";

function Home() {
  return (
    <div>
      <div>
        <Header />
      </div>
      <div>
        <div className="w-1/6 float-left relative z-10 bg-blue-theme h-[120vh]">
          <Menu />
        </div>
        <div className="absolute z-0">
          <Feed />
        </div>
      </div>
    </div>
  );
}

export default Home;
