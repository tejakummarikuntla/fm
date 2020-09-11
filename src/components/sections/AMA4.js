import React from "react";
import Navbar from "./Navbar";
import { Helmet } from "react-helmet";

const Ama1 = () => {
  return (
    <div>
      <Helmet>
        <title>Prateek Narang -Ask Me Anything</title>
      </Helmet>

      <Navbar />
      <br />
      <br />
      <br />
      <iframe
        src="https://docs.google.com/forms/d/e/1FAIpQLSem6R1_ELtWHmqDb_o7UnKbzGXR5wzs5310mR2LK6OIq-AjDw/viewform?embedded=true"
        width="100%"
        height="1220"
        frameborder="0"
        marginheight="0"
        marginwidth="0"
      >
        Loading…
      </iframe>
    </div>
  );
};

export default Ama1;
