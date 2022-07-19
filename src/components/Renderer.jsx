import React, { useEffect, useState } from "react";

const Renderer = () => {
  const [currentOrder, setOrder] = useState(1);
  let [currentSite, setSite] = useState("");
  let [site, setSites] = useState([]);

  function Slide() {
    let counter = 0;
    setInterval(() => {
      if (counter < 4) {
        setSite(site[counter]);
        counter = counter + 1;
        console.log(counter);
      } else {
        counter = 0;
        setSite(site[counter]);
      }
    }, JSON.parse(localStorage.getItem("timer")) * 1000);
  }

  function SetSites() {
    for (let i = 1; i < 5; i++) {
      site.push(JSON.parse(localStorage.getItem(`website-${i}`)));
    }
    console.log(site);
  }

  if (site.length == 0) {
    SetSites();
  }

  return (
    <div>
      <div onClick={Slide} className="cursor-pointer">
        play
      </div>
      <div className="w-sceen h-screen">
        <iframe src={currentSite} className="w-[100%] h-[100%]"></iframe>
      </div>
    </div>
  );
};

export default Renderer;
