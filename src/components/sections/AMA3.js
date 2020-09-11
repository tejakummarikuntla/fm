import React from "react";
import Navbar from "./Navbar";
import { Helmet } from "react-helmet";

const Ama1 = () => {
  return (
    <div>
      <Helmet>
        <title>Nidhi Thakkar -Ask Me Anything</title>
      </Helmet>

      <Navbar />
      <br />
      <br />
      <br />
      <iframe
        src="https://docs.google.com/forms/d/e/1FAIpQLSd8zGHzUej7bJ2QY5ZiJh864vYvFJwZdaVXonnYo7CfESUPfw/viewform?embedded=true"
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
